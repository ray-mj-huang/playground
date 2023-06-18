import { useState } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';
import './3-2-2.css';

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);

  const total = items.length;
  const packed = items
    .filter(item => item.packed)
    .length;

  function handleAddItem(title) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false
      }
    ]);
  }

  function handleChangeItem(nextItem) {
    setItems(items.map(item => {
      if (item.id === nextItem.id) {
        return nextItem;
      } else {
        return item;
      }
    }));
  }

  function handleDeleteItem(itemId) {
    setItems(
      items.filter(item => item.id !== itemId)
    );
  }

  return (
    <div className="quiz-bg" id="css3-2-2">
      <h1 className="quiz-title">3-2-2: Travel List</h1>
      <div>
        <AddItem
          onAddItem={handleAddItem}
        />
        <PackingList
          onChangeItem={handleChangeItem}
          items={items}
          onDeleteItem={handleDeleteItem}
          />
        <hr />
        <b>{packed} out of {total} packed!</b>
      </div>
    </div>
  );
}
