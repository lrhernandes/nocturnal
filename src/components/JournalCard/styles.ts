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
    width: 100%;
    height: 400px;
    cursor: pointer;

    @media ${device.mobileM} {
        max-width: 170px;
        height: 200px;
    }

    @media ${device.laptop} { 
        max-width: 220px;
        height: 250px;
    }

    div{
        background: #5091D6;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 2px 0px 0px 2px;
        width: 20px;
        height: 100%;
        @media ${device.mobileM} { 
            width: 10px;
        }
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
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0px 15px;
    }
`