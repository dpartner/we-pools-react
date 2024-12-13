import { useSelector } from "react-redux";
import s from "./DailyTasksList.module.css";
import clsx from "clsx";
import {
  selectDailyTasks,
  selectDailyTasksLoading,
} from "../../redux/daily/selectors";
import DailyTask from "../DailyTask/DailyTask";

const DailyTasksList = () => {
  const tasks = useSelector(selectDailyTasks);
  const loading = useSelector(selectDailyTasksLoading);

  return (
    <ul className={clsx(s.tskList, !loading && s.shown)}>
      {tasks.map((task, index) => {
        const delay = index * 100 + 700;

        return <DailyTask key={task.id} delay={delay} {...task} />;
      })}
    </ul>
  );
};

export default DailyTasksList;
