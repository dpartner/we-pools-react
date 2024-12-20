import { useSelector } from "react-redux";
import s from "./TasksList.module.css";
import clsx from "clsx";
import { selectTasksList } from "../../redux/tasks/selectors";
import TasksListItem from "../TasksListItem/TasksListItem";

const TasksList = () => {
  const tasks = useSelector(selectTasksList);
  return (
    <ul className={clsx(s.tasksList)}>
      {tasks.map((task) => {
        return <TasksListItem key={task.id} {...task} />;
      })}
    </ul>
  );
};

export default TasksList;
