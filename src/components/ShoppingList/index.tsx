import { View, Text, StyleSheet, Button } from 'react-native'
import React, { memo } from 'react'
import { IGoods } from '../../types/index'
interface IProps {
    goods: IGoods[]
    priceChange:(id:number ,change:string) => void
}

 function ShoppingList({ goods ,priceChange}: IProps) {
    return (
        <View style={style.wrapper}>
            {
                goods.map((item) => {
                    return (
                        <View key={item.id} style={style.list_wrapper}>
                            <View style={style.list_name}><Text >{item.name}</Text></View>
                            <View style={style.list_piece}><Text >{item.piece}</Text></View>
                            <View style={style.list_btn}>
                                <Button onPress={() => priceChange(item.id,"+")} title='+'></Button>
                                <Text>{item.number}</Text>
                                <Button onPress={() => priceChange(item.id,"-")} title='-'></Button>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

const style = StyleSheet.create({
    wrapper: {
        width: '90%',
        height: '50%',
        marginTop: 20,
        justifyContent: 'center'
    },
    list_wrapper: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderColor: '#91d5ff'
    },
    list_name: {
        flex: 1

    },
    list_btn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'baseline',
    },
    list_piece: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default memo(ShoppingList)