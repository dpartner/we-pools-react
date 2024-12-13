import { useDispatch, useSelector } from "react-redux";
import s from "./DailyUpgradesList.module.css";
import clsx from "clsx";
import {
  selectDailyHeaderHeight,
  selectDailyPageLoading,
  selectDailyUpgrades,
  selectDailyWeBalanceCordinate,
} from "../../redux/daily/selectors";
import DailyUpgradeEl from "../DailyUpgradeEl/DailyUpgradeEl";
import useDelayedShow from "../../utils/useDelayedShow";
import { useEffect, useRef } from "react";
import { setUpgradeNotif } from "../../redux/daily/slice";

const DailyUpgradesList = () => {
  const loading = useSelector(selectDailyPageLoading);
  const upgrades = useSelector(selectDailyUpgrades);
  const isShown = useDelayedShow(!loading, 50);
  const dispatch = useDispatch();

  //Animations-->
  const headerHeight = useSelector(selectDailyHeaderHeight);
  const weBalanceCordinate = useSelector(selectDailyWeBalanceCordinate);

  async function handleUpgrade(e) {
    let left = e.target.getBoundingClientRect().left;
    // let top = e.target.getBoundingClientRect().top - headerHeight;
    let top = e.target.getBoundingClientRect().top;
    console.log("event", left, top);

    dispatch(setUpgradeNotif({ left, top, shown: false }));
    const targetCoordinateY = -weBalanceCordinate.top;
    const targetCoordinateX = -weBalanceCordinate.left;
    const timer = await setTimeout(() => {
      console.log("target", targetCoordinateY, targetCoordinateX);
      dispatch(
        setUpgradeNotif({
          top: targetCoordinateY,
          left: targetCoordinateX,
          shown: true,
        })
      );
    }, 50);

    // domElements.upgradeNotif.style.left = left + "px";
    // domElements.upgradeNotif.style.top = top + "px";
    // const targetCoordinateY = -(top - weBalanceCordinate.top + headerHeight);
    // const targetCoordinateY = weBalanceCordinate.top;
    // const targetCoordinateX = weBalanceCordinate.left;
    // console.log("target", targetCoordinateY, targetCoordinateX);

    // console.log(targetCoordinateY);
    // console.log(targetCoordinateX);

    // dispatch(
    //   setUpgradeNotif({
    //     top: targetCoordinateY,
    //     left: targetCoordinateX,
    //     shown: true,
    //   })
    // );

    // domElements.upgradeNotif.classList.add("shown");
    // domElements.upgradeNotif.style.transform = `translate(${targetCoordinateX}px, ${targetCoordinateY}px)`;

    // const balanceAddValue = Number(
    //   e.target.dataset.action.replace(",", ".")
    // ).toFixed(3);
    // const weBalanceValue = Number(
    //   domElements.weBalanceValue.textContent.replace(",", ".")
    // ).toFixed(3);
    // const sumBalanceValue = (
    //   Number(balanceAddValue) + Number(weBalanceValue)
    // ).toFixed(3);

    // setTimeout(() => {
    //   domElements.weBalanceValue.textContent = sumBalanceValue;
    //   domElements.weBalanceValue.classList.add("up");
    //   setTimeout(() => {
    //     domElements.weBalanceValue.classList.remove("up");
    //   }, 500);
    //   domElements.upgradeNotif.classList.remove("shown");
    //   domElements.upgradeNotif.style.removeProperty("transform");
    //   e.target.classList.add("removed");
    //   setTimeout(() => {
    //     e.target.style.display = "none";
    //   }, 500);
    // }, 500);
  }

  return (
    <ul className={clsx(s.upList, isShown && s.shown)} onClick={handleUpgrade}>
      {upgrades.map((upgrade) => (
        <DailyUpgradeEl key={upgrade.id} {...upgrade} />
      ))}
    </ul>
  );
};

export default DailyUpgradesList;
