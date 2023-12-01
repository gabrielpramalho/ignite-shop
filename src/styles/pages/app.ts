import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh'
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    button:{
        background: '$gray800',
        lineHeight: 0,
        padding: '0.75rem',

        cursor: 'pointer',
        color: '$gray300',

        borderRadius: 6,
        border: 0,
        
        position: 'relative',
    },

    span:{
        background: '$green500',
        color: '$white',

        border: '3px solid $gray900',
        borderRadius: 999,

        width: '1.5rem',
        height: '1.5rem',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute',

        right: -7,
        top: -7,

        fontSize: '0.875rem',
        lineHeight: 1.6,
        fontWeight: 'bold',
    }
})

export const Aside = styled('aside', {
    background: '$gray800',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 480,
    zIndex: 3,
    padding: '3rem',
    paddingTop: '4.5rem',

    display: 'flex',
})


export const CartContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    position: 'relative',
    flex: 1,

    footer:{
        marginTop: 'auto',
    }
})

export const ProductsCartContainer = styled('div', {
    paddingTop: '2rem',

    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',


})

export const ProductCart = styled('div', {

    display: 'flex',

    gap: '1.25rem',

    'div:last-child':{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    }
})
export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 102,
    height: 93,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0 0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img:{
        objectFit: 'cover'
    }

})
export const PriceContainer = styled('div', {})

export const ButtonX = styled('button', {
    position: 'absolute',
    top: 24,
    right: 24,

    background: 'none',
    border: 'none',

    cursor: 'pointer',

    color: '$gray500',

    '&:hover' :{
        color: '$gray300',
    }

})