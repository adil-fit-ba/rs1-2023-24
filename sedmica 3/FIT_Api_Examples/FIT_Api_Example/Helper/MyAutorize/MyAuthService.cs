using Microsoft.AspNetCore.Connections.Features;

namespace FIT_Api_Example.Helper.MyAutorize
{
    public class MyAuthService
    {
        private readonly HttpContext _httpContext;

        public MyAuthService(
            IHttpContextAccessor httpContextAccessor
            )
        {
            _httpContext = httpContextAccessor.HttpContext!;
        }

        public bool IsAuthorized()
        {
            var token= this._httpContext.Request.Headers["auth-token"];
            return token == "123456";
        }
    }
}
