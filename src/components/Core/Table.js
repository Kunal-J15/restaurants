import React from "react";
import "./Table.css";
import Li from "./Li";

 const Table = (props)=>{
    console.log(props.orders);
    const lis = props.orders.map((e)=><Li key={e.id} id={e.id} price = {e.price}  dish = {e.dish}  num= {props.num} remove={props.remove}></Li>)
    return <div>
        <h2>Table {props.num}</h2>
        <div className="table-list">
        <ul>
            {lis}
        </ul>
        </div>
    </div>
}
export default Table;