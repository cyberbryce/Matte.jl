var documenterSearchIndex = {"docs":
[{"location":"input-elements.html#Input-elements-1","page":"Input elements","title":"Input elements","text":"","category":"section"},{"location":"input-elements.html#","page":"Input elements","title":"Input elements","text":"slider\ntext_input\nnumber_input","category":"page"},{"location":"input-elements.html#Matte.slider","page":"Input elements","title":"Matte.slider","text":"slider(id, label, min, max, default = Int(round((max + min) / 2))\n\nInput element that allows users to select among a set of integers using a slider\n\n\n\n\n\n","category":"function"},{"location":"input-elements.html#Matte.text_input","page":"Input elements","title":"Matte.text_input","text":"text_input(id, label, default = \"\")\n\nFree text field for string input by users\n\nNote that a text input always returns a String to the server. If you need users to be able to freely enter a number, use number_input.\n\n\n\n\n\n","category":"function"},{"location":"input-elements.html#Matte.number_input","page":"Input elements","title":"Matte.number_input","text":"number_input(id, label, default = 0)\n\nForm input that only accepts numbers\n\nNote that number_input always returns a float to the server. If you need a string use text_input. If you need integers, you can use a slider or round the result.\n\n\n\n\n\n","category":"function"},{"location":"getting-started.html#getting-started-1","page":"Getting started","title":"Getting started","text":"","category":"section"},{"location":"getting-started.html#Installation-1","page":"Getting started","title":"Installation","text":"","category":"section"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"Matte is not yet registered in the julia general repository. To install the latest release run the following from the Pkg repl (type ] to get there):","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"pkg> add https://github.com/angusmoore/Matte.jl.git#v0.1.0","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"You can install the latest development version by removing the #v0.1.0.","category":"page"},{"location":"getting-started.html#Creating-your-first-app-1","page":"Getting started","title":"Creating your first app","text":"","category":"section"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"To create the skeleton for a Matte app, start julia, run using Matte and then run:","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"julia> new_matte_app(\"path/to/app\")","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"Matte will create a new folder and julia project at your chosen path and create all the files necessary to get started with Matte. Change your directory to where you just created your app and activate the new project:","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"julia> cd(\"path/to/app\")\npkg> activate .","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"(Remember ] gets you into the Pkg repl)","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"Matte has created a simple app in that directory. The app is defined in the file called app.jl. It defines a module called MyApp. This is, well, your brand new Matte app.","category":"page"},{"location":"getting-started.html#Running-your-new-app-1","page":"Getting started","title":"Running your new app","text":"","category":"section"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"Let's run our new app.","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"But before we do: a note about Revise. I highly recommend using Revise with Matte. This lets you edit your app and see the changes immediately, without having to restart your app. Revise is included by default when you create a new Matte app, so all we need to do is:","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"julia> using Revise","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"Back to our app.","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"To run the app, we need to first load Matte, and then load our module MyApp:","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"julia> using Matte\njulia> includet(\"app.jl\")","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"(Note that I use includet from Revise, to track changes to the file. If you aren't using Revise, just use include. But you should definitely use Revise!)","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"All we need to do now is run our app. We do this using the Matte function run_app, which takes the module that defines our app as argument:","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"julia> run_app(MyApp)","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"Matte will take a little while to start. Your app is up and running once you see:","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"Web Server starting at http://0.0.0.0:8000","category":"page"},{"location":"getting-started.html#","page":"Getting started","title":"Getting started","text":"Navigate your favourite web browser to the address listed above and (after a few seconds) viola! Your app is ready!","category":"page"},{"location":"intro.html#The-basics-1","page":"Introduction to Matte","title":"The basics","text":"","category":"section"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"Matte comes with a number of example apps to demonstrate how it works. Let's start with the hello_world example.","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"Open Julia. If you haven't already, install Matte – instructions can be found in the Getting started part of the manual.","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"Next create a new Matte app, and populate it with the included hello_world app by running:","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"julia> using Matte\njulia> matte_example(\"hello_world\", \"path/to/example\")","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"where path/to/example is an empty folder where you want to create the new app. Matte will create a new project at that location. Change your working directory to that location:","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"julia> cd(\"path/to/example\")","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"and open up the folder in your favourite editor. There are two files that Matte has created: app.jl and a Project.toml.  Project.toml is a standard project file for Julia's package manager, for specifying your app's dependencies. app.jl (unsurprisingly!) is the app. It defines the server-side logic, and the UI. Open that file in your favourite editor. It should look like this:","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"module HelloWorldApp\n\nusing Matte\n\nconst title = \"Hello World\"\n\nfunction ui()\n    sidebar_layout(\n        side_panel(\n            h1(\"Hello World!\"),\n            text_input(\"my_input\", \"Input some text\")\n        ),\n        main_panel(\n            h1(\"You wrote:\"),\n            p(text_output(\"my_output\"))\n        )\n    )\nend\n\nmodule Server\n\nfunction my_output(my_input)\n    my_input\nend\n\nend\n\nend","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"Before we dig in to what makes a Matte app, let's run the app. First we need to activate the project, and load Revise (so that can make changes to our app without having to restart. You don't have to use Revise. But you should!):","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"pkg> activate .\njulia> using Revise\njulia> includet(\"hello_world.app\")\njulia> run_app(HelloWorldApp)","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"Open your favourite web browser and visit http://localhost:8000. After a few seconds you should see a simple webpage that looks like this: (Image: Hello world screenshot)","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"You can type some text on the left, and it will appear on the right. Not very exciting, but it's our first Matte app!","category":"page"},{"location":"intro.html#Key-element-1:-App-module-1","page":"Introduction to Matte","title":"Key element 1: App module","text":"","category":"section"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"All Matte apps are defined as modules. The modules must contain three things:","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"A const String called title that defines the app title.\nA function called ui that defines (and returns!) the ui\nA sub-module called server","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"You can structure this module however you like: it can be one file (like the hello_world example), or split across many. There are no restrictions on the name of the app module. The module can import packages, these just need to specified as with any julia project.","category":"page"},{"location":"intro.html#Key-element-2:-Defining-the-UI-1","page":"Introduction to Matte","title":"Key element 2: Defining the UI","text":"","category":"section"},{"location":"intro.html#Key-element-3:-Server-side-logic-1","page":"Introduction to Matte","title":"Key element 3: Server-side logic","text":"","category":"section"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"Server side logic is contained in a module that must be called Server, as a sub-module of your app module.","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"Each function in the server module represents an output variable that can be rendered in your UI. These functions take as inputs variables whose names must correspond to input variables in your UI (i.e. the ids of your various input elements.","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"In our hello_world app, we have only one output variable called my_output. It takes a single argument, my_input. In our UI, my_input is the id for the text input. As it stands, this function is pretty boring. It just returns whatever is in the text input. Let's make it a bit more exciting, by having it replace any 'a' it finds with a 'b'. Replace the definition of my_output with the following:","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"function my_output(my_input)\n  replace(my_input, \"a\" => \"b\")\nend","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"Go back to your browser, refresh the page, and try out the new text input.","category":"page"},{"location":"intro.html#","page":"Introduction to Matte","title":"Introduction to Matte","text":"That's it! You've created, customised and run your first Matte app. In the next article Building a Matte app we'll go into more detail about creating UIs and server-side logic.","category":"page"},{"location":"output-elements.html#Output-elements-1","page":"Output elements","title":"Output elements","text":"","category":"section"},{"location":"output-elements.html#","page":"Output elements","title":"Output elements","text":"text_output","category":"page"},{"location":"output-elements.html#Matte.text_output","page":"Output elements","title":"Matte.text_output","text":"text_output(id)\n\nRender the output from the server as raw text.\n\nThis is best used with a formatting tag (such as p() or heading h1() etc)\n\n\n\n\n\n","category":"function"},{"location":"layouts.html#Layouts-1","page":"Layouts","title":"Layouts","text":"","category":"section"},{"location":"layouts.html#Sidebar-layouts-1","page":"Layouts","title":"Sidebar layouts","text":"","category":"section"},{"location":"layouts.html#","page":"Layouts","title":"Layouts","text":"Sidebar layouts split the page into one-third (for a control panel) and two-thirds (for the output). Each third is displayed in a card to visually separate it.","category":"page"},{"location":"layouts.html#","page":"Layouts","title":"Layouts","text":"sidebar_layout\nside_panel\nmain_panel","category":"page"},{"location":"layouts.html#Matte.sidebar_layout","page":"Layouts","title":"Matte.sidebar_layout","text":"sidebar_layout(leftpanel, rightpanel)\n\nCreate a side bar layout for your app: a 1/3 width control panel and a 2/3 width main/output panel.\n\n\n\n\n\n","category":"function"},{"location":"layouts.html#Matte.side_panel","page":"Layouts","title":"Matte.side_panel","text":"side_panel(content...)\n\nA narrow/side control (1/3 width) panel to be embedded in a sidebar_layout\n\nShould only be used as part of a sidebar_layout\n\n\n\n\n\n","category":"function"},{"location":"layouts.html#Matte.main_panel","page":"Layouts","title":"Matte.main_panel","text":" main_panel(content...)\n\nA main (2/3 width) panel to be embedded in a sidebar_layout\n\nShould only be used as part of a sidebar_layout\n\n\n\n\n\n","category":"function"},{"location":"layouts.html#Tab-panel-layout-1","page":"Layouts","title":"Tab panel layout","text":"","category":"section"},{"location":"layouts.html#","page":"Layouts","title":"Layouts","text":"Layout with pages/panels controlled by a tab bar.","category":"page"},{"location":"layouts.html#","page":"Layouts","title":"Layouts","text":"tabs_layout\ntab_panel","category":"page"},{"location":"layouts.html#Matte.tabs_layout","page":"Layouts","title":"Matte.tabs_layout","text":"tabs_layout(tabs...; vertical = false)\n\nCreate a tab layout – app (or inset) with pages that can be navigated to using a series of tabs\n\n\n\n\n\n","category":"function"},{"location":"layouts.html#Matte.tab_panel","page":"Layouts","title":"Matte.tab_panel","text":"tab_panel(title, content)\n\nDefine a panel for use in a tab layout\n\ntab_panel should only be used as input to a tabs_layout\n\n\n\n\n\n","category":"function"},{"location":"layouts.html#Custom-layouts-1","page":"Layouts","title":"Custom layouts","text":"","category":"section"},{"location":"layouts.html#","page":"Layouts","title":"Layouts","text":"Functions to create custom flexgrid layouts using Vuetify's built-in container layout.","category":"page"},{"location":"layouts.html#","page":"Layouts","title":"Layouts","text":"custom_grid_layout\ncustom_grid_row\ncustom_grid_column\ncustom_card","category":"page"},{"location":"layouts.html#Matte.custom_grid_layout","page":"Layouts","title":"Matte.custom_grid_layout","text":"custom_grid_layout(content...)\n\nCreate a container to contain a custom layout.\n\nContainers embed rows (which embed columns) to create layouts.\n\n\n\n\n\n","category":"function"},{"location":"layouts.html#Matte.custom_grid_row","page":"Layouts","title":"Matte.custom_grid_row","text":"custom_grid_row(content...)\n\nCreate a row for a custom layout\n\nRows wrap columns.\n\n\n\n\n\n","category":"function"},{"location":"layouts.html#Matte.custom_grid_column","page":"Layouts","title":"Matte.custom_grid_column","text":"custom_grid_column(content...; width = 12)\n\nCreate a layout column that covers width/12 of the row\n\nColumns must be contained in rows (custom_grid_row)\n\n\n\n\n\n","category":"function"},{"location":"layouts.html#Matte.custom_card","page":"Layouts","title":"Matte.custom_card","text":"custom_card(content...)\n\nCreate a 'card' to contain content. Cards are boxes with drop shadows.\n\nFor use in custom_grid_layouts, to define sections of the page inside a column\n\n\n\n\n\n","category":"function"},{"location":"ui-style.html#Controlling-UI-look-and-style-1","page":"Controlling style","title":"Controlling UI look and style","text":"","category":"section"},{"location":"ui-style.html#Basic-text-formatting-1","page":"Controlling style","title":"Basic text formatting","text":"","category":"section"},{"location":"ui-style.html#","page":"Controlling style","title":"Controlling style","text":"p\nh1\nh2\nh3\nbr","category":"page"},{"location":"ui-style.html#Matte.p","page":"Controlling style","title":"Matte.p","text":"p(contents)\n\nWrap some text in a paragraph tag. Helps with layout of raw text.\n\n\n\n\n\n","category":"function"},{"location":"ui-style.html#Matte.h1","page":"Controlling style","title":"Matte.h1","text":"h1(contents...)\n\nShow contents as a level 1 heading\n\n\n\n\n\n","category":"function"},{"location":"ui-style.html#Matte.h2","page":"Controlling style","title":"Matte.h2","text":"h2(contents...)\n\nShow contents as a level 2 heading\n\n\n\n\n\n","category":"function"},{"location":"ui-style.html#Matte.h3","page":"Controlling style","title":"Matte.h3","text":"h3(contents...)\n\nShow contents as a level 3 heading\n\n\n\n\n\n","category":"function"},{"location":"ui-style.html#Matte.br","page":"Controlling style","title":"Matte.br","text":"br()\n\nInsert a line break (html <br>) into your UI\n\n\n\n\n\n","category":"function"},{"location":"ui-style.html#Notifying-users-of-events-1","page":"Controlling style","title":"Notifying users of events","text":"","category":"section"},{"location":"ui-style.html#","page":"Controlling style","title":"Controlling style","text":"dialog","category":"page"},{"location":"ui-style.html#Matte.dialog","page":"Controlling style","title":"Matte.dialog","text":"dialog(id, title, content, width = 500)\n\nDisplay a dialog box (which pops over the rest of the content, forcing user acknowledgement). Visibility is controlled by id. A common use case is to define this output function to have sole input from a button, and simply return whether the button has been clicked.\n\ntitle and content can be dynamically set.\n\nIf you need to include multiple elements inside content, wrap them as a tuple.\n\n\n\n\n\n","category":"function"},{"location":"building-app.html#building-app-1","page":"Building Matte apps","title":"Building a Matte app","text":"","category":"section"},{"location":"building-app.html#","page":"Building Matte apps","title":"Building Matte apps","text":"More detailed on ui and server","category":"page"},{"location":"index.html#Matte-1","page":"Matte","title":"Matte","text":"","category":"section"},{"location":"index.html#","page":"Matte","title":"Matte","text":"Matte is a julia library for julia-powered dashboards, inspired by Google's material design. Matte makes it easy to convert your existing julia code into a beautiful and powerful dashboard for end users. Matte is easy to use, fast, and powerful.","category":"page"},{"location":"index.html#","page":"Matte","title":"Matte","text":"Please note: Matte is still highly experimental.","category":"page"},{"location":"index.html#Examples-1","page":"Matte","title":"Examples","text":"","category":"section"},{"location":"index.html#Support,-bugs,-and-planned-features-1","page":"Matte","title":"Support, bugs, & planned features","text":"","category":"section"},{"location":"index.html#","page":"Matte","title":"Matte","text":"General support for help with usage and troubleshooting is best directed to the julialang discourse.","category":"page"},{"location":"index.html#","page":"Matte","title":"Matte","text":"Please report any bugs you find on the github issue tracker. Feature requests can be logged there too.","category":"page"},{"location":"index.html#Acknowledgements-1","page":"Matte","title":"Acknowledgements","text":"","category":"section"},{"location":"index.html#","page":"Matte","title":"Matte","text":"Matte is made possible by a range of excellent julia and javascript open source libraries. Of particular note: Genie.jl, Vuetify and Vue.js.","category":"page"},{"location":"running-creating.html#Running-and-creating-apps-1","page":"Running and creating apps","title":"Running and creating apps","text":"","category":"section"},{"location":"running-creating.html#Run-1","page":"Running and creating apps","title":"Run","text":"","category":"section"},{"location":"running-creating.html#","page":"Running and creating apps","title":"Running and creating apps","text":"run_app","category":"page"},{"location":"running-creating.html#Matte.run_app","page":"Running and creating apps","title":"Matte.run_app","text":"Run a Matte app\n\nInputs:     app: The module that defines your app.     async (optional, default false): Start the server in async mode (returns a     repl after starting the server).\n\nThe module that defines your app must have a function called ui that defines the UI. The functions in the module (which don't need to be exported) define the logic for your app. The name of the function is the name of the outputs in your UI, and the inputs to those functions correspond to the ids of inputs in the UI.\n\nSee the getting started guide for help on how to define your app.\n\n\n\n\n\n","category":"function"},{"location":"running-creating.html#Helpers-to-create-apps-1","page":"Running and creating apps","title":"Helpers to create apps","text":"","category":"section"},{"location":"running-creating.html#","page":"Running and creating apps","title":"Running and creating apps","text":"new_matte_app\nmatte_example","category":"page"},{"location":"running-creating.html#Matte.new_matte_app","page":"Running and creating apps","title":"Matte.new_matte_app","text":"new_matte_app(path, force = false)\n\nCreate a new skeleton Matte app in the folder path. The folder should be empty. Matte will create the final folder if it doesn't exist, but will fail if the rest of the path doesn't exist.\n\npath should be a folder that doesn't exist. If it doesnt, you can use force = true to overwrite\n\n\n\n\n\n","category":"function"},{"location":"running-creating.html#Matte.matte_example","page":"Running and creating apps","title":"Matte.matte_example","text":"matte_example(example, path, force = false)\n\nCreate a new Matte app, based on the example specified by example. See the manual for a list of examples that you can use here.\n\npath should be a folder that doesn't exist. If it doesnt, you can use force = true to overwrite\n\n\n\n\n\n","category":"function"}]
}
