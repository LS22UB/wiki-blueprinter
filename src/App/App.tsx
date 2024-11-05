// src/App.js
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


import PlannerForm from '../components/PlannerForm';

const App = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ padding: '20px' }}>
                <h1>Wiki Planner</h1>
                <PlannerForm />
            </div>
        </DndProvider>
    );
};

export default App;
