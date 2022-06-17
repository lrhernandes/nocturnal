import styled from 'styled-components'

export interface Props {
    theme: {
        background: string,
        color: string,
        border: string,
        padding: string
    }
}


export const Button = styled.button<Props>`
    background-color: ${(props : Props) => props.theme.background};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: ${(props : Props) => props.theme.color};
    border-radius: 40px;
    outline: none;
    border: ${(props : Props) => props.theme.border};
    padding: ${(props : Props) => props.theme.padding};
    cursor: pointer;

    &:hover {
        transition: all 0.4s;
        opacity: 0.8;
    }
`

