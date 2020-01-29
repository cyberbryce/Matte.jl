module Matte

import Genie, Genie.Router
import Pkg

# layouts
export sidebar_layout, side_panel, main_panel
export tabs_layout, tab_panel
export custom_grid_layout, custom_grid_row, custom_grid_column, custom_card

# style elements
export p, h1, h2, h3, br

# input elements
export slider, text_input, number_input, button

# output elements
export text_output

# functions and helpers
export run_app
export new_matte_app, matte_example

include("reflection.jl")
include("ui-misc.jl")
include("ui-design-elements.jl")
include("ui-input-elements.jl")
include("ui-layouts.jl")
include("ui-output-elements.jl")
include("generate-js.jl")
include("template.jl")
include("run.jl")
include("backend.jl")
include("usethis.jl")

end # module
