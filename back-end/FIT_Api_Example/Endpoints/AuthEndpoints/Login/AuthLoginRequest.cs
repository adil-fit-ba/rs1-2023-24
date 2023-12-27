namespace FIT_Api_Example.Endpoints.AuthEndpoints.Login;

public class AuthLoginRequest
{
    public string KorisnickoIme { get; set; }
    public string Lozinka { get; set; }
    public string SignalRubConnectionID { get; set; }
}