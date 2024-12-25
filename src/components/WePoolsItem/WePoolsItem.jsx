import { useRef, useState } from "react";
import s from "./WePoolsItem.module.css";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { setNotification } from "../../redux/utils/slice";

const WePoolsItem = ({
  coinCode,
  symbolName,
  aprValue,
  status,
  days,
  deposit,
  estIncome,
  balance,
}) => {
  const poolItemRef = useRef();
  const [showPool, setShowPool] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  function handleMaxButton() {
    setInputValue(deposit.max);
  }

  function inputSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === "") {
      dispatch(
        setNotification({
          message: "Please enter a valid amount",
          isApprove: false,
          shown: true,
        })
      );
    } else {
      dispatch(
        setNotification({
          message: "Transaction successful",
          isApprove: true,
          shown: true,
        })
      );
    }
    setInputValue("");
  }

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
          <p>Deposit Limit:</p>
          <span className={clsx(s.poolsItemDetailsValue)}>
            {deposit.min} - {deposit.max}
          </span>
          <span className={clsx(s.poolsItemDetailsCode)}>{coinCode}</span>
        </div>
        <div className={clsx(s.poolsItemDetailsHeading)}>
          <p>Estimated Income:</p>
          <span className={clsx(s.poolsItemDetailsValue)}>{estIncome}</span>
          <span className={clsx(s.poolsItemDetailsCode)}>{coinCode}</span>
        </div>
        <div className={clsx(s.poolsItemDetailsHeading)}>
          <p>Your Balance:</p>
          <span className={clsx(s.poolsItemDetailsValue)}>~{balance}</span>
          <span className={clsx(s.poolsItemDetailsCode)}>{coinCode}</span>
        </div>
        <form className={clsx(s.poolsInputForm)} onSubmit={inputSubmit}>
          <input
            className={clsx(s.poolsItemDetailsInput)}
            type="number"
            placeholder="Enter Amount"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            type="button"
            className={clsx(s.poolsItemDetailsInputMaxButton)}
            data-action="max-value"
            onClick={handleMaxButton}
          >
            Max
          </button>
          <div className={clsx(s.poolsItemDetailsButtonWrap)}>
            <button
              type="button"
              className={clsx(
                "primaryButton",
                s.deactive,
                s.poolsItemDetailsButton
              )}
              disabled
            >
              Info
            </button>
            <button
              type="submit"
              className={clsx("primaryButton", s.poolsItemDetailsButton)}
            >
              Stake
            </button>
          </div>
        </form>
      </div>
    </li>
  );
};

export default WePoolsItem;
