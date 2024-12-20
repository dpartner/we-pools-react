import s from "./TasksListItem.module.css";
import clsx from "clsx";

const TasksListItem = ({ title, value, buttonName, status }) => {
  let buttonContent = "";
  switch (status) {
    case "active":
      buttonContent = buttonName;
      break;
    case "rejected":
      buttonContent = (
        <img src="../../img/svg/rejected-task.svg" alt="rejected" />
      );
      break;
    case "done":
      buttonContent = <img src="../../img/svg/done-task.svg" alt="done" />;
      break;
    default:
      buttonContent = buttonName;
      break;
  }
  return (
    <li className={clsx(s.tListItem)}>
      <div className={clsx("userIconWrap", s.userIconWrapT)}>
        <img src="../img/svg/star-light.svg" alt="" />
      </div>
      <div className={clsx(s.tContent)}>
        <div className={clsx(s.tTextWrap)}>
          <h2 className={clsx(s.tTitle)}>{title}</h2>
          <p className={clsx(s.tBalance)}>+{value} WE</p>
        </div>
        <button className={clsx(s.tItemBtn, status !== "active" && s.noActive)}>
          {buttonContent}
        </button>
      </div>
    </li>
  );
};

export default TasksListItem;
