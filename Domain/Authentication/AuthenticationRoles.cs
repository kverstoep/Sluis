﻿using System.Text.Json.Serialization;

namespace Domain;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum UserRole
{
    Gebruiker,
    ManageFotos,
    ManageGebruikers
}

