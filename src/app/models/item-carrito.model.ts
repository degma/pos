import { Item } from '../interfaces/item.interface';

export class ItemCarrito {
    public item: Item;
    public talle: string;
    public color: string;
    public cantidad: number;
    public devolucion: boolean;
}
