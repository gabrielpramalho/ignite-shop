import { stripe } from "@/src/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Stripe from "stripe";
import { useShoppingCart } from 'use-shopping-cart'


interface ProductProps{
    product:{
        id: string,
        name: string,
        imageUrl: string,
        price: number;
        description: string;
        defaultPriceId: string;
        sku: string,
    }
}

export default function Product({ product }: ProductProps) {

    const { addItem } = useShoppingCart()
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)


    const productPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(product.price / 100)

    async function handleBuyProduct() {
        try{
            setIsCreatingCheckoutSession(true);

            const response = await axios.post('/api/checkout',{
                priceId: product.defaultPriceId,
            })

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl
        } catch(err){
            setIsCreatingCheckoutSession(false)

            alert('Falha ao redirecionar ao checkout!')
        } 
    }

    function handleAddProductCart(){

        const newProduct = {
            ...product,
            currency: 'BRL',
        }

        addItem(newProduct)
    }

    return(
        <>
            <Head>
                <title>{ product.name } | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{productPrice}</span>

                    <p>{product.description}</p>

                    <button onClick={handleAddProductCart} disabled={isCreatingCheckoutSession}>
                        Comprar agora
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
};


export const getStaticPaths: GetStaticPaths = async () =>{
    return{
        paths: [],
        fallback: "blocking",
    }
}


export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {

    const productId = params!.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    return{
        props:{
            product:{
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount,       
                description: product.description,
                defaultPriceId: price.id,
                sku: '',
            }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}