import React from 'react'
import Title from '../../components/Title/index'





import { Container } from './style'

export default function Index() {
    
    return (
        <Container>
            <header className='home_header'>
                <Title />
            </header>
            <main className="kanban-board">
                <section className="kanban-column column-todo"></section>
                <section className="kanban-column column-ongoing"></section>
                <section className="kanban-column column-done"></section>
            </main>
        </Container>
    )
}
