"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from 'lucide-react'

const links = [
    {name: 'Home', href: '/'},
    {name: 'Food', href: '/Food'},
    {name: 'Herbs', href: '/Herbs'},
    {name:'Medic', href: '/Medic'},
]



export default function NavBar() {

    const pathname = usePathname();
    
    return (
        <header className="mb-8 border-b bg-secondary">
            <div className=" flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">

                <Link href="/">
                    <h1 className="text-2xl font-display antialiased md:text-4xl font-extrabold text-blue-500 "><span className=" text-green-400">Nature Shop</span> Epanomi <span className="tracking-[.25em] text-primary">GREECE</span></h1>
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16 ">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathname === link.href ? (
                                <Link className="text-lg font-semibold text-primary" href={link.href}>
                                    {link.name}
                                </Link>
                            ) : (
                                <Link className="text-lg font-semibold text-black transition duration-100 hover:text-primary" href={link.href}>
                                    {link.name}
                                </Link>                      
                            ) }
                        </div>
                    ))}
                </nav>
                <div className="flex divide-x border-r sm:border-l">
                    <Button variant={"outline"}  className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md-w-24 round-none ">
                    <ShoppingBag />
                    <span className="hidden text-sm font-semibold text-primary sm:block">Cart</span>
                    </Button>
                </div>
            </div>
        </header>
    )



}