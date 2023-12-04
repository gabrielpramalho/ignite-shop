import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container} from '../styles/pages/app';
import { CartProvider } from 'use-shopping-cart';

import { useState } from 'react'

import { AsideCart } from '../components/Aside';
import { Header } from '../components/Header';



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
        <Header handleToggleCart={handleToggleCart} />
        
        {cartIsOpen &&
          <AsideCart handleToggleCart={handleToggleCart}/>
        }
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
