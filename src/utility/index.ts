
export  const JudgeWhoWin = (arr:(number|string)[][]) => {
    //横向
    for (let i = 0; i < arr.length; i++) {
        let chess1 = arr[i][0]
        let chess2 = arr[i][1]
        let chess3 = arr[i][2]
        if (chess1 === chess2 && chess1 === chess3 && chess1 !== 0) {
            return true
        }
    }
    //纵向
    for (let i = 0; i < arr[0].length; i++) {
        let chess1 = arr[0][i]
        let chess2 = arr[1][i]
        let chess3 = arr[2][i]
        if (chess1 === chess2 && chess1 === chess3 && chess1 !== 0) {
            return true
        }
    }
    //斜线
    let topLeft = arr[0][0]
    let topRight = arr[0][2]
    let bottomLeft = arr[2][0]
    let bottomRight = arr[2][2]
    let middle = arr[1][1]
    if (topLeft === middle && bottomRight === middle && middle !== 0) {
        return true
    } 
     if (topRight === middle && middle === bottomLeft && middle !== 0) {
        return true
    }
    return false
}