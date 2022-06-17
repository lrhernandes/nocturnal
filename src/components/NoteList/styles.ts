import styled from 'styled-components'
import { device } from '../../styles'


export const NoteList = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;

    @media ${device.mobileM} { 
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.mobileL} { 
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }

    @media ${device.tabletS} { 
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
    }

    @media ${device.tabletM} { 
        grid-template-columns: repeat(5, 1fr);
        gap: 40px
    }

    @media ${device.laptopL} { 
        grid-template-columns: repeat(6, 1fr);
        gap: 50px
    }

    @media ${device.desktop} { 
        grid-template-columns: repeat(8, 1fr);
        gap: 80px
    }
    
    @media ${device.desktopL} { 
        grid-template-columns: repeat(10, 1fr);
    }
`