import { HeadTr, Table, Th, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <HeadTr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </HeadTr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
