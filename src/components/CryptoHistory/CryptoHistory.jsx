import { formatHistoryDate } from '../../service/formatDate';
export const CryptoHistory = ({ transactionHistory }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>PRICE</th>
          <th>AMOUNT</th>
          <th>DATE</th>
        </tr>
      </thead>
      <tbody>
        {transactionHistory.map(({ id, price, amount, date }, index) => {
          return (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{price}</td>
              <td>{amount}</td>
              <td>{formatHistoryDate(date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
