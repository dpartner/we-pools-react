import { useSelector } from "react-redux";
import s from "./DailyTask.module.css";
import clsx from "clsx";
import { selectDailyTasksLoading } from "../../redux/daily/selectors";
import useDelayedShow from "../../utils/useDelayedShow";

const DailyTask = ({ delay, nameTask, buttonName, value }) => {
  const loading = useSelector(selectDailyTasksLoading);
  const isShown = useDelayedShow(!loading, 50);

  return (
    <li
      className={clsx(s.tskListItem, isShown && s.tskListItemShown)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className={clsx(s.tskItemName)}>{nameTask}</p>
      <button type="button" className={clsx(s.tskItemBtn)} data-value={value}>
        {buttonName}
      </button>
    </li>
  );
};

export default DailyTask;
