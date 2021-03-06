function render_response(response)
    if Tables.istable(response)
        render_df_response(response)
    else
        error("Don't know how to render result of type `$(typeof(response))`")
    end
end

render_response(response::AbstractString) = response
render_response(response::Bool) = response
render_response(response::Number) = response
render_response(response::Nothing) = nothing
render_response(response::DataFrames.AbstractDataFrame) = render_df_response(response)

function render_response(response::Plots.Plot)
    io = IOBuffer()
    show(io, "image/png", response)
    png = read(seekstart(io), String)

    "data:image/png;base64," * base64encode(png)
end

function jsonify_table_row(row)
    Dict(columnname => getproperty(row, columnname) for columnname in propertynames(row))
end

function render_df_response(response)
    data = [jsonify_table_row(row) for row in Tables.rows(response)]
    if length(data) == 0
         data = String[]
     end
    colnames = string.(Tables.schema(response).names)
    header = [Dict(:text => colname, :value => colname) for colname in colnames]

    [header, data...]
end

function render_response(response::AbstractArray)
    response
end

function handle_request(id, input_dict, server_module, session)
    fn = get_handler(id, server_module)
    names = argument_names(fn)
    args = ()
    for argname in names
        if argname == :session
            args = (args..., session)
        else
            try
                args = (args..., input_dict[string(argname)])
            catch e
                msg = sprint(showerror, e)
                if typeof(e) <: KeyError
                    msg = "Bad Server module configuration: Server-side function `$id` takes `$argname` as an input, but there is no UI element with that id"
                    @error msg
                end
                return JSON.json(Dict("matte_error_msg" => msg))
            end
        end
    end
    try
        response = fn(args...)
        response = render_response(response)
        JSON.json(Dict("id" => id, "value" => response))
    catch e
        msg = sprint(showerror, e)
        @error string(msg, "\nError occurred calling function `$fn` with arguments: `$(args...)`")

        JSON.json(Dict("matte_error_msg" => msg))
    end
end
