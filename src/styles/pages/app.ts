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

    h4:{
        fontSize: '$lg',
        color: '$gray100',
        lineHeight: 1.6,
        fontWeight: 'bold',
    },

    footer:{
        marginTop: 'auto',

        button:{
            width: '100%',
            padding: '1.25rem 2rem',
            border: 0,
            borderRadius: 8,
            background: '$green500',

            marginTop: '3.5rem',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            fontSize: '$lg',
            lineHeight: 1.6,
            fontWeight: 'bold',
            color: '$white',

            cursor: 'pointer',

            '&:hover' :{
                background: '$green300',
            }

        },
    }
})

export const ProductsCartContainer = styled('div', {
    paddingTop: '2rem',

    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    overflow: 'auto',


})

export const ProductCart = styled('div', {

    display: 'flex',

    gap: '1.25rem',

    'div:last-child':{
        display: 'flex',
        flexDirection: 'column',

        span:{
            fontSize: '$md',
            color: '$gray300',
            lineHeight: 1.6
        },

        strong:{
            fontSize: '$md',
            color: '$gray100',
            lineHeight: 1.6
        },

        button:{
            background: 'none',
            border: 0,
            color: '$green500',
            fontSize: '1rem',
            lineHeight: 1.6,

            marginTop: '0.5rem',
            display: 'flex',

            cursor: 'pointer',

            '&:hover' :{
                color: '$green300',
            }

        },

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
export const PriceContainer = styled('div', {
    div:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '$gray100'
    },

    span:{
        lineHeight: 1.6
    },

    strong:{
        fontSize: '$lg',
        lineHeight: 1.6,

        '&:last-child':{
            fontSize: '$xl',
        }
    }
})

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