import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.transactionRow}>
          <th className={s.transactionHead}>Type</th>
          <th className={s.transactionHead}>Amount</th>
          <th className={s.transactionHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id} className={s.transactionRow}>
            <td className={s.transactionCol}>{transaction.type}</td>
            <td className={s.transactionCol}>{transaction.amount}</td>
            <td className={s.transactionCol}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionHistory;
