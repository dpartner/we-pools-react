import clsx from "clsx";
import s from "./WePoolsList.module.css";
import { useSelector } from "react-redux";
import {
  selectWePools,
  selectWePoolsLoading,
} from "../../redux/pools/selectors";
import WePoolsItem from "../wePoolsItem/wePoolsItem";
import useDelayedShow from "../../utils/useDelayedShow";

const WePoolsList = () => {
  const wePools = useSelector(selectWePools);
  const loading = useSelector(selectWePoolsLoading);
  const isShown = useDelayedShow(!loading, 50);
  return (
    <ul className={clsx(s.poolsList, isShown && s.shown)}>
      {wePools.length !== 0 ? (
        wePools.map((pool) => {
          return <WePoolsItem key={pool.id} {...pool} />;
        })
      ) : (
        <h2 style={{ textAlign: "center" }}>You don`t have any pools.</h2>
      )}
    </ul>
  );
};

export default WePoolsList;
