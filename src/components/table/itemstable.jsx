import React from "react";
import styles from "./itemstable.module.scss";

export default function Itemstable({ items, removeItem, increase, decrese }) {
  return (
    <table className={styles.price_table}>
      <thead>
        <tr>
          <th>№п/п</th>
          <th>
            Наименоваине
            <br /> товара
          </th>
          <th>
            Цена
            <br /> за шт.
          </th>
          <th>Количество</th>
          <th>Итого</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id + 1}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>
              <button
                onClick={() => decrese(item.id, item.count)}
                className={styles.btn}
              >
                -
              </button>
              <span className={styles.count}>{item.count}</span>
              <button onClick={() => increase(item.id)} className={styles.btn}>
                +
              </button>
            </td>
            <td>{item.price * item.count}</td>
            <td>
              <button
                onClick={() => removeItem(item.id)}
                className={styles.btn_del}
              >
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
