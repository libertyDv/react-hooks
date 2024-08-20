import React, { useState, useDeferredValue } from 'react';


function UseDeferredValueEj() {

    const [filterText, setFilterText] = useState('');
    const [items] = useState([
        'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'
    ]);

    const deferredFilterText = useDeferredValue(filterText)

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(deferredFilterText.toLowerCase())
    )

    const handleChange = (event) => {
        setFilterText(event.target.value);
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
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );

}

export default UseDeferredValueEj