import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import TicTacToeTable from '../components/TicTacToeTable'
import { JudgeWhoWin } from '../utility/index'
export default function TicTacToe() {

  const [player, setPlayer] = useState('x')//玩家
  const [win, setWin] = useState(false) //是否赢得游戏的
  const [draw, setDraw] = useState(1)
  const [chess, setChess] = useState<(number | string)[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])//棋子视图

  const againGame = () => {
    setChess(chess => chess = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
    setDraw((draw) => draw = 1)
    setWin((win) => win = false)
  }

  const isDraw = (draw: number) => {
    if (draw === 9) {
      againGame()
    }
  }
  const changePlayer = () => {
    if (player === 'x') {
      setPlayer((player) => player = 'o')
    } else {
      setPlayer((player) => player = 'x')
    }
  }

  const handleClickBlock = (index: number[]) => {
    let [x, y] = index
    if (chess[x][y] === 0) { //更新棋子坐标，并保证不能下载已有棋子的位置
      chess[x][y] = player
      setChess([...chess])
      setDraw(draw => draw = draw + 1)
      if (JudgeWhoWin(chess)) {
        setWin(win => win = true)
        return
      }
      isDraw(draw)
      changePlayer()
    }
  }

  return (
    <View style={style.wrapper}>
      <View style={style.chessboard}>
        <TicTacToeTable
          chess={chess}
          handleClickBlock={handleClickBlock} />
      </View>
      {
        win && (
          <TouchableOpacity style={style.model} onPress={againGame}>
            <Text style={style.text}>{`${player}${player}赢了`}</Text>
            <Text style={{ color: 'red' }}>点击屏幕重新开始游戏</Text>
          </TouchableOpacity>
        )
      }
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chessboard: {
    width: '90%',
    height: "50%",
  },
  model: {
    width: '100%',
    height: "80%",
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 30,
    fontWeight: '600'
  }
})