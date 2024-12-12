import { useSelector } from "react-redux";
import s from "./BalanceHistoryList.module.css";
import { selectBalanceHistory } from "../../redux/balance/selectors";
import BalanceHistoryElement from "../BalanceHistoryElement/BalanceHistoryElement";

const BalanceHistoryList = () => {
  const history = useSelector(selectBalanceHistory);

  function dataGroupingHistory(history) {
    const historyGroups = [];
    for (const trans of history) {
      const dateTrans = new Date(trans.date);
      const dateTransWithoutTime = getDateWithoutTime(dateTrans);
      if (historyGroups.length) {
        const findedGroup = historyGroups.find(group => {
          const dateGroup = new Date(group.date);
          return (
            dateTrans.getDate() === dateGroup.getDate() &&
            dateTrans.getMonth() === dateGroup.getMonth() &&
            dateTrans.getFullYear() === dateGroup.getFullYear()
          );
        });
        if (findedGroup) {
          findedGroup.transactions.push(trans);
        } else {
          historyGroups.push({
            date: dateTransWithoutTime,
            transactions: [trans],
          });
        }
      } else {
        historyGroups.push({
          date: dateTransWithoutTime,
          transactions: [trans],
        });
      }
    }
    return historyGroups;
  }

  function getDateWithoutTime(date) {
    // Create a new date object to avoid modifying the original date
    const dateWithoutTime = new Date(date);
  
    // Set seconds and milliseconds to zero
    dateWithoutTime.setSeconds(0, 0);
  
    // Format date components with padding
    const year = dateWithoutTime.getFullYear();
    const month = String(dateWithoutTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateWithoutTime.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

    const groups = dataGroupingHistory(history);
    const groupsSorted = groups.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
    });

  return (
    groupsSorted.map(group => {
      const sortedTransactions = group.transactions.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      const date = new Date(group.date);
      const day = date.getDate();
      const month = '0' + (date.getMonth() + 1);
      const year = date.getFullYear().toString().slice(2);

      return (
        <div key={group.date} className={s.historyListWrap}>
          <h2 className={s.historyListDate}>{day}.{month}.{year}</h2>
          <ul className={s.historyList}>
          {sortedTransactions.map(trans => {
          return <BalanceHistoryElement key={trans.id} {...trans} />
          })}
          </ul>
        </div>
          
      )
    }
  )
);
};

export default BalanceHistoryList;
