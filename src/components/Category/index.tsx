import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { IKinds } from '../../types/index'

interface IProps {
    kinds: IKinds[]
}
export default function index(props: IProps) {
    return (
        <View>
            {
                props.kinds.map(item => (
                    <View style={style.item} key={item.id}>
                        <View><Text style={item.selected && style.selected}>{item.name}</Text></View>
                        <View><Text>{item.price}</Text></View>
                    </View>
                ))
            }
        </View>
    )
}

const style = StyleSheet.create({
    item: {
        width: '100%',
        height: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#69c0ff',
        marginBottom: 10,
    },
    selected: {
        color: 'red',
    }
})