using FluentValidation;

namespace Domain;

internal sealed class CreateGebruikerInputValidator : AbstractValidator<CreateGebruikerInput>
{
    public CreateGebruikerInputValidator()
    {
        RuleFor(input => input.Email).NotEmpty();
    }
}