using Microsoft.AspNetCore.SignalR;

namespace FIT_Api_Example.SignalRHubs
{
    public class PorukeHub : Hub
    {
        /*
         //ako zelimo poslati poruku od clienta (JS) do servera
        public async Task ProslijediPoruku(string p)
        {
            await Clients.Others.SendAsync("PosaljiPoruku", p);
        }*/
    }
}

