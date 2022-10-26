import React, { useState } from "react";
import axios from "axios";

export const FormNotification = () => {
    const [message, setMessage] = useState({ title: "", message: "" });
    const handleMesssage = (e) => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/message", message)
        setMessage({ title: "", message: "" })
    }

    return (
        <div style={{ border: "solid 1px", padding: 10 }}>
            <h3>Mensaje al servidor!!</h3>
            <form onSubmit={handleSubmit}>
                <label >Titulo: </label>
                <input type="text" name="title" onChange={handleMesssage} value={message.title} />
                <br />
                <label >Mensaje: </label>
                <input type="text" name="message" onChange={handleMesssage} value={message.message} />
                <br />
                <button type="submit">Enviar</button>
                <br />
            </form>
        </div>
    )
}