import ListItem from "./ListItems/Listitem"
import { useState } from "react";

const Products = () => {

  const[items,setItems] = useState([
    {id:0,
      discountedprice: 340,
      actualprice: 450,
      name: "title of the Item 1",
      thumbnail: "placeholder.jpg",
    },

    {   id:1,
      discountedprice: 100,
      actualprice: 250,
      name: "title of the Item 2",
      thumbnail: "placeholder.jpg",
    },

    {   id:2,
      discountedprice: 120,
      actualprice: 350,
      name: "title of the Item 3",
      thumbnail: "placeholder.jpg",
    },

    {   id:3,
      discountedprice: 350,
      actualprice: 500,
      name: "title of the Item 4",
      thumbnail: "placeholder.jpg",
    },

    {   id:4,
      discountedprice: 50,
      actualprice: 120,
      name: "title of the Item 5",
      thumbnail: "placeholder.jpg",
    },

    
  ])

  return (
    <div className="product-list">
        <div className="prod">
          {
            items.map(item =>{
              return(<ListItem key={item.id} data={item}></ListItem>)
            })
          }


        </div>
    </div>
  );
};

export default Products;
