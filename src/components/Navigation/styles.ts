import styled from 'styled-components'

export const Navigation = styled.div`
    margin-top: 20px;

    a{
        font-family: 'Abhaya Libre';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        color: #000000;
        text-decoration: none;
        cursor: pointer;

        img{
            margin-right: 20px;
        }
    }
`