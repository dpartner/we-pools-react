import { useDispatch } from "react-redux";
import s from "./TasksListItem.module.css";
import clsx from "clsx";
import { setNotification } from "../../redux/utils/slice";
import { useEffect, useState } from "react";

const TasksListItem = ({ title, value, buttonName, status }) => {
  const dispatch = useDispatch();
  const [buttonContent, setButtonContent] = useState("");
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    switch (status) {
      case "active":
        setButtonContent(buttonName);
        setIsActive(true);
        break;
      case "rejected":
        setButtonContent(
          <img src="../../img/svg/rejected-task.svg" alt="rejected" />
        );
        setIsActive(false);
        break;
      case "done":
        setButtonContent(<img src="../../img/svg/done-task.svg" alt="done" />);
        setIsActive(false);
        break;
      default:
        setButtonContent(buttonName);
        setIsActive(true);
        break;
    }
  }, [buttonName, status]);

  function handleButton() {
    if (buttonName === "Verify") {
      dispatch(
        setNotification({
          message: "Verified",
          isApprove: true,
          shown: true,
        })
      );
      setButtonContent(<img src="../../img/svg/done-task.svg" alt="done" />);
      setIsActive(false);
    }
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
        <button
          className={clsx(s.tItemBtn, !isActive && s.noActive)}
          onClick={handleButton}
        >
          {buttonContent}
        </button>
      </div>
    </li>
  );
};

export default TasksListItem;
