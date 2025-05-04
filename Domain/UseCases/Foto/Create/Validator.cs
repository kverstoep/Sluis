using FluentValidation;

namespace Domain;

internal sealed class CreateFotoInputValidator : AbstractValidator<CreateFotoInput>
{
    public CreateFotoInputValidator()
    {
        RuleFor(input => input.Image).NotEmpty();

        RuleFor(input => input.AlbumId).NotEmpty();
    }
}