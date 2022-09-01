import React, { useState } from 'react'
import Title from '../../components/Title/index'
import List from '../../components/List'
import { Container } from './style'
import { IItem } from '../../types/index'
export default function Index() {
    const [show, setShow] = useState<boolean>(false)
    const [todo, setTodo] = useState<IItem[]>([
        {
            title: '开发任务-1',
            status: '22-05-22 18:15',
            id: 1
        }
    ])
    const [ongoing, setOngoing] = useState<IItem[]>([
        {
            title: '开发任务-2',
            status: '22-05-22 18:15',
            id: 2
        }
    ])
    const [done, setDone] = useState<IItem[]>([{
        title: '开发任务-3',
        status: '22-05-22 18:15',
        id: 3
    }])
    const changeShow = () => {
        setShow(!show)
    }
    const addTodo = (value: string) => {
        setTodo([...todo, {
            title: value,
            status: '22-05-22 18:15',
            id: Date.now()
        }])
    }
    return (
        <Container>
            <header className='home_header'>
                <Title />
            </header>
            <main className="kanban-board">
                <section className="kanban-column column-todo">
                    <List
                        title="待处理"
                        data={todo}
                        button={true}
                        setShow={setShow}
                        addTodo={addTodo}
                        show={show}
                        changeShow={changeShow}
                    />
                </section>
                <section className="kanban-column column-ongoing">
                    <List
                        title="进行中"
                        data={ongoing}
                    />
                </section>
                <section className="kanban-column column-done">
                    <List
                        title="已完成"
                        data={done}
                    />
                </section>
            </main>
        </Container>
    )
}
