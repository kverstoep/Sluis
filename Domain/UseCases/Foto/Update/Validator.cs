using FluentValidation;

namespace Domain;

internal sealed class UpdateExampleInputValidator : AbstractValidator<UpdateFotoInput>
{
    public UpdateExampleInputValidator()
    {
        RuleFor(input => input.Name).NotEmpty();
    }
}