using System.Web;
using System.Web.Optimization;

namespace WebApplication3
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));


 //           bundles.Add(new ScriptBundle("~/bundles/Account").Include(
 //    "~/Scripts/Account/vendor-react-dom.c1e84cb31c30b3e97fd7.bundle.js",
 //    "~/Scripts/Account/vendor-scheduler.2e27c95bc60cc108a0bd.bundle.js",
 //    "~/Scripts/Account/vendor-react.6a1d7c06f6c60b9f2b71.bundle.js",
 //    "~/Scripts/Account/vendor-react-router.2615da9f0655b6e17983.bundle.js",
 //    "~/Scripts/Account/vendor-react-router-dom.4314188950079263afe3.bundle.js",
 //    "~/Scripts/Account/vendor-remix-run.70b4408ef816a646f16d.bundle.js",
 //    "~/Scripts/Account/main.c42c1c586b211eb00e7c.bundle.js"
 //));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
