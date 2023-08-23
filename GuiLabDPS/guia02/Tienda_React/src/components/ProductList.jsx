import Productitem from "./ProductItem"
import Camisa1 from "../img/1.jpg";
import Camisa2 from "../img/2.jpg";
import Camisa3 from "../img/3.jpg";
import Camisa4 from "../img/4.jpg";
import Camisa5 from "../img/5.jpg";
import Camisa6 from "../img/6.jpg";
import Camisa7 from "../img/7.jpg";
import Camisa8 from "../img/8.jpg";
import Camisa9 from "../img/9.jpg";
import Camisa10 from "../img/10.jpg";

const productos =[
  {id: 1,
   nombre: "camisa Vue",
   precio: "$5,99",
   url:Camisa1

  },

  {id: 2,
    nombre: "camisa Angular",
    precio: "$5,99",
    url: Camisa2
    
   },

   {id: 3,
    nombre: "camisa React",
    precio: "$5,99",
    url:  Camisa3
    
   },

   {id: 4,
    nombre: "camisa Redux",
    precio: "$5,99",
    url:  Camisa4
    
   },

   {id: 5,
    nombre: "camisa Node",
    precio: "$5,99",
    url:  Camisa5
    
   },

   {id: 6,
    nombre: "camisa Sass",
    precio: "$5,99",
    url:  Camisa6
    
   },

   {id: 7,
    nombre: "camisa HTML",
    precio: "$5,99",
    url:  Camisa7
    
   },

   {id: 8,
    nombre: "camisa Github",
    precio: "$5,99",
    url:  Camisa8
    
   },

   {id: 9,
    nombre: "camisa Bulma",
    precio: "$5,99",
    url:  Camisa9
    
   },

   {id: 10,
    nombre: "camisa TypeScript",
    precio: "$5,99",
    url:  Camisa10
    
   }
]

const ProductList = () =>{

  return(

    <>
    
      <div className=" grid grid-cols-2 gap-2 pt-8">
        {productos.map(producto =>(
          <Productitem key={producto.id} producto={producto}></Productitem>
        ))}
      </div>
    </>
  )
}

export default ProductList
