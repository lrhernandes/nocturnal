import styled, { createGlobalStyle } from 'styled-components';
import owl from './assets/owl.svg'

export interface Props {
    weight: number
}

export const Container = styled.div`
    background-color: #F8E5D6;
    background-image: url(${owl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60vh;
    background-position: -30vw 50%;
    margin: 0px;
    padding: 20px;
    min-height: 100vh;
    height: 100%;
    display: flex;
    box-sizing: border-box;
`

export const ColumnCentered = styled.div`
    align-self: center;
    justify-self: center;
    width: 100%;
`

export const Centered = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const RowBetween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RowEnd = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const LinkComponent = styled.p<Props>`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: ${(p: Props) => p.weight};
    font-size: 12px;
    line-height: 15px;
    color: #6E3421;
    cursor: pointer;

    &:hover{
        color: black;
        transition: all 0.4s;
    }
`

export const Title = styled.h1`
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    color: #834825;
`

export const AuthForm = styled.div`
    margin-top: 10vh;
    margin-bottom: 11vh;

    input{
        margin-bottom: 10px;
    }
`

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Montserrat', sans-serif;
        margin: 0px;
        padding: 0px;
    }
    iframe {
        pointer-events: none;
    }
    a{
        text-decoration-line: underline;
        color: #6E3421;
    }
`