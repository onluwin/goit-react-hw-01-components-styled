// COMPONENTS
import { TransactionHistoryTHead } from './TransactionHistoryTHead';
import { TransactionHistoryTBody } from './TransactionHistoryTBody';
import { TransactionHistoryItems } from './TransactionHistoryItems';

// STYLED
import { TransactionsTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TransactionHistoryTHead />
      <TransactionHistoryTBody>
        <TransactionHistoryItems itemsData={items} />
      </TransactionHistoryTBody>
    </TransactionsTable>
  );
};
