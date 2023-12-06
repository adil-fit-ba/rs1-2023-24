using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace FIT_Api_Example.Helper.Auth
{
    public class MyAuthorizationAttribute : TypeFilterAttribute
    {
        public MyAuthorizationAttribute() : base(typeof(MyAuthorizationAsyncActionFilter))
        {
        }
    }
    public class MyAuthorizationAsyncActionFilter : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(
            ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var authService = context.HttpContext.RequestServices.GetService<MyAuthService>()!;

            if (!authService.IsLogiran())
            {
                context.Result = new UnauthorizedObjectResult("niste logirani na sistem");
                return;
            }

            await next();

            Log("OnActionExecutionAsync", context.RouteData);
        }

        private void Log(string methodName, RouteData routeData)
        {
            var controllerName = routeData.Values["controller"];
            var actionName = routeData.Values["action"];
            var message = $"{methodName} controller:{controllerName} action:{actionName}";
            Debug.WriteLine(message, "Action Filter Log");
        }
    }
}
