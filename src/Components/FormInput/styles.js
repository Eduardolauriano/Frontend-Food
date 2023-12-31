import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;

    display: flex;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;

    > label {
        color: ${({ theme }) => theme.COLORS.COLOR_GREY};
        
        width: 100%;

        input {
            width: 100%;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKGREEN_300};
            color: ${({ theme }) => theme.COLORS.WHITE};
            
            border: none;
            border-radius: 5px;

            margin-top: 1rem;

            padding: 1.6rem
        }

        input:focus{
            outline: 1px solid white;
        }

        input::placeholder {
            color: ${({ theme }) => theme.COLORS.GREY_TEXT};
        }

    }
`