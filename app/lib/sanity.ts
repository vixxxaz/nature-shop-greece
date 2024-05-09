import  ImageUrlBuilder  from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const client = createClient({
    projectId: 'f38yyig8',
    dataset: 'production',
    apiVersion:'v2022-03-07',
    useCdn:true,
});

const builder = ImageUrlBuilder(client);


export function urlFor(source: any){
    return builder.image(source);
};