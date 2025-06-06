﻿using Clean.Core;

namespace Domain;

internal sealed class GetFotoUseCase(IEntityGateway<Foto> gateway) : IUseCase<GetFotoInput>
{
    public async Task<IOutput> ExecuteAsync(GetFotoInput input) =>
        new GetFotoOutput(await gateway.FindAsync(input.Id));
}