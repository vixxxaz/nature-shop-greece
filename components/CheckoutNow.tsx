"use client"


import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/app/lib/sanity";
import { ProductCart } from "./AddToCart";



export default function CheckoutNow({
    name,
    description,
    price,
    currency,
    image,
    price_id
         } : ProductCart) {

    const {checkoutSingleItem} = useShoppingCart();

function buyNow(priceId: string) {
    checkoutSingleItem(priceId)
}

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
            buyNow(product.price_id);
        }}>Buy now</Button>
    )
}