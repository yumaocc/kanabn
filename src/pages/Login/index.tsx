import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


interface IUser {
    name: any,
    password: string
}
type TInputChange = React.ChangeEvent<HTMLInputElement>
type TKeydown = React.KeyboardEvent<HTMLInputElement>
const defaultUser: IUser = {
    name: 'yumao',
    password: '123'
}
const checkLogin = (user: IUser): Promise<Boolean> => {
    if (user.name === defaultUser.name && user.password === defaultUser.password) {
        return Promise.resolve(true)
    }
    return Promise.resolve(false)
}


export default function Index() {
    const [user, setUser] = useState<IUser>({
        name: '',
        password: ''
    })
    const navigate = useNavigate()
    const changeName = (e: TInputChange) => {
        let value = e.target.value
        setUser({ ...user, name: value })
    }
    const changePassword = (e: TInputChange) => {
        let value = e.target.value
        setUser({ ...user, password: value })
    }
    const login = async () => {
        let res = await checkLogin(user)
        if (!res) {
            alert('账号或密码错误，请重新登陆')
        } else {
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/')
        }
    }
    const keydownLogin = (e: TKeydown) => {
        if (e.key === 'Enter') {
            login()
        }
    }
    return (
        <>
            账号：<input type="text" value={user.name} onChange={changeName} />
            密码：<input type="password" value={user.password} onChange={changePassword} onKeyDown={keydownLogin} />
            <hr />
            <button onClick={login}>登录</button>
        </>
    )
}
