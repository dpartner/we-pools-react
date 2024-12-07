import { useDispatch, useSelector } from 'react-redux';
import s from './BalancePage.module.css'
import clsx from 'clsx';
import { selectLoading, selectUser } from '../../redux/users/selectors';
import { useEffect } from 'react';
import { fetchUserApi } from '../../redux/users/operations';

const BalancePage = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
      dispatch(fetchUserApi(23456));
    }, [dispatch]);
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  // console.log(user);
  

  return (
    <main>
      <section className={clsx("section", s.balanceSection )}>
        <div className={clsx("container", s.r)}>
          <div className={clsx(s.balanceWrap, !loading && s.shown)}>
            <h2 className={clsx(s.balanceHeading)}>Total Balance</h2>
            <div className={clsx(s.balanceValueWrap)}>
              <span>$</span>
              <span className={clsx(s.balance)}>{user.balance}</span>
              <button className={clsx(s.balanceButtonEye)}>
                <svg width="24" height="17">
                  <use href="../img/svg/symbol-defs.svg#icon-eye" />
                </svg>
              </button>
            </div>
            <div className={clsx(s.balanceButtonWrap)}>
              <a className={clsx(s.primaryButton, s.deactive, s.balance)} href="">
                <svg width="9" height="11">
                  <use href="../img/svg/symbol-defs.svg#icon-arrow-up" />
                </svg>
                Send<span>Soon!</span>
              </a>
              <a className={clsx(s.primaryButton, s.deactive, s.balance)} href="">
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
          <div className={clsx(s.tokensListWrap, s.hidden)}>
            <ul className={clsx(s.tokensList)}>
              <li className={clsx(s.tokensListItem)}>
                <div>
                  <img src="../img/tonkoin.png" width="32" height="32" alt="tonkoin" />
                </div>
                <div className={clsx(s.tokensListItemValuesWrap)}>
                  <div className={clsx(s.tokensItemHeading)}>
                    <h4>Tonkoin</h4>
                    <span>3,47</span>
                  </div>
                  <div className={clsx(s.tokensItemSummary)}>
                    <span className={clsx(s.tokensItemSummaryPrice)}>$5,74</span> 
                    <span className={clsx(s.tokensItemSummary, s.status, s.up)}>+3,65%</span> 
                    <span className={clsx(s.tokensItemSummarySum)}>$ 19,98</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={clsx("section", s.historySection, s.hidden)}>
        <div className={clsx("container")}>
          <div className={clsx(s.historyListWrap)}>
            <h2 className={clsx(s.historyListDate)}>24.09.24</h2>
            <ul className={clsx(s.historyList)}>
              <li className={clsx(s.historyListItem)}>
                <div>
                  <img src="../img/tonkoin.png" width="32" height="32" alt="tonkoin"/>
                </div>
                <div className={clsx(s.historyItemHeading)}>
                  <h4>Tonkoin</h4>
                  <span className={clsx(s.historyItemValue)}>3,47</span>
                  <span className={clsx(s.historyItemCode)}>TON</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BalancePage;
