using FluentValidation;

namespace Domain;

internal sealed class UpdateFotoInputValidator : AbstractValidator<UpdateFotoInput>
{
    public UpdateFotoInputValidator()
    {
        RuleFor(input => input.Name).NotEmpty();
    }
}