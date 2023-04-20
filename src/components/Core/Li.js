import React from "react";

const Li = (props)=>{

    const handleClick = (e)=>{
        props.remove(props.id,props.num)
    }
    return <li>
        {props.price} - {props.dish} - table {props.num}
        <button onClick={handleClick}>Delete</button>
    </li>
}
export default Li