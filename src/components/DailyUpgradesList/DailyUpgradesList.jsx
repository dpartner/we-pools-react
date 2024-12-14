import { useDispatch, useSelector } from "react-redux";
import s from "./DailyUpgradesList.module.css";
import clsx from "clsx";
import {
  selectDailyPageLoading,
  selectDailyUpgrades,
  selectDailyWeBalanceCordinate,
  selectDailyWeBalanceValue,
} from "../../redux/daily/selectors";
import DailyUpgradeEl from "../DailyUpgradeEl/DailyUpgradeEl";
import useDelayedShow from "../../utils/useDelayedShow";
import { setUpgradeNotif, setWeBalanceColor } from "../../redux/daily/slice";
import { delay } from "../../utils/delay";
import {
  deleteDailyUpgradeApi,
  changeDailyWeBalanceApi,
} from "../../redux/daily/operations";

const DailyUpgradesList = () => {
  const loading = useSelector(selectDailyPageLoading);
  const upgrades = useSelector(selectDailyUpgrades);
  const isShown = useDelayedShow(!loading, 50);
  const dispatch = useDispatch();

  //Animations-->

  const weBalanceCordinate = useSelector(selectDailyWeBalanceCordinate);
  const weBalanceValue = useSelector(selectDailyWeBalanceValue);

  async function handleUpgrade(e) {
    e.preventDefault();
    if (e.target.localName === "li") {
      let left = e.target.getBoundingClientRect().left;
      let top = e.target.getBoundingClientRect().top;
      // console.log("event", left, top);

      dispatch(setUpgradeNotif({ left, top, shown: false }));
      const targetCoordinateX = -(left - weBalanceCordinate.left + 30);
      const targetCoordinateY = -(top - weBalanceCordinate.top - 13);
      await delay(50);
      console.log(weBalanceCordinate);

      console.log("target", targetCoordinateY, targetCoordinateX);
      dispatch(
        setUpgradeNotif({
          translateX: targetCoordinateX,
          translateY: targetCoordinateY,
          shown: true,
        })
      );
      await delay(500);
      dispatch(setUpgradeNotif({ shown: false }));
      dispatch(setWeBalanceColor(true));
      const balanceAddValueNum = Number(e.target.dataset.action);
      const weBalanceValueNum = Number(weBalanceValue);
      const sumBalanceValue = balanceAddValueNum + weBalanceValueNum;
      dispatch(changeDailyWeBalanceApi(sumBalanceValue));
      await delay(200);
      dispatch(setWeBalanceColor(false));
      e.target.innerHTML = "";
      e.target.style =
        "max-width: 0; min-width: 0; scale: 0.01; padding: 0; border: none";
      dispatch(deleteDailyUpgradeApi(Number(e.target.id)));
      await delay(200);
      e.target.style = "display: none";
    }
  }

  return (
    <ul className={clsx(s.upList, isShown && s.shown)} onClick={handleUpgrade}>
      {upgrades.length === 0 ? (
        <h5>No upgrades today</h5>
      ) : (
        upgrades.map((upgrade) => (
          <DailyUpgradeEl key={upgrade.id} {...upgrade} />
        ))
      )}
    </ul>
  );
};

export default DailyUpgradesList;
