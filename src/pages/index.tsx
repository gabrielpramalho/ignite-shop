import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';

import { stripe } from "../lib/stripe";
import Stripe from "stripe";

import { HomeContainer } from "../styles/pages/home";

import { useShoppingCart } from 'use-shopping-cart'
import { Product } from "../components/Product";

interface HomeProps{
  products:{
    id: string,
    name: string,
    imageUrl: string,
    price: number;
  }[]
}


export default function Home({ products }: HomeProps) {

  const { cartDetails } = useShoppingCart()


  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 3,
      spacing: 48,
    }
  })

  return (

    <>
    <Head>
      <title>Home | Ignite Shop</title>
    </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {
          products.map(product => {
            return(
              <Link key={product.id} href={`product/${product.id}`} prefetch={false}>
                <Product {...product} />
              </Link>
            )
          })
        }

      </HomeContainer>
    </>

  )
}


export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  })


  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price


    return{
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      
    }
  })

  return {
    props:{
      products,
    },
    revalidate: 60 * 60 * 2, // 2 horas
  }
}