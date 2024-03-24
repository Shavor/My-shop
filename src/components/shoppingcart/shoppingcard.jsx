import defaultItem from "../../products.json";
import React, { useState } from "react";
import Itemstable from "../table/itemstable";
import styles from "../shoppingcart/shoppingcard.module.scss";

export default function Shoppingcard() {
  const [items, setItems] = useState(defaultItem);

  const result = items.reduce((acc, cur) => acc + cur.count * cur.price, 0);
  const Footer = (
    <div className={styles.result_panel}>
      <span>
        Общая стоимость: <span className={styles.value}>{result}</span>
      </span>
      <button className={styles.card_btn}>Оформить</button>
    </div>
  );

  const EmptyTemplate = (
    <div className={styles.empty_text}>У вас еще нет товаров в корзине</div>
  );

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const increseCount = (id) => {
    setItems(
      items.map((obj) => {
        if (obj.id === id) {
          obj.count++;
        }
        return obj;
      })
    );
  };

  const decreseCount = (id, count) => {
    if (count < 2) {
      handleRemoveItem(id);
    } else {
      setItems(
        items.map((obj) => {
          if (obj.id === id) {
            obj.count--;
          }
          return obj;
        })
      );
    }
  };

  return (
    <>
      <h1>Корзина</h1>
      {items.length ? (
        <Itemstable
          items={items}
          removeItem={handleRemoveItem}
          increase={increseCount}
          decrese={decreseCount}
        />
      ) : (
        EmptyTemplate
      )}

      {!!items.length && Footer}
    </>
  );
}
