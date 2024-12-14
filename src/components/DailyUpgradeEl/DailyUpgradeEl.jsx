import s from "./DailyUpgradeEl.module.css";
import clsx from "clsx";

const DailyUpgradeEl = ({ id, nameUp, value, lvl }) => {
  return (
    <li className={clsx(s.upListItem)} data-action={value} id={id}>
      <h4 className={clsx(s.upItemName)}>{nameUp}</h4>
      <p className={clsx(s.upItemValueWrap)}>
        <span className={clsx(s.upItemValue)}>-{value}</span>
        WE · Lvl
        <span className={clsx(s.upItemLvl)}>${lvl}</span>
      </p>
    </li>
  );
};

export default DailyUpgradeEl;
