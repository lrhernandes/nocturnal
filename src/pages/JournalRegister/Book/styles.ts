import styled from 'styled-components'

export const JounalRegisterBook = styled.div`
    background: #F8E5D6;
    box-shadow: inset -2px 0px 3px rgba(0, 0, 0, 0.15);
    border-radius: 2px 16px 16px 2px;
    height: 330px;
    width: 240px;
    display: flex;
    flex-direction: row;
    align-items: center;

    div{
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
        border-radius: 2px 0px 0px 2px;
        width: 20px;
        height: 100%;
    }

    span{
        font-family: 'Abhaya Libre';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
        text-align: center;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0px 20px;
    }
`