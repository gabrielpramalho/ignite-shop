import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {

    const { query } = useRouter();

    return(
        <ProductContainer>
            <ImageContainer>
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus enim nobis doloremque. A alias quaerat temporibus, ipsum voluptatibus non ullam! Tempore minima vitae rerum nostrum aliquam neque, mollitia nam!</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
};