import AddtoCart from "../../../assets/icons/addtocart.png"
import { Fragment, useState } from "react"
import Modal from "../../UI/Modal"


const ListItem = ({data}) => {
   const [counter,setCounter]=useState(0)
   const [showModal,setshowModal]=useState(false)
   
   const increseCounter=event=>
    {  
        // event.stopPropogation()
    setCounter(counter+1);
   }

   const decreaseCounter= event =>
  {  
    // event.stopPropogation()
    {
        if(counter===0)
        {
            return;
        }
        setCounter(counter-1);
    }
   }

 const handleModal =()=>{
  setshowModal(previousState =>!previousState)
   }

    return(  
    <Fragment>
        <div className={"item-card"} onClick={handleModal}>
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
   {
    showModal && 
   <Modal onClose={handleModal}>
    <div className="image-card__modal">

      <div className="img-wrap">
        <img className="img-fluid" src={`/assets/${data.thumbnail}`} alt="an image"/>
      </div>
       
      <div className="meta">
          <h3>{data.name}</h3>
          <div className="pricing">
            <span>₹{data.discountedprice}</span>
            <small>
                <strike>{data.actualprice}</strike>
            </small>
          </div>
      </div>

      {
        counter <1
        ?
        <button className="cart-add cart-add__modal" onClick={increseCounter}>
            <span>Add to card</span>
            <img src={AddtoCart} />
        </button>

         :
         <div className="cart-addon cart-addon__modal">
            <button onClick={decreaseCounter}><span>-</span></button>
            <span>{counter}</span>
             <button onClick={increseCounter}><span>+</span></button>
         </div>   

      }

    </div>
   </Modal> }
    </Fragment>
    )   
}

export default ListItem;