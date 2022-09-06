import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface IProps {
    chess: (number | string)[][]
    handleClickBlock: (index: number[]) => void
}
export default function index({ chess, handleClickBlock }: IProps) {
    return (
        <View style={style.wrapper}>
            {
                chess.map((item, x) => {
                    return item.map((element, y) => {
                        return (
                            <TouchableOpacity
                                style={style.block}
                                onPress={() => handleClickBlock([x, y])}
                            >
                                {
                                    element === 0 ? <></> : (
                                        <Text style={style.chess}>{element}</Text>
                                    )
                                }
                            </TouchableOpacity>
                        )
                    })

                })
            }
        </View>
    )
}
const style = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        borderColor: 'black',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    block: {
        width: '33%',
        height: '33%',
        borderRightColor: 'black',
        borderRightWidth: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    chess: {
        fontSize: 160,
        textAlign: 'center',
        lineHeight: 160
    }
})