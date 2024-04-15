<cfscript>

    // Load the assets for the micro app
    if( FileExists( ExpandPath( "/microapps/dist/account/account.json" ) ) ) {
        VARIABLES.ecommerce = DeserializeJson( FileRead( ExpandPath( "/microapps/dist/account/account.json" ) ) ).artifacts;
        
        VARIABLES.ecommerce.css.each(function(cssFile, index) {
            writeOutput( '<link rel="stylesheet" href="/microapps/dist#cssFile#"></link>' );
        })
        VARIABLES.ecommerce.js.each(function(jsFile, index) {
            writeOutput( '<script defer="defer" src="/microapps/dist#jsFile#"></script>' );
        })
    }
</cfscript>

<div id="microFrontendApp2">
    <style type="text/css">
        .loader-container{height:70vh;display:grid;place-items:center}.loader-container .loader-default svg{width:3.25em;transform-origin:center;animation:2s linear infinite rotate4}.loader-container .loader-default svg circle{fill:none;stroke:#1badba;stroke-width:4;stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;animation:1.5s ease-in-out infinite dash4}@keyframes rotate4{100%{transform:rotate(360deg)}}@keyframes dash4{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,200;stroke-dashoffset:-35px}100%{stroke-dashoffset:-125px}}
    </style>
    <div class="loader-container">
        <div class="loader-default">
            <svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        </div>
    </div>
</div>