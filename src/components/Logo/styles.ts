import styled from 'styled-components'
import { device } from '../../styles'

export interface Props {
    size?: string
}

export const Logo = styled.div<Props>`
    img{
        width: ${(props: Props) => props.size};

        @media ${device.mobileM} { 
            max-width: 300px;
        }
    }
`