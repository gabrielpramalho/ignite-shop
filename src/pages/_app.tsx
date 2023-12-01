import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Aside, ButtonX, CartContainer, Container, Header, ImageContainer, PriceContainer, ProductCart, ProductsCartContainer } from '../styles/pages/app';
import Image from 'next/image';
import { CartProvider } from 'use-shopping-cart';

import { useState } from 'react'

import { Handbag, X } from '@phosphor-icons/react'
import Link from 'next/link';

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
          <Link href='  /'>
            <Image src={logoImg} alt='' />
          </Link>
          <button type='button' onClick={handleToggleCart}>
            <Handbag size={24} weight='bold'/>
            <span>1</span>
          </button>
        </Header>
        
        {cartIsOpen &&
          <Aside>
            <ButtonX onClick={handleToggleCart}>
              <X size={24} weight='bold' />
            </ButtonX>
              <CartContainer>
                <h4>Sacola de compras</h4>

                <ProductsCartContainer>
                  <ProductCart>
                    <ImageContainer>
                      <Image />
                    </ImageContainer>

                    <div>
                      <span>Camiseta X</span>

                      <strong>R$ 79,90</strong>

                      <button>Remover</button>
                    </div>
                  </ProductCart>
                  
                </ProductsCartContainer>

                <footer>
                  <PriceContainer>
                    <div>
                      <span>Quantidade</span>
                      <span>3 itens</span>
                    </div>
                    <div>
                      <strong>Valor total</strong>
                      <strong>RS 270,00</strong>
                    </div>
                  </PriceContainer>

                  <button>
                    Finalizar Compra
                  </button>
                </footer>

              </CartContainer>
          </Aside>
        }
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
