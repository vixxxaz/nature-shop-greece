import { client } from "@/app/lib/sanity";
import { fullProduct } from "@/app/interface";
import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import AddToCart from "@/components/AddToCart";


async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}" ][0]{
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name
      }`;

      const data = await client.fetch(query)

      return data;
}



export default async function ProductPge({
    params, 
} : {
    params: {slug: 'string'}
}) {

    const data: fullProduct = await getData(params.slug)
    
    return (

        <div className="bg-secondary ">
            <div className="mx-auto max-wind-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data.images} />
                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <span className="text-1xl mb-0.5 inline-block text-gray-500  text-1xl lg:text-2xl ">
                               Category: {data.categoryName}
                            </span>
                            <h2 className="mt-5 text-2xl text-primary font-bold lg:text-3xl">
                                {data.name}
                            </h2>
                            <p className="mb-10 mt-10 tracking-wide text-gray-600 ">
                                {data.description}
                            </p>
                            <div className="mb-6 flex items-center gap-3 md:mb-10">
                                <Button className="rounded-full gap-x-2 ">
                                    <span className="text-sm">4.2</span>
                                    <Star className="h-5 w-5"/>
                                </Button>

                                <span className="text-sm text-gray-500 transition duration-100">
                                    56 Rating
                                </span>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-end gap-2">       
                                    <span className=" mb-0.5  font-bold text-gray-400 line-through ">{data.price +30 } €</span>
                                    <span className="text-xl font-bold text-gray-800 md:text-2xl">{data.price} €</span>
                                </div>
                                <div>
                                   <span className="text-sm text-gray-500">incl vat plus shipping</span> 
                                </div>
                                <div className="mb-6 flex items-center gap-2 text-gray-500">
                                    <Truck className="w-6 h-6" />
                                    <span className="text-sm ">
                                        2-4 days shipping
                                    </span>
                                </div>
                                <div className="flex gap-2.5">
                                    <AddToCart 
                                        currency="EUR" 
                                        description={data.description} 
                                        image={data.images[0]} 
                                        name={data.name} 
                                        price={data.price} 
                                        key={data._id} 
                                        />
                                    <Button  variant={"outline"}>Checkout now</Button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}