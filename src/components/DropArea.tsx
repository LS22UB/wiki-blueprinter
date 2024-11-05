// src/components/DropArea.js
import React from 'react';
import { useDrop } from 'react-dnd';

const DropArea = ({ onDrop, items }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'ITEM',
        drop: (item) => onDrop(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div
            ref={drop}
            style={{
                height: '200px',
                width: '300px',
                border: '2px dashed gray',
                backgroundColor: isOver ? 'lightgreen' : 'white',
                padding: '16px',
            }}
        >
            <h4>Drop-Area</h4>
            {items.map((item, index) => (
                <div key={index} style={{ marginBottom: '8px' }}>
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default DropArea;
