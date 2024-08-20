import React, { useState, useEffect } from "react";

function UseEffectEj() {

    const [dateTime, setDateTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, []) // así solo se ejecuta al montar

    return(
        <div>
            <h1>Reloj en Tiempo Real</h1>
            <h2>{dateTime.toLocaleTimeString()}</h2>
            <h3>{dateTime.toLocaleDateString()}</h3>
        </div>
    )

}

export default UseEffectEj