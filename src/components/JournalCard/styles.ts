import styled from 'styled-components'
import { device } from '../../styles'

export interface Props {
    theme: {
        background: string,
        color: string,
    }
}

export const JournalCard = styled.div<Props>`
    background-color: ${(props: Props) => props.theme.background};
    border-radius: 2px 16px 16px 2px;
    box-shadow: inset -2px -2px 2px rgba(196, 196, 196, 1);
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    height: 400px;

    @media ${device.mobileM} { 
        flex: 0.5 0.5 135px;
        max-width: 170px;
        height: 200px;
    }

    div{
        background: #5091D6;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 2px 0px 0px 2px;
        width: 10px;
        height: 100%;
    }
    span{
        width: 100%;
        text-align: center;
        font-family: 'Abhaya Libre';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: ${(props: Props) => props.theme.color};
    }
`