import { styled } from "@/src/styles";

export const HeaderContainer = styled('header', {
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

