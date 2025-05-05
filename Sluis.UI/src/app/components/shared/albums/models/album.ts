import { IFoto } from "./foto";

export interface IAlbum {
    id?: string;
    name: string;
    fotoCount?: number;
    preview?: IFoto;
}

export interface IAlbumWithFotos {
    id?: string;
    name: string;
    fotoCount: number;
    fotos: IFoto[];
}