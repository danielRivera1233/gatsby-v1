import React from "react"

import illustration from "../images/mi-imagen.svg"

import Form from "./contact.form"

const Header = () => {
    return (
    <header class="bg-gray-400">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-700 text-6xl">¡Hola! soy Daniel Rivera</h1>
                    <p className="text-xl font-light">Soy programador backend y me gusta aprender.</p>
                </div>
                <img src={illustration} alt="Hombre programando con audifonos" style={{height:"300px", width:"350px"}}></img>
            </div>
        <div>
            <Form/>
        </div>
        </div>
    </header>
    )
}

export default Header