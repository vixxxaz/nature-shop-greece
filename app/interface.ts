export interface simplifiedProduct {
    _id:number;
    imageUrl: string;
    slug: string;
    price: number;
    categoryName: string;
    name: string;
}

export interface fullProduct {
    _id:string;
    images: any;
    slug: string;
    price: number;
    categoryName: string;
    name: string;
    description: string;

}