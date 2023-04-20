import React,{useState} from "react";
import OrderBar from "./OrderBar";
import Arrangment from "./Arrangments";

const Restorunt = (props)=>{
    const [orders,editOrders]= useState(Array.from({length: props.tableCount}, () => []));
    const addToBill = (data)=>{
        const {id,price,dish,table=parseInt(table)} = data;
        localStorage.setItem(id,JSON.stringify({id,price,dish,table}));
        editOrders((st)=>{
            st[table-1].push({id,price,dish})
            return [...st];
        })
        
    }
    
    const remove = (id,table)=>{
        localStorage.removeItem(id);
        editOrders((st)=>{
            st[parseInt(table)-1] = st[parseInt(table)-1].filter((e)=>e.id!=id)
            return [...st];
        })
    }
    const tables = Array.from({length: props.tableCount}, (_, i) => i + 1)
    return (
        <>
            <OrderBar tableCount = {tables} addToBill={addToBill}></OrderBar>
            <Arrangment tables = {tables} orders = {orders} remove = {remove}></Arrangment>
            
        </>
    )
}

export default Restorunt;