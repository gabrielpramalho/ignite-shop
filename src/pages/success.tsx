import Link from "next/link";
import { ImageContainer, ImagesContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";
import { useShoppingCart } from 'use-shopping-cart';
import { useEffect } from 'react'

interface SuccessProps{
    customerName: string;
    products:{
        name: string;
        imageUrl: string;
    }[]
}

export default function Succecs({ customerName, products }: SuccessProps) {

    const { clearCart } = useShoppingCart()

    useEffect( ()=>{
        clearCart()
    }, [])

    return(
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <h1>Compra efetuada!</h1>
                <ImagesContainer>
                    {products.map( product => {return(
                        <ImageContainer key={product.name}>
                            <Image src={product.imageUrl} alt="" width={140} height={140} />
                        </ImageContainer>
                        )})
                    }
                </ImagesContainer>

                <p>
                    Uhuul <strong>{customerName}</strong>, sua compra de 
                    <strong>{' '}{products.length}</strong> camisetas já está a caminho da sua casa.
                </p>

                <Link href='/'>
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ query }) =>{


    if(!query.session_id){
        return{
            redirect:{
                destination: '/',
                permanent: false,
            }
        }
    }

    const sessionId = String(query.session_id);


    const session = await stripe.checkout.sessions.retrieve(sessionId,{
        expand: ['line_items', 'line_items.data.price.product'],
    })

    const customerName = session.customer_details?.name

    const productsContent = session.line_items?.data
    const a = session.line_items?.data[0].price?.product as Stripe.Product

    const productsAsStripe = productsContent?.map(product => {
        return product.price?.product as Stripe.Product
    })

    const products = productsAsStripe?.map( product => {
        return { name :product.name, imageUrl:product.images[0]}
    })

    return{
        props:{
            customerName,
            products: products
        }
    }

}