using Microsoft.AspNetCore.Mvc;

namespace FIT_Api_Example.Helper
{
    [ApiController]
    public abstract class MyBaseEndpoint<TRequest, TResponse>:ControllerBase
    {
        public abstract TResponse Obradi(TRequest request);
    }
}
