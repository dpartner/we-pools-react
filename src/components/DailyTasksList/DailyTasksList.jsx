import { useDispatch, useSelector } from "react-redux";
import s from "./DailyTasksList.module.css";
import clsx from "clsx";
import {
  selectDailyTasks,
  selectDailyTasksLoading,
  selectDailyWeBalanceCordinate,
  selectDailyWeBalanceValue,
} from "../../redux/daily/selectors";
import DailyTask from "../DailyTask/DailyTask";
import { setTaskNotif, setWeBalanceColor } from "../../redux/daily/slice";
import { delay } from "../../utils/delay";
import {
  changeDailyWeBalanceApi,
  deleteDailyTaskApi,
} from "../../redux/daily/operations";

const DailyTasksList = () => {
  const tasks = useSelector(selectDailyTasks);
  const loading = useSelector(selectDailyTasksLoading);
  const dispatch = useDispatch();

  //Animations-->

  const weBalanceCordinate = useSelector(selectDailyWeBalanceCordinate);
  const weBalanceValue = useSelector(selectDailyWeBalanceValue);

  async function handleUpgrade(e) {
    e.preventDefault();
    if (e.target.type === "button") {
      let left = e.target.getBoundingClientRect().left;
      let top = e.target.getBoundingClientRect().top;

      dispatch(setTaskNotif({ left, top, shown: false }));
      await delay(50);

      const targetCoordinateX = -(left - weBalanceCordinate.left + 35);
      const targetCoordinateY = -(top - weBalanceCordinate.top - 12);
      const buttonId = Number(e.target.id);

      const notifText = tasks.find((task) => task.id === buttonId).buttonName;

      dispatch(
        setTaskNotif({
          translateX: targetCoordinateX,
          translateY: targetCoordinateY,
          shown: true,
          text: notifText,
        })
      );
      await delay(700);
      dispatch(setTaskNotif({ shown: false }));
      dispatch(setWeBalanceColor(true));

      const balanceAddValueNum = Number(e.target.dataset.value);
      const weBalanceValueNum = Number(weBalanceValue);
      const sumBalanceValue = balanceAddValueNum + weBalanceValueNum;
      dispatch(changeDailyWeBalanceApi(sumBalanceValue));
      e.target.parentElement.style = "max-height: 0; padding: 0; border: none";
      await delay(300);
      dispatch(setWeBalanceColor(false));
      dispatch(deleteDailyTaskApi(Number(e.target.id)));
    }
  }

  return (
    <ul
      className={clsx(s.tskList, !loading && s.shown)}
      onClick={handleUpgrade}
    >
      {tasks.map((task, index) => {
        const delay = index * 100 + 700;

        return <DailyTask key={task.id} delay={delay} {...task} />;
      })}
    </ul>
  );
};

export default DailyTasksList;
