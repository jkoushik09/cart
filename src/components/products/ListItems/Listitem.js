import AddtoCart from "../../../assets/icons/addtocart.png"
import { useState } from "react"

const ListItem = ({data}) => {
   const [counter,setCounter]=useState(0)
   
   const increseCounter=()=>
   {  
    setCounter(counter+1);
   }

   const decreaseCounter=()=>
   {
    {
        if(counter===0)
        {
            return;
        }
        setCounter(counter-1);
    }
   }

    return(  
    <div className={"item-card"}>
        <img className="img-fluid" src={`/assets/${data.thumbnail}`} alt="an image"/>
       <div className="item-card__information">
          <div className="pricing">
            <span>₹{data.discountedprice}</span>
            <small>
                <strike>{data.actualprice}</strike>
            </small>
          </div>
        <div className="title">
            <h3>{data.name}</h3>
        </div>

       </div>
      {
        counter <1
        ?
        <button className="cart-add" onClick={increseCounter}>
            <span>Add to card</span>
            <img src={AddtoCart} />
        </button>

         :
         <div className="cart-addon">
            <button onClick={decreaseCounter}><span>-</span></button>
            <span>{counter}</span>
             <button onClick={increseCounter}><span>+</span></button>
         </div>   

      }
    </div>
    ) 
  
}

export default ListItem;