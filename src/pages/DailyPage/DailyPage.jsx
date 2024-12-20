import { useDispatch, useSelector } from "react-redux";
import s from "./DailyPage.module.css";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import {
  fetchDailyTasksApi,
  fetchDailyUpgradesApi,
  fetchDailyWeBalanceApi,
} from "../../redux/daily/operations";
import { selectUser } from "../../redux/users/selectors";
import {
  selectDailyError,
  selectDailyPageLoading,
  selectDailyTaskNotif,
  selectDailyUpgradeNotif,
  selectDailyWeBalanceColor,
  selectDailyWeBalanceValue,
} from "../../redux/daily/selectors";
import Loader from "../../components/Loader/Loader";
import DailyUpgradesList from "../../components/DailyUpgradesList/DailyUpgradesList";
import DailyTasksList from "../../components/DailyTasksList/DailyTasksList";
import useDelayedShow from "../../utils/useDelayedShow";
import { initWeBalance } from "../../redux/daily/slice";

const DailyPage = () => {
  const user = useSelector(selectUser);
  const weBalanceValue = Number(useSelector(selectDailyWeBalanceValue));
  const weBalanceColor = useSelector(selectDailyWeBalanceColor);
  const loading = useSelector(selectDailyPageLoading);
  const isError = useSelector(selectDailyError);
  const isShown = useDelayedShow(!loading, 50);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.id) {
      dispatch(fetchDailyUpgradesApi(user.id));
      dispatch(fetchDailyTasksApi(user.id));
      dispatch(fetchDailyWeBalanceApi(user.id));
    }
  }, [dispatch, user]);

  //Animations-->
  const weBalanceValueRef = useRef();
  const upgradeNotifRef = useRef();
  const taskNotifRef = useRef();

  const upgradeNotif = useSelector(selectDailyUpgradeNotif);
  const taskNotif = useSelector(selectDailyTaskNotif);

  useEffect(() => {
    if (weBalanceValueRef.current) {
      const top = weBalanceValueRef.current.getBoundingClientRect().top;

      const left = weBalanceValueRef.current.getBoundingClientRect().left;
      dispatch(initWeBalance({ cordinate: { top, left } }));
    }
  }, [dispatch]);

  return (
    <>
      {loading && !isError && <Loader />}
      {!loading && !isError && (
        <main>
          {/* <!-- -------------------TG section---------------- --> */}

          <section className={clsx("section", s.tgSection, isShown && s.shown)}>
            <div className={clsx("container")}>
              <div className={clsx(s.tgWrap)}>
                <div className={clsx("userIconWrap", s.userIconWrapDaily)}>
                  <img src="../img/svg/user-icon.svg" alt="" />
                </div>
                <div className={clsx(s.tgContent)}>
                  <div className={clsx(s.tgTextWrap)}>
                    <h2 className={clsx(s.tgTitle)}>TG NAME</h2>
                    <p className={clsx(s.tgBalance)}>??,??? WE</p>
                  </div>
                  <div className={clsx(s.tgButtonWrap)}>
                    <button
                      type="button"
                      className={clsx(s.tgButton)}
                      data-action="open-input"
                    >
                      <svg width="9" height="9">
                        <use href="../img/svg/symbol-defs.svg#icon-down-arrow" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- -------------------WE Balance section---------------- --> */}
          <section
            className={clsx("section", s.weBalanceSection, isShown && s.shown)}
          >
            <div className={clsx("container", s.weBalance)}>
              <div className={clsx(s.weBalanceWrap)}>
                <h2>WE Balalnce:</h2>
                <div className={clsx(s.weBalanceValueWrap)}>
                  <div className={clsx(s.weBalanceValueIcon)}>
                    <img
                      src="../img/tonkoin.png"
                      width="32"
                      height="32"
                      alt="tonkoin"
                    />
                  </div>
                  <span
                    className={clsx(s.weBalanceValue, weBalanceColor && s.up)}
                    ref={weBalanceValueRef}
                  >
                    {weBalanceValue.toLocaleString("ja-JP")}
                  </span>
                  <button className={clsx(s.weBalanceValueButton)}>
                    History
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- -------------------UPGRADE section---------------- --> */}
          <section className={clsx("section", s.upgradeSection)}>
            <div className={clsx("container", s.containerUpgrade)}>
              <h3 className={clsx(s.upHeading)}>Upgrade</h3>
              <DailyUpgradesList />
              <span
                className={clsx(s.upItemNotif, upgradeNotif.shown && s.shown)}
                ref={upgradeNotifRef}
                style={{
                  transform: `translate(${
                    upgradeNotif.shown ? upgradeNotif.translateX : 0
                  }px, ${upgradeNotif.shown ? upgradeNotif.translateY : 0}px)`,
                  top: `${upgradeNotif.top}px`,
                  left: `${upgradeNotif.left}px`,
                }}
              >
                Upgraded
              </span>
            </div>
          </section>
          {/* <!-- -------------------TASKS section---------------- --> */}
          <section className={clsx("section", s.tskSection)}>
            <div className={clsx("container")}>
              <DailyTasksList />
              <span
                className={clsx(s.tskItemNotif, taskNotif.shown && s.shown)}
                ref={taskNotifRef}
                style={{
                  transform: `translate(${
                    taskNotif.shown ? taskNotif.translateX : 0
                  }px, ${taskNotif.shown ? taskNotif.translateY : 0}px)`,
                  top: `${taskNotif.top}px`,
                  left: `${taskNotif.left}px`,
                }}
              >
                {taskNotif.text + "ed" || "Claimed "}
              </span>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default DailyPage;
