<cfparam name="ATTRIBUTES.pageDescription" default="Container App - CFML">
<cfparam name="ATTRIBUTES.pageTitle" default="Container App - CFML">
<cfparam name="ATTRIBUTES.pageContent" default="/container-cfml/includes/home.cfm">

<cfoutput>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="##000000" />
            <meta name="description" content="#EncodeForHTMLAttribute( ATTRIBUTES.pageDescription )#" />
            <title>#EncodeForHTML( ATTRIBUTES.pageTitle )#</title>

            <link rel="stylesheet" href="/container-cfml/styles/base.css" />
            <link rel="stylesheet" href="/container-cfml/styles/main.css" />
            <link rel="stylesheet" href="/container-cfml/styles/app.css" />
        </head>
        <body data-new-gr-c-s-check-loaded="14.1166.0" data-gr-ext-installed="">
            <noscript>You need to enable JavaScript to run this app.</noscript>

            <div id="root">
                <cfinclude template="header.cfm">

                <cfif FileExists( ATTRIBUTES.pageContent )>
                    <cfinclude template="#ATTRIBUTES.pageContent#">
                </cfif>
                
                <cfinclude template="footer.cfm">
            </div>

            <div id="headlessui-portal-root">
                <div data-headlessui-portal=""><div></div></div>
            </div>
        </body>
    </html>

</cfoutput>