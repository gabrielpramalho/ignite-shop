import Image from "next/image";
import { Aside, ButtonX, CartContainer, ImageContainer, PriceContainer, ProductCart, ProductsCartContainer } from "./style";
import { X } from "@phosphor-icons/react";

import { useShoppingCart } from 'use-shopping-cart'

interface AsideCartProps{
    handleToggleCart: () => void;
}

export function AsideCart({handleToggleCart}:AsideCartProps){

  const { cartDetails, removeItem, cartCount, formattedTotalPrice } = useShoppingCart()

  const cartEntries = Object.values(cartDetails ?? {})


  console.log(cartEntries)

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

            <button>
              Finalizar Compra
            </button>
          </footer>

        </CartContainer>
    </Aside>
  )
}