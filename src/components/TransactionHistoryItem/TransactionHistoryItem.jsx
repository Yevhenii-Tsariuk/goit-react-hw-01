import css from "./TransactionHistoryItem.module.css";

export default function TransactionHistoryItem({
  item: { type, amount, currency },
}) {
  return (
    <tr className={css.box}>
      <td className={css.textType}>{type}</td>
      <td className={css.text}>{amount}</td>
      <td className={css.text}>{currency}</td>
    </tr>
  );
}
