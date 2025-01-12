namespace ServiceDeskApi.Responses;

public class DataResponse<T> : BaseResponse where T : class
{
    public required T Data { get; set; }
}
