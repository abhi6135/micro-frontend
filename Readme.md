# React Micro Frontend within React / CFML / ASP Containers

This project is a proof of concept showcasing the Micro Frontend concept through React. For CSS, this is using Tailwind CSS.

The **container-react** serves as the shell React application, consuming micro frontends from the **microapps** folder.

Webpack Module Federation is utilized for exposing and consuming remote applications.

Additionally, there's a configuration to export microapps artifacts in **JSON** format, enabling consumption by server-side rendered web applications like ColdFusion, Lucee, ASP.Net, JSP etc. To render the microapps, the **{{microapp}}.json** file is read in the existing page, loading JS/CSS artifacts using the JSON.

## How to run the apps?

1. Go to the microapps folder: _> cd microapps_
2. Run: _> npm run start_
3. Go the the container-react folder: _> cd ../container-react_
4. Run: _> npm run 

## How to build the microapps for server side web application?

1. Go to the microapps folder: _> cd microapps_
2. Run: _> npm run build:{{microapp}}:json_
3. Go to the _microapps/dist/{{microapp}}_ folder and you can find all the artifacts for the microapp.
4. Read the _{{microapp}}.json_ file inside your cfml/asp/jsp pages and load all the JS/CSS files.
5. Make sure that you have the root element for the microapp in the document for the app to load.
