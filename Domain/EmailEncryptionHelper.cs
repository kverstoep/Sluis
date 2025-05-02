using System.Security.Cryptography;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Domain;

public static class EncryptionHelper
{
    private static IDataProtector protector;

    public static void Initialize(IDataProtectionProvider provider)
    {
        protector = provider.CreateProtector("EmailProtector");
    }

    public static string Encrypt(string plaintext)
    {
        if (protector == null) throw new InvalidOperationException("EncryptionHelper is not initialized.");
        return protector.Protect(plaintext);
    }

    public static string Decrypt(string dbValue)
    {
        if (protector == null) throw new InvalidOperationException("EncryptionHelper is not initialized.");
        try
        {
            return protector.Unprotect(dbValue);
        }
        catch (CryptographicException) // If decryption fails, assume it's plaintext
        {
            return dbValue; 
        }
    }
}