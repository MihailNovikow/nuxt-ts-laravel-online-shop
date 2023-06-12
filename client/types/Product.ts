export default interface Product {
    id: null;
    title: string;
    description: string;
    sale: boolean;
    new: boolean;
    img: string;
    category: Array<[]>;
    property: Array<[]>;
    price: number;
    priceOld: number;
}
