<cfscript>

    // Load the assets for the micro app
    if( FileExists( ExpandPath( "/microapps/dist/ecommerce/ecommerce.json" ) ) ) {
        VARIABLES.ecommerce = DeserializeJson( FileRead( ExpandPath( "/microapps/dist/ecommerce/ecommerce.json" ) ) ).artifacts;
        
        VARIABLES.ecommerce.css.each(function(cssFile, index) {
            writeOutput( '<link rel="stylesheet" href="/microapps/dist#cssFile#"></link>' );
        })
        VARIABLES.ecommerce.js.each(function(jsFile, index) {
            writeOutput( '<script defer="defer" src="/microapps/dist#jsFile#"></script>' );
        })
    }
</cfscript>

<div id="microFrontendApp1"></div>