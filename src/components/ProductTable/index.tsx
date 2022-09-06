import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { IProduct } from '../../types/index'
import Product from '../Product'
interface IProps {
    PRODUCTS: IProduct
}
export default function index(props: IProps) {
    return (
        <View style={style.wrapper}>
            <View style={style.title}>
                <View><Text style={style.name}>名称</Text></View>
                <View><Text style={style.name}>价格</Text></View>
            </View>
            {
                props.PRODUCTS.map(item => (<Product PRODUCTS={item} />))
            }
        </View>
    )
}
const style = StyleSheet.create({
    wrapper: {
        paddingLeft: 10,
        paddingRight: 30,
    },
    title: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        fontSize: 20,
        fontWeight: '600'
    }
})
