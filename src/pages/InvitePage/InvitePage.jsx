import { useDispatch, useSelector } from "react-redux";
import s from "./InvitePage.module.css";
import clsx from "clsx";
import { useEffect } from "react";
import { fetchFriendListApi } from "../../redux/invite/operations";
import { selectUser } from "../../redux/users/selectors";
import FriendList from "../../components/FriendList/FriendList";
import { selectInviteLoadingFriendList } from "../../redux/invite/selectors";
import useDelayedShow from "../../utils/useDelayedShow";
import { toogleRefLinkWrap } from "../../redux/invite/slice";

const InvitePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectInviteLoadingFriendList);
  const isShown = useDelayedShow(!loading, 50);

  useEffect(() => {
    dispatch(fetchFriendListApi(user.id));
  }, [dispatch, user]);

  return (
    <main>
      <section className={clsx("section", s.hdSection, isShown && s.shown)}>
        <div className={clsx("container", s.hdContainer)}>
          <h1 className={clsx(s.hdHeading)}>Invite Friends</h1>
          <p className={clsx(s.hdDesc)}>
            Every time your friend claims HOT you get 20% cashback. And 5% every
            time his referrals claim it
          </p>
        </div>
      </section>
      <section className={clsx("section", s.flSection)}>
        <div className={clsx("container", s.flContainer)}>
          <div className={clsx(s.flWrap)}>
            <h2 className={clsx(s.flHeading)}>Friends List</h2>
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
      {/* <div className={clsx(s.menu)}>
        <h2 className={clsx(s.menuHeading)}>Settings</h2>
        <div className={clsx(s.menuUserInfoWrap)}>
          <div className={clsx(s.menuUserIconWrap)}>
            <img src="../img/svg/user-icon.svg" alt="" />
          </div>
          <div className={clsx(s.menuUserContent)}>
            <div className={clsx(s.menuUserTextWrap)}>
              <h2 className={clsx(s.menuUserTitle)}>
                #user_<span>id</span>
              </h2>
              <p className={clsx(s.menuUserBalance)}>0.00 NEAR | 0.00 TON</p>
            </div>
          </div>
        </div>
        <ul className={clsx(s.menuSettingList)}>
          <li className={clsx(s.menuSettingItem)}>
            <div className={clsx(s.menuSettingsItemIconWrap)}>
              <img src="../img/svg/language.svg" alt="" />
            </div>
            <h3 className={clsx(s.menuSettingsItemHeading)}>Language</h3>
            <button
              type="button"
              className={clsx(s.menuSettingsItemButton)}
              id="lng-btn"
            >
              <svg width="9" height="9">
                <use href="../img/svg/symbol-defs.svg#icon-down-arrow" />
              </svg>
            </button>
          </li>
          <li className={clsx(s.menuSettingItem)}>
            <div className={clsx(s.menuSettingsItemIconWrap)}>
              <img src="../img/svg/inviter.svg" alt="" />
            </div>
            <h3 className={clsx(s.menuSettingsItemHeading)}>Inviter</h3>
            <button
              type="button"
              className={clsx(s.menuSettingsItemButton)}
              id="inv-btn"
            >
              <svg width="9" height="9">
                <use href="../img/svg/symbol-defs.svg#icon-down-arrow" />
              </svg>
            </button>
          </li>
          <li className={clsx(s.menuSettingItem)}>
            <div className={clsx(s.menuSettingsItemIconWrap)}>
              <img src="../img/svg/logout.svg" alt="" />
            </div>
            <h3 className={clsx(s.menuSettingsItemHeading)}>Logout</h3>
            <a
              href="../../index.html"
              className={clsx(s.menuSettingsItemButton)}
              id="logout-btn"
            >
              <svg width="9" height="9">
                <use href="../img/svg/symbol-defs.svg#icon-down-arrow" />
              </svg>
            </a>
          </li>
        </ul>
      </div> */}
    </main>
  );
};

export default InvitePage;
