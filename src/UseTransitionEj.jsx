import React, { useState, useTransition } from "react"

function UseTransitionEj() {
    const [filterText, setFilterText] = useState('');
    const [items] = useState([
        'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'
    ]);
    const [filteredItems, setFilteredItems] = useState(items);
    const [isPending, startTransition] = useTransition();

    const handleChange = (event) => {
        const value = event.target.value;
        setFilterText(value);

        startTransition(() => {
            const newFilteredItems = items.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredItems(newFilteredItems);
        });
    };

    return (
        <div>
            <h1>Lista de Frutas</h1>
            <input
                type="text"
                value={filterText}
                onChange={handleChange}
                placeholder="Filtrar frutas"
            />
            {isPending && <p>Filtrando...</p>}
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default UseTransitionEj