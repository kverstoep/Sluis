using FluentValidation;

namespace Domain;

internal sealed class CreateFotoInputValidator : AbstractValidator<CreateFotoInput>
{
    public CreateFotoInputValidator()
    {
        RuleFor(input => input.Name).NotEmpty();
    }
}