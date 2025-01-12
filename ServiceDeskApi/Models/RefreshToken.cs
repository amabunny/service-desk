using System.ComponentModel.DataAnnotations;

namespace ServiceDeskApi.Models;

public class RefreshToken
{
    public Guid Id { get; set; }
    [MaxLength(100)] public required string Token { get; set; }
    public DateTime Expires { get; set; }
    public bool IsExpired => DateTime.UtcNow >= Expires;
    public DateTime Created { get; set; }
    public DateTime? Revoked { get; set; }
    public bool IsActive => Revoked == null && !IsExpired;

    public Guid UserId { get; set; }
    public required User User { get; set; }
}
