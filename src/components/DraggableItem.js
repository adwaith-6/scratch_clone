import React from 'react';
import { useDrag } from 'react-dnd';

function DraggableItem({ id, text, x, y, moveItem }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const offset = monitor.getDifferenceFromInitialOffset();
        if (offset) {
          moveItem(id, x + offset.x, y + offset.y);
        }
      }
    },
  }));

  return (
    <div
      ref={drag}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        opacity: isDragging ? 0.5 : 1,
        padding: '8px',
        border: '1px solid gray',
        backgroundColor: 'lightblue',
        cursor: 'move',
      }}
    >
      {text}
    </div>
  );
}

export default DraggableItem;