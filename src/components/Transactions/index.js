// import Transaction from "../Transaction";
// import PropTypes from 'prop-types'

// const Transactions = (transactions) => (
//   <div>
//     {transactions.map((transaction) => (
//       <Transaction key={transaction.id} transaction={transaction} />
//     ))}
//   </div>

// );

// Transactions.propTypes = {
//     transactions: PropTypes.array
// }

// export default Transactions;
// import PropTypes from 'prop-types';
// import Transaction from '../Transaction';

// const Transactions = ({ transactions = [] }) => transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction}/>)

// Transactions.propTypes = {
//     transactions: PropTypes.array
// }

// Transactions.defaultProps = {
//     transactions: []
// }

// export default Transactions;

import PropTypes from 'prop-types';
import Transaction from '../Transaction'

const Transactions = ({transactions = []}) => (
  transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ))
  
);

Transactions.propTypes = {
  transactions:PropTypes.array
}

Transactions.defaultProps = {
  transactions: []
}

export default Transactions;
