import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import {TProductsItem} from '../../types'
import Category from '../Category'
interface IProps {
    PRODUCTS : TProductsItem
}
export default function index(props:IProps) {
  return (
    <View style={style.wrapper}>
      <Text style={style.title}>{props.PRODUCTS.category}</Text>
        <Category kinds={props.PRODUCTS.kinds}/>
    </View>
  )
}

const style = StyleSheet.create({
    title : {
        height: 20,
        fontSize:20,
        fontWeight:'600',
        borderBottomColor:'gray',
    },
    wrapper : {
        marginTop:20
    }
})