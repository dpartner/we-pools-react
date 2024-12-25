import clsx from "clsx";
import s from "./MyPoolsItem.module.css";
import { useRef, useState } from "react";

const MyPoolsItem = ({
  coinCode,
  symbolName,
  aprValue,
  status,
  days,
  amount,
  claimableAmount,
  dailyInc,
  expDate,
}) => {
  const poolItemRef = useRef();
  const [showPool, setShowPool] = useState(false);

  return (
    <li
      ref={poolItemRef}
      className={clsx(s.poolsListItem, showPool && s.shown)}
    >
      <div className={clsx(s.poolsListItemValuesWrap)}>
        <div className={clsx(s.poolsListIconWrap)}>
          <img
            src={`../../../img/${symbolName}`}
            width="32"
            height="32"
            alt="tonkoin"
          />
        </div>
        <div className={clsx(s.poolsItemHeading)}>
          <h4>{coinCode}</h4>
          <span
            className={clsx(
              s.poolsItemHeadingApr,
              status === "approve" ? s.approve : s.dis
            )}
          >
            {aprValue}% {status === "approve" ? "APR" : "DIS"}
          </span>
          <span className={clsx(s.poolsItemHeadingDays)}>{days} d</span>
          <button
            type="button"
            className={clsx(s.poolsItemHeadingButton, showPool && s.open)}
            onClick={() => {
              setShowPool(!showPool);
            }}
          >
            <svg width="9" height="9">
              <use href="../img/svg/symbol-defs.svg#icon-down-arrow" />
            </svg>
          </button>
        </div>
      </div>
      <div className={clsx(s.poolsItemDetailsWrap)}>
        <div className={clsx(s.poolsItemDetailsHeading)}>
          <p>Amount staked:</p>
          <span className={clsx(s.poolsItemDetailsValue)}>{amount}</span>
          <span className={clsx(s.poolsItemDetailsCode)}>{coinCode}</span>
        </div>
        <div className={clsx(s.poolsItemDetailsHeading)}>
          <p>Claimable amount:</p>
          <span className={clsx(s.poolsItemDetailsValue)}>
            {claimableAmount}
          </span>
          <span className={clsx(s.poolsItemDetailsCode)}>{coinCode}</span>
        </div>
        <div className={clsx(s.poolsItemDetailsHeading)}>
          <p>Daily income:</p>
          <span className={clsx(s.poolsItemDetailsValue)}>~{dailyInc}</span>
          <span className={clsx(s.poolsItemDetailsCode)}>{coinCode}</span>
        </div>
        <div className={clsx(s.poolsItemDetailsHeading)}>
          <p>Expiration date:</p>
          <span className={clsx(s.poolsItemDetailsValue)}>{expDate}</span>
        </div>
        <div className={clsx(s.poolsItemDetailsButtonWrap)}>
          <button
            type="button"
            className={clsx(
              "primaryButton",
              s.deactive,
              s.poolsItemDetailsButton
            )}
          >
            Unstake
          </button>
          <button
            type="submit"
            className={clsx("primaryButton", s.poolsItemDetailsButton)}
          >
            Claim
          </button>
        </div>
      </div>
    </li>
  );
};

export default MyPoolsItem;
