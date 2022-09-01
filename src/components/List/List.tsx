import React from 'react'
import { IItem } from '../../types'
import { Li } from './style'
type TProps = {
    data: IItem[]
}
export default function List(props: TProps) {
    return (
        <>
            {
                props.data.map(item => {
                    return (
                        <Li key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.status}</p>
                        </Li>
                    )
                })
            }
        </>
    )
}
