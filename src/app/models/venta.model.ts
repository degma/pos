import { ItemCarrito } from './item-carrito.model';

export class Venta {
    public id: string;
    public fecha: Date;
    public metodoPago: string;
    public items: ItemCarrito[];

}
