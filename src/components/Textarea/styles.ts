import styled from 'styled-components'

export interface Props {
    inputValue: string,
    error: string
}

export const TextareaContainer = styled.div`
    width: 100%;
`;


export const Textarea = styled.textarea`
    background: #FFFFFF;
    border: ${(p: Props) => p.error ? '1px solid tomato' : '1px solid rgba(157, 164, 166, 0.07)'};    
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
    padding-top: 20px;
    resize: none;
    height: 50vh;

    &:focus{
        box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.01);
        filter: drop-shadow(0px 0px 4px #B8E5E3) drop-shadow(0px 0px 2px #B8E5E3);
    }
`;

export const TextareaLabel = styled.label<Props>`
    display: flex;
    flex-direction: column;
    position: absolute;
    transform: translate(0, 12px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;
    margin-left: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: ${(p: Props) => p.inputValue !== '' ? 400 : 600};
    line-height: ${(p: Props) => p.inputValue !== '' ? '11px' : '15px'};
    color: ${(p: Props) => p.inputValue !== '' ? '#736D6B' : '#804627'};
    transform: ${(p: Props) => p.inputValue !== '' ? 'translate(0, 10px)' : 0};
    font-size: ${(p: Props) => p.inputValue !== '' ? '9px' : '12px'};
`;

export const TextareaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0px;
    max-width: 500px;

    &:focus-within ${TextareaLabel} {
        transform: translate(0, 10px);
        font-weight: 400;
        font-size: 9px;
        line-height: 11px;
        color: #736D6B;
    }
`;