import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead>
        <tr>
          <th className={css.text}>Type</th>
          <th className={css.text}>Amount</th>
          <th className={css.text}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return <TransactionHistoryItem key={item.id} item={item} />;
        })}
      </tbody>
    </table>
  );
}
