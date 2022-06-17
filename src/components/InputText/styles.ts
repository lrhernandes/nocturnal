import styled from 'styled-components'

export interface Props {
    inputValue: string,
    error?: string
}


const Input = styled.input<Props>`
    background: #FFFFFF;
    border-radius: 4px;
    outline: 0;
    position: relative;    
    padding-left: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #834825;
    height: 40px;
    box-sizing: border-box;
    padding-top: 8px;
    border: ${(p: Props) => p.error ? '1px solid tomato' : '1px solid rgba(157, 164, 166, 0.07)'};

    
`;

const InputLabel = styled.label<Props>`
    display: flex;
    flex-direction: column;
    position: absolute;
    transform: translate(0, 12px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;
    margin-left: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #804627;
    transform: ${(p: Props) => p.inputValue != '' ? 'translate(0, 5px)' : 0};
    /* font-size: ${(p: Props) => p.inputValue ? '9px' : '12px'}; */
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0px;
    max-width: 500px;

    &:focus-within ${InputLabel} {
        transform: translate(0, 5px);
        font-weight: 400;
        font-size: 9px;
        line-height: 11px;
        letter-spacing: 0.5px;
        color: #736D6B;
    }
`;



export { Input, InputWrapper, InputLabel }