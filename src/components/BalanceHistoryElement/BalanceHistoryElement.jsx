import s from "./BalanceHistoryElement.module.css";
import clsx from "clsx";

const BalanceHistoryElement = (
    {coinName,
    coinCode,
    symbolName,
    operation,
    amount}
) => {
  let valueClass = 'buy';
  let valueSymbol = '+';
  if (operation === 'sold') {
    valueClass = 'sold';
    valueSymbol = '-';
  }


  return (
    <li className={clsx(s.historyListItem)}>
      <div>
        <img src={`../../../img/${symbolName}`} width="32" height="32" alt="tonkoin" />
      </div>
      <div className={clsx(s.historyItemHeading)}>
        <h4>${coinName}</h4>
        <span className={clsx(s.historyItemValue, valueClass)}>{valueSymbol} {amount}</span>
        <span className={clsx(s.historyItemCode, valueClass)}>{coinCode}</span>
      </div>
    </li>
  );
};

export default BalanceHistoryElement;
