namespace ServiceDeskApi.Responses;

public class BaseResponse
{
    public string? Message { get; set; }
    public required bool Succeeded { get; set; }
}
