import styled from "styled-components";

export const Container = styled.div`
    height: calc(100vh - 1rem);
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 1rem;
    .home_header {
        height: 20%;
        display: flex;
        align-items: center;
    }
    .kanban-board {
        height: 80%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .kanban-column {
            width: 25%;
            border-radius: 10px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            padding: 1rem;
        }
        .column-todo { 
            background-color: #C9AF97;
            position: relative;
            display: flex;
            justify-content: center;
            .addTodo {
                /* position: absolute;
                top: 1rem;
                left: 60%; */
                width: 130px;
                height: 30px;
            }
        }
        .column-ongoing { 
            background-color: #FFE799;
        }
        .column-done { 
            background-color: #C0E8BA;
        }
    }
`

