using FIT_Api_Example.Helper.Auth;
using Microsoft.AspNetCore.SignalR;

namespace FIT_Api_Example.SignalRHubs
{
    public class PorukeHub : Hub
    {
        /*
         //ako zelimo poslati poruku od clienta (JS) do servera (alternativa za http protokol)
        public async Task ProslijediPoruku(string p)
        {
            await Clients.Others.SendAsync("PosaljiPoruku", p);
        }*/


        public override Task OnConnectedAsync()
        {
            var myAuthToken = Context?.GetHttpContext()?.GetRouteValue("myAuthToken") as string;
            return base.OnConnectedAsync();
        }

        public string GetConnectionId() => Context.ConnectionId;
   
    }
}

