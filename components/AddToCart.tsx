"use client"

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "../app/lib/sanity";

export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
    price_id: string  
}

export default function AddToCart({
    currency,
    description,
    image,
    name,
    price,
    price_id,
         } : ProductCart) {

    const {addItem, handleCartClick} = useShoppingCart();
    
    const product = {
            name: name,
            description: description,
            price: price,
            currency: currency,
            image: urlFor(image).url(),
            price_id: price_id
    };
    
    return (       
        <Button onClick={() => {
            addItem(product), handleCartClick();
        }}>Add to cart</Button>
    )
}