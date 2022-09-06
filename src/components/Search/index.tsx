import { Text, View, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IProduct } from '../../types/index'
interface IProps {
    setPRODUCTS: React.Dispatch<React.SetStateAction<IProduct>>
    PRODUCTS: IProduct
}

export default function index({ setPRODUCTS, PRODUCTS }: IProps) {
    const [value, setValue] = useState<string>('')
    useEffect(() => {
        let newArr = PRODUCTS.map(item => {
            item.kinds.map(item => {
                if (item.name === value) {
                    item.selected = true
                } else {
                    item.selected = false
                }
                return item
            })
            return item
        })
        setPRODUCTS(newArr)
    }, [value])

    return (
        <View style={style.wrapper}>
            <TextInput
                style={style.input}
                placeholder="请输入你想要搜索的内容"
                value={value}
                onChangeText={(text) => setValue(text)} />
        </View>
    )
}


const style = StyleSheet.create({
    input: {
        width: '80%',
        height: 50,
        borderBottomWidth: 1,
        padding: 0
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})