using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace PromisesDemo.Controllers
{
    public class PromisesDemoController : Controller
    {
        public ActionResult SingleRequestDemo()
        {
            ViewBag.Message = "Single Request Demo";

            return View();
        }

        public ActionResult ErrorHandlingDemo()
        {
            ViewBag.Message = "Error Handling Demo";

            return View();
        }

        public ActionResult SimplePromiseDemo()
        {
            ViewBag.Message = "Simple Promise Demo";
            return View();
        }

        public ActionResult ChainedPromisesDemo()
        {
            ViewBag.Message = "Chained Promises Demo";
            return View();
        }

        public ActionResult SynchronizationDemo()
        {
            ViewBag.Message = "Synchronization Demo";
            return View();
        }

        public ActionResult CoordinationDemo()
        {
            ViewBag.Message = "Synchronization Demo";
            return View();
        }

        [HttpPost]
        public JsonResult GetData()
        {
            var result = new List<int>() 
            { 
                1, 
                2, 
                3, 
                4,
                5, 
                6, 
                7, 
                8, 
                9,
                10
            };

            return Json(JsonConvert.SerializeObject(result)); 

        }

        [HttpPost]
        public JsonResult GetSomeId()
        {
            return Json(JsonConvert.SerializeObject(78887));
        }

        [HttpPost]
        public JsonResult GetDataById(int id)
        {
            var result = new UserProfile()
            {
                Name = "John Watson", 
                Id = 18, 
                Email = "jwatson@bakerst.com",
                IsAdmin = false

            };

            return Json(JsonConvert.SerializeObject(result));
        }

    }

    public class UserProfile
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public string Email { get; set; }
        public bool IsAdmin { get; set; }
    }
}
