import React from "react";
import Table from "./Table";
const Arrangment = (props)=>{
    // console.log(props.tables, props.orders);
    const tables = props.tables.map((e)=><Table orders= {props.orders[e-1]} key={e} num={e} remove={props.remove}></Table>)
     return <>
        <h1>Orders</h1>
        {tables}
     </>

}

export default Arrangment;