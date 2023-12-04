import { styled } from "@/src/styles";

export const ProductContainer = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: ' pointer',
    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },


    footer:{
        position: 'absolute',
        bottom: ' 0.25rem',
        left: ' 0.25rem',
        right: ' 0.25rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        '> div':{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',

            strong:{
                fontSize: '$md',
                color: '$gray100',
                lineHeight: 1.6,
            },
    
            span:{
                fontSize: '$xl',
                fontWeight: 'bold',
                color: '$green300',
                lineHeight: 1.4,
            },
        },

        button:{
            lineHeight: 0,
            backgroundColor: '$green500',
            color: '$white',
            padding: '0.75rem',
            borderRadius: 6,
            border: 0,

            cursor: 'pointer',

            '&:hover':{
                backgroundColor: '$green300',
            },
        },

    },

    '&:hover': {
        footer:{
            transform: 'translateY(0%)',
            opacity: 1,
        }
    },
});