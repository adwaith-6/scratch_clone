import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Draggable = () => {
  const [, drag] = useDrag(() => ({
    type: 'ITEM',
    item: { id: 1 },
  }));
  return (
    <div ref={drag} style={{ padding: '8px', backgroundColor: 'lightblue' }}>
      Drag me
    </div>
  );
};

const Droppable = () => {
  const [, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: () => console.log('Item dropped'),
  }));
  return (
    <div ref={drop} style={{ height: '200px', backgroundColor: 'lightgreen' }}>
      Drop here
    </div>
  );
};

const TestComponent = () => (
  <DndProvider backend={HTML5Backend}>
    <div>
      <Draggable />
      <Droppable />
    </div>
  </DndProvider>
);

export default TestComponent;