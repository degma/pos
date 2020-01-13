import { Deserializable } from './deserializable.model'
import { Usuario } from './usuario.model';

export class ItemModel implements Deserializable {

    public id: string;
    public nombre: string;
    public descripcion: string;
    public fabricanteId: string;
    public categoria: string[];
    public genero: string[];
    public precio: number;


    deserialize(input: any): this {
        Object.assign(this, input);

        return this;
    }

}
