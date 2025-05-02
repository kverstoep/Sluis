export interface IGebruiker {
    id?: string;
    email: string;
    roles: Role[];
}

export enum Role {
    ManageAlbums = 'ManageAlbums',
    ManageFotos = 'ManageFotos',
    ManageGebruikers = 'ManageGebruikers'
}