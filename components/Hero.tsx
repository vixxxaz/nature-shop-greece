import Image from "next/image";
import {client, urlFor} from "../app/lib/sanity"
import Link from "next/link";

async function getData() {
    const query = "*[_type == 'heroimage'][0]"
    const data = await client.fetch(query)
    return data
}

export default async function Hero()  {

    const data = await getData();
    
    return(
        <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 ">
            <div className="mb-8 flex-wrap justify-content mb:mb-16">
                <div className="mb-6 w-flex flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className="mb-4 text-4xl font-bold text-primary sm:text-5xl md:mb-8 md:text-6xl">
                        Top product natural from greece !
                    </h1>
                    <p className="max-w-md leading-relaxed text-gray-600 font-semibold">
                        You look for best quality in natural product,
                        cultivate in greece with love and without chemical !                       
                    </p>
                </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-1/3">
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-secondary shadow-lg md:left-16 md:top-16 lg-ml-0">
                        <Image 
                        src={urlFor(data.image1).url()}
                        alt="image de base"
                        priority
                        className="h-full w-full object-cover object-center"
                        width={500}
                        height={500}
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-secondary shadow-lg">
                        <Image 
                        src={urlFor(data.image2).url()}
                        alt="image de base"
                        priority
                        className="h-full w-full object-cover object-center"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>            
            </div>
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border mt-12 bg-green-400">
                    <Link href="/Food" className="flex w-1/3 items-center justify-center text-gray-600 transition duration-100 hover:bg-gray-100 hover:bg-gray-200 " >Food</Link>
                    <Link href="/Herbs" className="flex w-1/3 items-center justify-center text-gray-600 transition duration-100 hover:bg-gray-100 hover:bg-gray-200 " >Herbs</Link>
                    <Link href="/Medic" className="flex w-1/3 items-center justify-center text-gray-600 transition duration-100 hover:bg-gray-100 hover:bg-gray-200 " >Medic</Link>
                </div>
            </div>
        </section>
    );
}