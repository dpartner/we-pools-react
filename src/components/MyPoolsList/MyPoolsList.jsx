import clsx from "clsx";
import s from "./MyPoolsList.module.css";
import { useSelector } from "react-redux";
import { selectMyPools } from "../../redux/pools/selectors";
import MyPoolsItem from "../MyPoolsItem/MyPoolsItem";

const MyPoolsList = () => {
  const myPools = useSelector(selectMyPools);
  return (
    <ul className={clsx(s.myPoolsList)}>
      {myPools.length !== 0 ? (
        myPools.map((pool) => {
          return <MyPoolsItem key={pool.id} {...pool} />;
        })
      ) : (
        <h2 style={{ textAlign: "center" }}>You don`t have any pools.</h2>
      )}
    </ul>
  );
};

export default MyPoolsList;
