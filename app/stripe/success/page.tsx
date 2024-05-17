import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function stripeSuccess() {


    return ( 
    <div className="h-screen">
            <div className="mt-32 md:max-w-[50vw] x-auto">
                <CheckCheck className="text-green-600 w-16 h-15 mx-auto my-16"/>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-500 font-semibold text-center">
                        Payment done !
                    </h3>
                    <p className="my-2 text-gray-500">thanks for your order</p>
                    <Button asChild>
                        <Link href="/">
                            back home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}