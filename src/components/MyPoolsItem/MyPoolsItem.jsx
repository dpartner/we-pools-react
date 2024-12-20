import clsx from "clsx";
import s from "./MyPoolsItem.module.css";

const MyPoolsItem = ({
  coinCode,
  totalStaked,
  stakedAmount,
  claimableAmount,
}) => {
  return (
    <li className={clsx(s.myPoolsListItem)}>
      <div>
        <h3 className={clsx(s.myPoolsHeading)}>Total staked:</h3>
        <p className={clsx(s.myPoolsValue)}>
          {totalStaked} {coinCode}
        </p>
      </div>
      <div>
        <h3 className={clsx(s.myPoolsHeading)}>Your staked amount:</h3>
        <p className={clsx(s.myPoolsValue)}>
          {stakedAmount} {coinCode}
        </p>
      </div>
      <div>
        <h3 className={clsx(s.myPoolsHeading)}>Claimable amount:</h3>
        <p className={clsx(s.myPoolsValue)}>
          {claimableAmount} {coinCode}
        </p>
      </div>
    </li>
  );
};

export default MyPoolsItem;
