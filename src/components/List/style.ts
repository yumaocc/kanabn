import styled from 'styled-components'

export const Container = styled.div`
        width: 100%;
        height: 100%;
        text-align: center;
        box-sizing: border-box;
        .title_btn {
            display: flex;
            justify-content: space-around;
            align-items: center;
            button {
                height: 30px;
                border-radius: 10px;
                background-color: rgba(255, 255, 255, 0.4);
                border: none;
            }
        }
`
export const Ul = styled.ul`
    overflow-y: scroll;
    padding: 0;
    .newTodo {
        width: 100%;
        height: 100px;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        padding-left: 1rem;
        input {
            width: 90%;
        }
        h2 {
            height: 20px;
        }
    }

`
export const Li = styled.li`
    width: calc(100% - .5rem);
    height: 80px;
    border-radius: 10px;
    list-style: none;
    background-color: rgba(255, 255, 255, 0.4);
    h1 {
        text-align: left;
        font-weight: 500;
        font-size: 28px;
        margin-left: 1rem;
        transform: translateY(.5rem);
        font-size: 15px;
    }
    p {
        text-align: right;
        margin-right: 1rem;
        font-size: 14px;
        font-weight: 300;
    }
`