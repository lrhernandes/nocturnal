import styled from 'styled-components'

export interface Props {
    size?: string
}

export const Logo = styled.div<Props>`
    img{
        width: ${(props: Props) => props.size};
    }
`