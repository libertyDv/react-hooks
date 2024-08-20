import React, { useState, useMemo } from "react"

function UseMemoEj() {

    const [number, setNumber] = useState(0)

    const calculateSquare = (num) => {
        return num * num
    }

    const squaredNumber = useMemo(() => calculateSquare(number), [number]) // almacena el resultado

    return (
        <div>
          <h1>Calculadora de Cuadrados</h1>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
            placeholder="Ingresa un número"
          />
          <p>El cuadrado de {number} es: {squaredNumber}</p>
        </div>
      );



}

export default UseMemoEj