using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication3.Controllers
{
    public class microappsController : Controller
    {
        // GET: Account
        public ActionResult Account()
        {
            string jsonFilePath = Server.MapPath("~/Scripts/account/account.json");

            // Read the JSON file
            string jsonData = System.IO.File.ReadAllText(jsonFilePath);

            // Parse JSON
            JObject jsonObject = JObject.Parse(jsonData);

            // Get the array of JavaScript files
            JArray jsArray = (JArray)jsonObject["artifacts"]["js"];

            // Convert JArray to string array
            string[] jsFiles = jsArray.ToObject<string[]>();

            // Pass the JavaScript file paths to the View
            return View(jsFiles);



        }
        public ActionResult Products()
        {
            string jsonFilePath = Server.MapPath("~/Scripts/ecommerce/ecommerce.json");

            // Read the JSON file
            string jsonData = System.IO.File.ReadAllText(jsonFilePath);

            // Parse JSON
            JObject jsonObject = JObject.Parse(jsonData);

            // Get the array of JavaScript files
            JArray jsArray = (JArray)jsonObject["artifacts"]["js"];

            // Convert JArray to string array
            string[] jsFiles = jsArray.ToObject<string[]>();

            // Pass the JavaScript file paths to the View
            return View(jsFiles);



        }

    }
}