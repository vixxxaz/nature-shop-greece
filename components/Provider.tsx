"use client";


import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";




export default function CartProvider({children}: {children: ReactNode}) {
    
    return (
        <USCProvider 
            mode="subscription"
            cartMode="client-only" 
            stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
            successUrl="https://nature-shop-greece-n25a-lmak8oxh0-vixxxazs-projects.vercel.app/stripe/success"
            cancelUrl="https://nature-shop-greece-n25a-lmak8oxh0-vixxxazs-projects.vercel.app/stripe/error"
            currency="EUR"
            billingAddressCollection={true}
            shouldPersist={true}
            language="en-US"

        >
            {children}

        </USCProvider>
        );   
}