import { useDispatch, useSelector } from 'react-redux';
import s from './BalancePage.module.css'
import clsx from 'clsx';
import { selectGlobalLoading, selectUser } from '../../redux/users/selectors';
import { useEffect } from 'react';
import { fetchBalanceCoinsApi, fetchBalanceHistoryApi } from '../../redux/balance/operations';
import BalanceCoinsList from '../../components/BalanceCoinsList/BalanceCoinsList';
import Loader from '../../components/Loader/Loader';
import { selectBalanceEyeOpen } from '../../redux/balance/selectors';
import { toggleEyeOpen } from '../../redux/balance/slice';
import BalanceHistoryList from '../../components/BalanceHistoryList/BalanceHistoryList';

const BalancePage = () => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectGlobalLoading);
  useEffect(()=> {
    console.log(loading);
  }, [loading]);
  const eyeOpen = useSelector(selectBalanceEyeOpen);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchBalanceCoinsApi());
    },[dispatch, ]);
    useEffect(()=>{
      dispatch(fetchBalanceHistoryApi());
      },[dispatch, ]);

  return (
    loading ? <Loader /> : <main>
    {loading && <h1>LOADING</h1>}
    <section className={clsx("section", s.balanceSection )}>
      <div className={clsx("container", s.r)}>
        <div className={clsx(s.balanceWrap, !loading && s.shown)}>
          <h2 className={clsx(s.balanceHeading)}>Total Balance</h2>
          <div className={clsx(s.balanceValueWrap)}>
            {/* <span>$</span> */}
            <span className={clsx(s.balance)}>{eyeOpen ? '$ ' + user.balance : '😎😎😎'}</span>
            <button className={clsx(s.balanceButtonEye, !eyeOpen && s.hidden)} onClick={()=> {dispatch(toggleEyeOpen())}}>
              <svg width="24" height="17">
                <use href="../img/svg/symbol-defs.svg#icon-eye" />
              </svg>
            </button>
          </div>
          <div className={clsx(s.balanceButtonWrap)}>
            <a className={clsx("primaryButton", "deactive", s.balance)} href="">
              <svg width="9" height="11">
                <use href="../img/svg/symbol-defs.svg#icon-arrow-up" />
              </svg>
              Send<span>Soon!</span>
            </a>
            <a className={clsx("primaryButton", "deactive", s.balance)} href="">
              <svg width="9" height="11">
                <use href="../img/svg/symbol-defs.svg#icon-arrow-up" />
              </svg>
              Get<span>Soon!</span>
              </a>
          </div>
        </div>
      </div>
    </section>
    <section className={clsx("section", s.tokensSection )}>
      <div className={clsx("container", s.tokensContainer)}>
        <div className={clsx(s.tokensHeadingWrap)}>
          <h2 className={clsx(s.tokensHeading)}>Tokens</h2>
          <button className={clsx(s.tokensHistoryButton)}>History</button>
        </div>
        <div className={clsx(s.tokensListWrap, s.hidden, !loading && s.shown)}>
          <BalanceCoinsList />
        </div>
      </div>
    </section>
    <section className={clsx("section", s.historySection, s.hidden)}>
      <div className={clsx("container")}>
          <BalanceHistoryList/>
      </div>
    </section>
  </main>
  );
};

export default BalancePage;
