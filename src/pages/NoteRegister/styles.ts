import styled from 'styled-components'
import { InputWrapper } from '../../components/InputText/styles'

export const NoteRegister = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${InputWrapper}{
        margin-top: 5vh;
        margin-bottom: 20px;
    }
    button{
        margin-top: 15px;
    }
`