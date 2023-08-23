import React from "react"

const Productitem = ({producto}) =>{

    return(

        <div className=" text-white  bg-red-800 mb-8 rounded-md">
            <h1 className=" text-xl uppercase">Nombre Del Producto</h1>
            <h3 className="">{producto.nombre}</h3>
            <h1 className=" text-xl uppercase">Precio</h1>
            <a href="">{producto.precio}</a>
            <div className="flex justify-center items-center mb-6">
                <img src={producto.url} alt="camisa" />
            </div>
        </div>
    )
}

export default Productitem