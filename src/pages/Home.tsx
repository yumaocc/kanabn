import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ProductTable from '../components/ProductTable'
import { IProduct } from '../types/index'
import Search from '../components/Search'

export default function Home() {
    const [PRODUCTS ,setPRODUCTS] = useState<IProduct>([
        {
            category: '水果',
            kinds: [
                { id: 1, price: '￥1', name: 'Apple',selected:false },
                { id: 2, price: '￥2.4', name: 'Orange' ,selected:false},
                { id: 3, price: '￥5.6', name: 'Banana',selected:false  },
                { id: 4, price: '￥9', name: 'Melon',selected:false  },
            ]
        },
        {
            category: '蔬菜',
            kinds: [
                { id: 5, price: '￥1', name: 'Cabbage' ,selected:false },
                { id: 6, price: '￥1', name: 'Turnip' ,selected:false },
                { id: 7, price: '￥1', name: 'Tomato' ,selected:false },
                { id: 8, price: '￥1', name: 'Celery' ,selected:false  },
            ]
        }
    ])

    return (
        < >
            <View style={style.search}>
                <Search setPRODUCTS={setPRODUCTS} PRODUCTS={PRODUCTS}/>
            </View>
            <View style={style.productTable}>
                <ProductTable PRODUCTS={PRODUCTS} />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    productTable: {
        position: 'relative',
        top: 150
    },
    search : {
        position: 'relative',
        top: 100
    }
})