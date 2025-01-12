namespace ServiceDeskApi.Responses;

public class TokenResponse : BaseResponse
{
    public required string AccessToken { get; set; }
    public required string RefreshToken { get; set; }
}
