import React from "react"

const Form = () => {
    return (
        <form className="mt-16 text-center">
            Cuentame de esa idea que quieres hacer
            <div className="flex shadow rounded-md bg-white border p-2">
            <textarea
    id="contact-content"
    name="contact-content"
    className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
            <button class="btn ml-4">Enviar</button>
            </div>
        </form>
    )    
}

export default Form