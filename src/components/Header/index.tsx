import Link from "next/link";
import { HeaderContainer } from "./styles";
import Image from "next/image";
import { useShoppingCart } from 'use-shopping-cart';

import logoImg from '../../assets/logo.svg'
import { Handbag } from "@phosphor-icons/react";


interface HeaderProps {
    handleToggleCart: () => void;
}

export function Header({handleToggleCart}: HeaderProps){

    const { cartCount } = useShoppingCart()

    const hasItem = cartCount! > 0

    return(
        <HeaderContainer>
            <Link href='/'>
                <Image src={logoImg} alt='' />
            </Link>
            <button type='button' onClick={handleToggleCart}>
                <Handbag size={24} weight='bold'/>
                { hasItem && <span>{cartCount}</span> }
            </button>
        </HeaderContainer>
    )
}