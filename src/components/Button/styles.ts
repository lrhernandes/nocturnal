import styled from 'styled-components'
import { device } from '../../styles'
export interface Props {
    theme: {
        background: string,
        color: string,
        border: string,
        padding: string,
    },
    loading: boolean
}


export const Button = styled.button<Props>`
    background-color: ${(props: Props) => props.theme.background};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 17px;
    color: ${(props: Props) => props.theme.color};
    border-radius: 40px;
    outline: none;
    border: ${(props: Props) => props.theme.border};
    padding: 10px;
    cursor: ${(props: Props) => props.loading ? 'not-allowed' : 'pointer'};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    @media ${device.mobileS} { 
        font-size: 12px;
        gap: 10px;
        padding: 10px;
    }
    @media ${device.mobileM} { 
        font-size: 14px;
        gap: 10px;
        padding: ${(props: Props) => props.theme.padding};
    }

    &:hover {
        transition: all 0.4s;
        opacity: 0.8;
    }
`

