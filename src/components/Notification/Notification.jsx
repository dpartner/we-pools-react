import { useDispatch, useSelector } from "react-redux";
import s from "./Notification.module.css";
import clsx from "clsx";
import { selectNotification } from "../../redux/utils/selectors";
import { useEffect } from "react";
import { setNotification } from "../../redux/utils/slice";

const Notification = () => {
  const notification = useSelector(selectNotification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notification.shown) {
      setTimeout(() => {
        dispatch(setNotification({ shown: false }));
      }, 1500);
    }
  }, [notification, dispatch]);
  return (
    <div
      className={clsx(
        s.notification,
        notification.shown && s.shown,
        !notification.isApprove && s.disapprove
      )}
    >
      {notification.message}
    </div>
  );
};

export default Notification;
