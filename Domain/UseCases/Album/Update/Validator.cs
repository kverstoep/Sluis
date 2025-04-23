using FluentValidation;

namespace Domain;

internal sealed class UpdateAlbumInputValidator : AbstractValidator<UpdateAlbumInput>
{
    public UpdateAlbumInputValidator()
    {
        RuleFor(input => input.Name).NotEmpty();
    }
}