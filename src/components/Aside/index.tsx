import Image from "next/image";
import { Aside, ButtonX, CartContainer, ImageContainer, PriceContainer, ProductCart, ProductsCartContainer } from "./style";
import { X } from "@phosphor-icons/react";

import { useState } from 'react'

import { useShoppingCart } from 'use-shopping-cart'
import axios from "axios";

interface AsideCartProps{
    handleToggleCart: () => void;
}

export function AsideCart({handleToggleCart}:AsideCartProps){

  const [isCreatingCheckoutSession ,setIsCreatingCheckoutSession] = useState(false)
  
  const { cartDetails, removeItem, cartCount, formattedTotalPrice } = useShoppingCart()

  const cartEntries = Object.values(cartDetails ?? {})

  const pricesIds = cartEntries.map(product => {
    return {price: product.defaultPriceId, quantity: product.quantity}
  })

  async function handleBuyProduct() {
    try{
        setIsCreatingCheckoutSession(true);

        const response = await axios.post('/api/checkout',{
          pricesIds
        })

        const { checkoutUrl } = response.data;

        window.location.href = checkoutUrl
    } catch(err){
        setIsCreatingCheckoutSession(false)

        alert('Falha ao redirecionar ao checkout!')
    } 
}
  return(
      <Aside>
        <ButtonX onClick={handleToggleCart}>
          <X size={24} weight='bold' />
        </ButtonX>
        <CartContainer>
          <h4>Sacola de compras</h4>

          <ProductsCartContainer>
            {
              cartEntries.map(product => {
                return(
                  <ProductCart key={product.id}>
                    <ImageContainer>
                      <Image src={product.imageUrl} alt='' width={100} height={100}/>
                    </ImageContainer>

                    <div>
                      <span>{product.name}</span>

                      <strong>{product.formattedPrice}</strong>

                      <button onClick={() => removeItem(product.id)}>
                        Remover
                      </button>
                    </div>
                  </ProductCart>
                )
              })
            }
          </ProductsCartContainer>

          <footer>
            <PriceContainer>
              <div>
                <span>Quantidade</span>
                <span>{cartCount} itens</span>
              </div>
              <div>
                <strong>Valor total</strong>
                <strong>{formattedTotalPrice}</strong>
              </div>
            </PriceContainer>

            <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>
              Finalizar Compra
            </button>
          </footer>

        </CartContainer>
    </Aside>
  )
}