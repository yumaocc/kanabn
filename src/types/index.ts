export interface IData {
    title : string
    data:IItem[],
    button?:boolean
}
export interface IItem {
    title:string
    status:string,
    id:number,
}