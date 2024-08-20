import React, { useState, useCallback } from "react"

function UseCallBackEj() {
    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    const decrement = useCallback(() => {
        setCount(prevCount => prevCount - 1)
    }, [])

    return (
        <div>
          <h1>Contador: {count}</h1>
          <button onClick={increment}>Incrementar</button>
          <button onClick={decrement}>Decrementar</button>
        </div>
      );

}

export default UseCallBackEj