
export interface IKinds {
    id: number,
    price: string,
    name: string,
    selected: boolean
}

export type TProductsItem = {
    category: string
    kinds: IKinds[]
}
export type IProduct = TProductsItem[]

export interface IGoods {
    name: string
    piece: number
    number: number
    id: number
}