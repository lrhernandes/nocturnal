import styled, { createGlobalStyle } from 'styled-components';
import owl from './assets/owl.svg'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '485px',
    tabletS: '650px',
    tabletM: '867px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '1926px',
    desktopL: '2560px'
}
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tabletS: `(min-width: ${size.tabletS})`,
    tabletM: `(min-width: ${size.tabletM})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktopL})`
};


export interface Props {
    weight: number
}

export const Container = styled.div`
    background-color: #F8E5D6;
    background-image: url(${owl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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

export const RowCentered = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Centered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
    gap: 20px;
    height: 100%;
`

export const RowBetween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

export const ErrorMessage = styled.div`
    color: tomato;
    font-size: 11px;
    font-weight: 600;
    margin: 0px;
    position: absolute;
    padding: 0px;
    margin-top: -10px;
`

export const AuthForm = styled.div`
    margin-bottom: 11vh;
    max-width: 500px;
    align-self: center;
    margin-left: auto;
    margin-right: auto;

    input{
        margin-bottom: 10px;
    }
    img{
        margin-bottom: 10vh;
    }
    ${ErrorMessage}{
        margin-top: -18px;
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