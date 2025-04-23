using FluentValidation;

namespace Domain;

internal sealed class CreateAlbumInputValidator : AbstractValidator<CreateAlbumInput>
{
    public CreateAlbumInputValidator()
    {
        RuleFor(input => input.Name).NotEmpty();
    }
}