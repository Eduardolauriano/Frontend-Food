import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 3.5rem 10rem ;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_600};

    grid-area: header;

    > div {
        display: flex;
        gap: 1rem;
    }

    > .div-input {
        width: 100%;
    }

    
    .button-wrapper{
        width: 55%;

        margin-left: 30rem;
    }

    .hidden{
        display: none;
    }

    
    h1 {
        white-space: nowrap;
        font-weight: 700;
        font-size: 2.4rem;
    }

    grid-area: header;

    @media (max-width: 1040px) {
        .button-wrapper{
            width: 100%;

            margin: 0;
        }
    }

    @media (max-width: 900px) {
        
        gap: 4rem;
        
    }
`

export const LogOut = styled.button`
    width: 20px;

    background: none;
    border: none;

`