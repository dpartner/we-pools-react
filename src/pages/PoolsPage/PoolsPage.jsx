import { useDispatch, useSelector } from "react-redux";
import WePoolsList from "../../components/wePoolsList/wePoolsList";
import s from "./PoolsPage.module.css";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { fetchMyPoolsApi, fetchWePoolsApi } from "../../redux/pools/operations";
import { selectUser } from "../../redux/users/selectors";
import {
  selectPoolPageLoad,
  selectPoolsError,
  selectPoolsWrapWidth,
  selectTranslateXMyPools,
} from "../../redux/pools/selectors";
// import Loader from "../../components/Loader/Loader";
import useDelayedShow from "../../utils/useDelayedShow";
import {
  setPoolsWrapWidth,
  setTranslateXMyPools,
} from "../../redux/pools/slice";
import MyPoolsList from "../../components/MyPoolsList/MyPoolsList";
import { menuClose } from "../../redux/users/slice";
import Menu from "../../components/Menu/Menu";

const PoolsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectPoolPageLoad);
  const isError = useSelector(selectPoolsError);
  const isShown = useDelayedShow(!loading, 50);
  const translateXValue = useSelector(selectTranslateXMyPools);
  const listWrapWidth = useSelector(selectPoolsWrapWidth);
  const poolsListWrapRef = useRef();

  useEffect(() => {
    dispatch(menuClose());
    if (user.id) {
      dispatch(fetchWePoolsApi(user.id));
      dispatch(fetchMyPoolsApi(user.id));
      dispatch(
        setPoolsWrapWidth(Number(poolsListWrapRef.current.offsetWidth) + 16)
      );
    }
  }, [dispatch, user]);

  return (
    <>
      {/* {loading && !isError && <Loader />} */}
      {!loading && !isError && (
        <main>
          <section className={clsx("section", s.buttonSection)}>
            <div className={clsx("container")}>
              <div className={clsx(s.weImgWrap)}>
                <img
                  className={clsx(isShown && s.shown)}
                  srcSet="../img/welcome@1x.png 1x, ../img/welcome@2x.png 2x"
                  src="../img/welcome@1x.png"
                  alt="welcome img"
                />
              </div>
              <div className={clsx(s.weHeadingButtonWrap)}>
                <button
                  id="we-btn"
                  className={clsx(
                    s.weButton,
                    translateXValue === 0 && s.active
                  )}
                  onClick={() => {
                    dispatch(setTranslateXMyPools(0));
                  }}
                >
                  WE Pools
                </button>
                <button
                  id="my-btn"
                  className={clsx(
                    s.weButton,
                    translateXValue !== 0 && s.active
                  )}
                  onClick={() => {
                    dispatch(setTranslateXMyPools(Number(listWrapWidth)));
                  }}
                >
                  My Pools
                </button>
              </div>
            </div>
          </section>
          <section className={clsx("section", s.poolsSection)}>
            <div className={clsx("container", s.poolsContainer)}>
              <div
                ref={poolsListWrapRef}
                className={clsx(s.poolsListsWrap)}
                style={{ transform: `translateX(-${translateXValue}px) ` }}
              >
                <WePoolsList />
                <MyPoolsList />
              </div>
            </div>
          </section>
          <Menu />
        </main>
      )}
    </>
  );
};

export default PoolsPage;
