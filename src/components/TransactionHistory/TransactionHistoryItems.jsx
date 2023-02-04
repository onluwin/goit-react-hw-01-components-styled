import PropTypes from 'prop-types';

// STYLED
import { TableRow, TableData } from './TransactionHistory.styled';

export const TransactionHistoryItems = ({ itemsData }) => {
  return itemsData.map(({ id, type, amount, currency }) => {
    return (
      <TableRow key={id}>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
      </TableRow>
    );
  });
};

TransactionHistoryItems.propTypes = {
  itemsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
