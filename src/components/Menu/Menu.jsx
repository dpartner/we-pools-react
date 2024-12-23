import { useDispatch, useSelector } from "react-redux";
import s from "./Menu.module.css";
import clsx from "clsx";
import { selectMenuToggle } from "../../redux/users/selectors";
import { setInviter, setLogged } from "../../redux/users/slice";

const Menu = () => {
  const menuToggle = useSelector(selectMenuToggle);
  const dispatch = useDispatch();

  function handleOpenMenuInviter() {
    dispatch(setInviter(true));
  }

  return (
    <div className={clsx(s.menu, menuToggle && s.shown)}>
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
      <ul className={clsx(s.menuSettingsList)}>
        <li className={clsx(s.menuSettingsItem)}>
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
        <li className={clsx(s.menuSettingsItem)}>
          <div className={clsx(s.menuSettingsItemIconWrap)}>
            <img src="../img/svg/inviter.svg" alt="" />
          </div>
          <h3 className={clsx(s.menuSettingsItemHeading)}>Inviter</h3>
          <button
            type="button"
            className={clsx(s.menuSettingsItemButton)}
            id="inv-btn"
            onClick={handleOpenMenuInviter}
          >
            <svg width="9" height="9">
              <use href="../img/svg/symbol-defs.svg#icon-down-arrow" />
            </svg>
          </button>
        </li>
        <li className={clsx(s.menuSettingsItem)}>
          <div className={clsx(s.menuSettingsItemIconWrap)}>
            <img src="../img/svg/logout.svg" alt="" />
          </div>
          <h3 className={clsx(s.menuSettingsItemHeading)}>Logout</h3>
          <button
            className={clsx(s.menuSettingsItemButton)}
            id="logout-btn"
            onClick={() => {
              dispatch(setLogged(false));
            }}
          >
            <svg width="9" height="9">
              <use href="../img/svg/symbol-defs.svg#icon-down-arrow" />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
