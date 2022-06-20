import styled from 'styled-components'
import { device } from '../../styles'

export const NoteCard = styled.div`
    background: #FAF2EC;
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    width: 100%;
    height: 400px;
    cursor: pointer;
    box-sizing: border-box;

    @media ${device.mobileS} {
        max-width: 170px;
        height: 180px;
    }
    
    @media ${device.laptop} { 
        max-width: 220px;
        height: 250px;
    }

    div{
        background: #FAF2EC;
        box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        margin-left: 4px;
        margin-top: -4px;
        padding: 15px;
        overflow: hidden;
    }

    span{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #333438;
    }
`