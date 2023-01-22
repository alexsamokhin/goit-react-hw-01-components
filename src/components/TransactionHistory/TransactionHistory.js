import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory} border="1">
      <thead className={css.head}>
        <tr className={css.row}>
          <th className={css.cell}>Type</th>
          <th className={css.cell}>Amount</th>
          <th className={css.cell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.row} key={id}>
            <td className={css.cell}>{type}</td>
            <td className={css.cell}>{amount}</td>
            <td className={css.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
