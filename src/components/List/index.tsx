import React, { useRef, useState } from 'react'
import { Container, Ul } from './style'
import { IData } from '../../types'
import List from './List'
import NewTodo from './NewTodo'
interface IProps extends IData {
  addTodo?: (value: string) => void
  changeShow?: (inputRef: any) => void
  show?: boolean,
  setShow?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Index(props: IProps) {
  const { title, data, button, addTodo, changeShow, show, setShow } = props
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<React.MutableRefObject<HTMLButtonElement | undefined>>()

  const keydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      addTodo!(value)
      setShow!(!show)
      setValue('')
    }
  }

  return (
    <Container>
      <div className='title_btn'>
        <h1>{title}</h1>
        {button && <button onClick={changeShow}>&#8853; 添加新卡片</button>}
      </div>
      <hr />
      <Ul>
        {show && (
          <NewTodo
            keydown={keydown}
            value={value}
            setValue={setValue}
          />
        )}
        <List data={data} />
      </Ul>
    </Container>
  )
}
