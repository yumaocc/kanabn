import React from 'react'

interface IProps {
    keydown : (e: React.KeyboardEvent<HTMLDivElement>)=>void
    value:string
    setValue:React.Dispatch<React.SetStateAction<string>>
}

export default function NewTodo(props :IProps) {
    const {keydown ,value ,setValue} = props
    return (
        <>
            <div className='newTodo' onKeyDown={keydown}>
                <h2>添加新卡片</h2>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            </div>
        </>
    )
}
