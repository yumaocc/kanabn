import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useCallback, memo } from 'react'
import ShoppingList from '../ShoppingList'
import { IGoods } from '../../types/index'
 function index() {
    const [goods, setGoods] = useState<IGoods[]>([
        { name: 'Sausages', piece: 609.00, number: 0, id: 1 },
        { name: 'Bacon', piece: 609.00, number: 0, id: 2 },
        { name: 'Hat', piece: 609.00, number: 0, id: 3 },
        { name: 'Keyboard', piece: 609.00, number: 0, id: 4 },
        { name: 'Soap', piece: 609.00, number: 0, id: 5 },
    ])
    const [sumPrice, setPrice] = useState(0)
    //商品数量变化的函数
    const priceChange = useCallback((id: number, change: string) => {
        goods.forEach(item => {
            if (item.id === id && change === '+') {
                let number = item.number++
                if (number >= 99) item.number = 99
            } else if (item.id === id && change === '-') {
                let number = item.number--
                if (number <= 0) item.number = 0
            }
        })
        setGoods(goods => goods = goods)
        let newSum: number = goods.reduce((pre, cur) => pre + cur.number * cur.piece, 0)
        setPrice(price => price = newSum)
    },[sumPrice])

    return (
        <View style={style.wrapper}>
            <View style={style.title}>
                <Text style={style.title_text}>名称</Text>
                <Text style={style.title_text}>价格</Text>
                <Text style={style.title_text}>数量</Text>
            </View>
            <ShoppingList
                goods={goods}
                priceChange={priceChange}
            />
            <View style={style.footer}>
                <Text style={style.title_text}>总价：{sumPrice}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    wrapper: {
        position: 'relative',
        top: 100,
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        width: '90%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title_text: {
        lineHeight: 30,
        fontSize: 18,
        fontWeight: '600',
    },
    footer: {
        width: '90%',
        textAlign: 'left',
        position: 'relative',
        top: 80,
    }
})

export default memo(index)