import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header} from '../styles/pages/app';
import Image from 'next/image';
import { CartProvider } from 'use-shopping-cart';

import { useState } from 'react'

import { Handbag, X } from '@phosphor-icons/react'
import Link from 'next/link';
import { AsideCart } from '../components/Aside';



globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  const [cartIsOpen, setCartIsOpen] = useState(false)

  function handleToggleCart(){
    const newState = !cartIsOpen

    setCartIsOpen(newState)
  }

  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC_KEY!}
      successUrl="stripe.com"
      cancelUrl="twitter.com/dayhaysoos"
      currency="BRL"
      allowedCountries={['US', 'BR']}
      billingAddressCollection={true}
      shouldPersist
    >
      <Container>
        <Header>
          <Link href='/'>
            <Image src={logoImg} alt='' />
          </Link>
          <button type='button' onClick={handleToggleCart}>
            <Handbag size={24} weight='bold'/>
            <span>1</span>
          </button>
        </Header>
        
        {cartIsOpen &&
          <AsideCart handleToggleCart={handleToggleCart}/>
        }
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
