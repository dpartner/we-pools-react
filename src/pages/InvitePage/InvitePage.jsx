import { useDispatch, useSelector } from "react-redux";
import s from "./InvitePage.module.css";
import clsx from "clsx";
import { useEffect } from "react";
import { fetchFriendListApi } from "../../redux/invite/operations";
import { selectUser } from "../../redux/users/selectors";
import FriendList from "../../components/FriendList/FriendList";
import {
  selectInviteError,
  selectInviteFriendList,
  selectInviteLoadingFriendList,
} from "../../redux/invite/selectors";
import useDelayedShow from "../../utils/useDelayedShow";
import { toogleRefLinkWrap } from "../../redux/invite/slice";
import Menu from "../../components/Menu/Menu";
import { menuClose } from "../../redux/utils/slice";
// import Loader from "../../components/Loader/Loader";

const InvitePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectInviteLoadingFriendList);
  const isError = useSelector(selectInviteError);
  const isShown = useDelayedShow(!loading, 50);
  const friendList = useSelector(selectInviteFriendList);

  useEffect(() => {
    dispatch(menuClose());
    dispatch(fetchFriendListApi(user.id));
  }, [dispatch, user]);

  return (
    <>
      {/* {loading && !isError && <Loader />} */}
      {!loading && !isError && (
        <main>
          <section className={clsx("section", s.hdSection, isShown && s.shown)}>
            <div className={clsx("container", s.hdContainer)}>
              <h1 className={clsx(s.hdHeading)}>Invite Friends</h1>
              <p className={clsx(s.hdDesc)}>
                Every time your friend staking, you get 5%. And 5% each time
                from your friend’s claim!
              </p>
              <div className={s.invBalanceWrap}>
                <div className={s.invBalanceCont}>
                  <h4 className={s.invBalanceHeading}>WE Balance:</h4>
                  <div className={s.invBalanceValueCont}>
                    <img
                      className={s.invBalanceImg}
                      src="../img/we-logo.svg"
                      width="38"
                      height="22"
                      alt="tonkoin"
                    />
                    <span className={s.invBalanceValue}>
                      {user.weBalance.toLocaleString("ja-JP")}
                    </span>
                  </div>
                </div>
                <div className={s.invBalanceCont}>
                  <h4 className={s.invBalanceHeading}>WE Balance:</h4>
                  <div className={s.invBalanceValueCont}>
                    <img
                      className={s.invBalanceImg}
                      src="../img/tonkoin.png"
                      width="30"
                      height="30"
                      alt="tonkoin"
                    />
                    <span className={s.invBalanceValue}>
                      {user.weBalance.toLocaleString("ja-JP")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={clsx("section", s.flSection)}>
            <div className={clsx("container", s.flContainer)}>
              <div className={clsx(s.flWrap)}>
                <h2 className={clsx(s.flHeading)}>
                  Friends List ({friendList.length})
                </h2>
                <FriendList />
                <div className={clsx(s.buttonWrap, isShown && s.shown)}>
                  <button
                    className={clsx("primaryButton", s.primaryButtonFl)}
                    data-action="openLink"
                    onClick={() => {
                      dispatch(toogleRefLinkWrap());
                    }}
                  >
                    Invite Friends
                  </button>
                </div>
              </div>
            </div>
          </section>
          <Menu />
        </main>
      )}
    </>
  );
};

export default InvitePage;
