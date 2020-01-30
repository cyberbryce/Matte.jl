
function handle_request(id, input_dict, server_module)
    fn = get_handler(id, server_module)
    names = argument_names(fn)
    args = ()
    for argname in names
        args = (args..., input_dict[string(argname)])
    end
    try
        response = fn(args...)
        Genie.Renderer.Json.json(Dict(id => response))
    catch e
        @error e
        Genie.Renderer.Json.json(Dict("matte_error_msg" => "$(typeof(e)): $(e.msg)"))
    end
end