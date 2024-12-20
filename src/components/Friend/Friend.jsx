import s from "./Friend.module.css";
import clsx from "clsx";

const Friend = ({ id, coins, photoUrl }) => {
  return (
    <li className={clsx(s.flListItem)}>
      <div
        className={clsx(
          "userIconWrap",
          s.userIconWrapFl,
          photoUrl && s.hasPicture
        )}
      >
        <img src={photoUrl ? photoUrl : "../../img/svg/user-icon.svg"} alt="" />
      </div>
      <div className={clsx(s.flContent)}>
        <div className={clsx(s.flTextWrap)}>
          <h2 className={clsx(s.flTitle)}>#user_{id}</h2>
          <p className={clsx(s.flBalance)}>
            {coins[0].value} {coins[0].code} | {coins[1].value} {coins[1].code}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Friend;
