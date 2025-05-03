export interface IGebruiker {
    id?: string;
    imageUrl?: string;
    email: string;
    roles: Role[];
}

export enum Role {
    ManageFotos = 'ManageFotos',
    ManageGebruikers = 'ManageGebruikers'
}
