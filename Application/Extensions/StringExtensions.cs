using System.Collections.Generic;
using System.IO;

namespace Application;

internal static class StringExtensions
{
    public static string MimeType(this string filename) =>
        MimeTypes.Types.TryGetValue(Path.GetExtension(filename), out var mimeType) ? mimeType : null;
}

internal static class MimeTypes
{
    public static Dictionary<string, string> Types = new()
    {
        { ".xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
        { ".pdf", "application/pdf" },
        { ".png", "image/png" }
    };
}