import { useDispatch, useSelector } from "react-redux";
import s from "./BalancePage.module.css";
import clsx from "clsx";
import { selectUser } from "../../redux/users/selectors";
import { useEffect, useRef } from "react";
import {
  fetchBalanceTokensApi,
  fetchBalanceHistoryApi,
} from "../../redux/balance/operations";
import BalanceTokensList from "../../components/BalanceTokensList/BalanceTokensList";
// import Loader from "../../components/Loader/Loader";
import {
  selectBalanceError,
  selectBalanceEyeOpen,
  selectBalanceHistoryOpen,
  selectBalanceTokens,
  selectLoadingBalancePage,
} from "../../redux/balance/selectors";
import { toggleEyeOpen, toggleHistoryOpen } from "../../redux/balance/slice";
import BalanceHistoryList from "../../components/BalanceHistoryList/BalanceHistoryList";
import Menu from "../../components/Menu/Menu";
import { menuClose } from "../../redux/users/slice";

const BalancePage = () => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoadingBalancePage);
  const isError = useSelector(selectBalanceError);
  const historyOpen = useSelector(selectBalanceHistoryOpen);
  const tokensWrap = useRef();
  const balanceTokensLoaded = useSelector(selectBalanceTokens);

  // useEffect(() => {}, [loading]);
  const eyeOpen = useSelector(selectBalanceEyeOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuClose());
    dispatch(fetchBalanceTokensApi(user.id));
    dispatch(fetchBalanceHistoryApi(user.id));
  }, [dispatch, user.id]);

  useEffect(() => {
    if (balanceTokensLoaded) {
      setTimeout(() => {
        scroolTokensWrap();
      }, 50);
      // 50ms задержка
    }
  }, [balanceTokensLoaded]);

  function scroolTokensWrap() {
    setTimeout(() => {
      tokensWrap.current.scroll({
        top: 40,
        behavior: "smooth",
      });
    }, 2000);
    setTimeout(() => {
      tokensWrap.current.scroll({
        top: 0,
        behavior: "smooth",
      });
    }, 2500);
  }

  return (
    <>
      {/* {loading && !isError && <Loader />} */}
      {!loading && !isError && (
        <main>
          <section
            className={clsx(
              "section",
              s.balanceSection,
              historyOpen && s.hidden
            )}
          >
            <div className={clsx("container", s.r)}>
              <div className={clsx(s.balanceWrap, !loading && s.shown)}>
                <h2 className={clsx(s.balanceHeading)}>Total Balance</h2>
                <div className={clsx(s.balanceValueWrap)}>
                  {/* <span>$</span> */}
                  <span className={clsx(s.balance)}>
                    {eyeOpen ? "$ " + user.balance : "😎😎😎"}
                  </span>
                  <button
                    className={clsx(s.balanceButtonEye, !eyeOpen && s.hidden)}
                    onClick={() => {
                      dispatch(toggleEyeOpen());
                    }}
                  >
                    <svg width="24" height="17">
                      <use href="../img/svg/symbol-defs.svg#icon-eye" />
                    </svg>
                  </button>
                </div>
                <div className={clsx(s.balanceButtonWrap)}>
                  <a
                    className={clsx("primaryButton", "deactive", s.balance)}
                    href=""
                  >
                    <svg width="9" height="11">
                      <use href="../img/svg/symbol-defs.svg#icon-arrow-up" />
                    </svg>
                    Send<span>Soon!</span>
                  </a>
                  <a
                    className={clsx("primaryButton", "deactive", s.balance)}
                    href=""
                  >
                    <svg width="9" height="11">
                      <use href="../img/svg/symbol-defs.svg#icon-arrow-up" />
                    </svg>
                    Get<span>Soon!</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            className={clsx(
              "section",
              s.tokensSection,
              historyOpen && s.hidden
            )}
          >
            <div className={clsx("container", s.tokensContainer)}>
              <div className={clsx(s.tokensHeadingWrap)}>
                <h2 className={clsx(s.tokensHeading)}>Tokens</h2>
                <button
                  className={clsx(s.tokensHistoryButton)}
                  onClick={() => {
                    dispatch(toggleHistoryOpen());
                  }}
                >
                  History
                </button>
              </div>
              <div
                className={clsx(
                  s.tokensListWrap,
                  s.hidden,
                  !loading && s.shown
                )}
                ref={tokensWrap}
              >
                <BalanceTokensList />
              </div>
            </div>
          </section>
          <section
            className={clsx(
              "section",
              s.historySection,
              !historyOpen && s.hidden
            )}
          >
            <div className={clsx("container")}>
              <BalanceHistoryList />
            </div>
          </section>
          <Menu />
        </main>
      )}
    </>
  );
};

export default BalancePage;
