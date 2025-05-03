using FluentValidation;

namespace Domain;

internal sealed class UpdateGebruikerInputValidator : AbstractValidator<UpdateGebruikerInput>
{
    public UpdateGebruikerInputValidator()
    {
        RuleFor(input => input.Email).NotEmpty();
    }
}