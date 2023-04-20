import React , {useState} from "react";

const OrderBar = (props)=>{
    const [formData,updateFormData] = useState({id:"",price:"",dish:"",table:"1"});
    const options = props.tableCount.map((e)=><option value={e} defaultValue={formData.table===e.toString()} key={e}> Table {e}</option>);
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.addToBill(formData);

    }
    const handleChange = (e)=>{
        updateFormData((st)=>{
            return {...st,[e.target.name]:e.target.value}
        })
        // console.log(formData);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="id">Unique id</label>
        <input type="text" name="id" id="Unique" value={formData.id} onChange={handleChange}></input>
        </div>
        <div>
        <label htmlFor="price">price</label>
        <input type="number" name="price" id="price" value={formData.price} onChange={handleChange}></input>
        </div>
        <div>
        <label htmlFor="dish">Choose Dish</label>
        <input type="text" name="dish" id="dish" value={formData.dish} onChange={handleChange}></input>
        </div>
        <select name="table" id="table" onChange={handleChange}>
            {options}
         </select>
         <button>Add to bill</button>
         </form>
        </>
    )
}

export default OrderBar;