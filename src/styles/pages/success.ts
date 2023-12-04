import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1:{
        fontSize: '$2xl',
        color: '$gray100',
    },

    p:{
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a:{
        display: 'block',
        marginTop: '5rem',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '$lg',
        color: '$green300',

        '&:hover':{
            color: '$green500'

        }
    },


})

export const ImagesContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 140,
    height: 140,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 999,
    padding: '0.25rem',

    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',

    marginTop: '4rem',

    marginLeft: '-3.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img:{
        objectFit: 'cover'
    }
})