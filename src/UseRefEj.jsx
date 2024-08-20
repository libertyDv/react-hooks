// la gran diferencia entre UseRef y UseState esq con useRef no dispara un re-render cuando cambia, sino que se actualiza cada render sin provocar un re-render 

import React, { useRef, useEffect } from "react"

function UseRefEj() {

    const inputRef = useRef(null)

    const renderCount = useRef(1)

    useEffect(() => {
        renderCount.current += 1
    })

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <h1>Enfoque y Contador de Renders</h1>
            <input ref={inputRef} type="text" placeholder="Escribe algo aquí..." />
            <button onClick={focusInput}>Colocar Enfoque</button>
            <p>Número de renders: {renderCount.current}</p>
        </div>
    )

}

export default UseRefEj