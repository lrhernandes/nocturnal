import styled from 'styled-components'

export const LargeNoteCard = styled.div`
    background: #FAF2EC;
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    width: 100%;
    min-height: 400px;
    box-sizing: border-box;
    margin-top: 40px;

    div{
        background: #FAF2EC;
        box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        box-sizing: border-box;
        width: 100%;
        min-height: 400px;
        height: 100%;
        margin-left: 4px;
        margin-top: -4px;
        padding: 15px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    span{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #333438;

        strong{
            margin-bottom: 10px;
            font-size: 20px;
        }
    }
`