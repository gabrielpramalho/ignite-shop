import Image from "next/image";
import { ProductContainer } from "./style";
import { Handbag } from "@phosphor-icons/react";

import { useShoppingCart } from 'use-shopping-cart'


interface ProductProps{
    id: string,
    name: string,
    imageUrl: string,
    price: number;
}

export function Product({id, name, imageUrl, price}: ProductProps){

    const { addItem } = useShoppingCart()

    const priceString = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price! / 100)


    function handleFunction(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()

        const newItem = {
            id,
            name,
            imageUrl,
            price,
            sku: '',
            currency: 'BRL',
        }

        addItem(newItem)
    }

    return(
        <ProductContainer  className="keen-slider__slide" >
            <Image src={imageUrl} width={520} height={480} alt=""/>
            <footer>
            <div>
                <strong>{name}</strong>
                <span>{priceString}</span>
            </div>
            <button type='button' onClick={handleFunction}>
                <Handbag size={24} weight='bold'/>
            </button>
            </footer>
        </ProductContainer>
    )
}