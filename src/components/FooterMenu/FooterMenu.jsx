import { NavLink, useLocation } from "react-router-dom";
import s from "./FooterMenu.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleHistoryOpen } from "../../redux/balance/slice";
import { selectBalanceHistoryOpen } from "../../redux/balance/selectors";

const FooterMenu = () => {
  const dispatch = useDispatch();
  const historyOpen = useSelector(selectBalanceHistoryOpen);
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "");

  return (
    <footer className={clsx(s.footer)}>
      <section className={clsx("section")}>
        <div className={clsx("container")}>
          <nav>
            <ul className={clsx(s.footerButtonList)}>
              <li
                className={clsx(
                  s.footerButtonItem,
                  currentPath === "balance" && s.active
                )}
              >
                <NavLink
                  to="/balance"
                  className={clsx(s.footerButtonLink, s.closeHistory)}
                  onClick={() => {
                    historyOpen && dispatch(toggleHistoryOpen());
                  }}
                >
                  <svg width="25" height="25">
                    <use href="../../../public/symbol-defs.svg#icon-first-page"></use>
                  </svg>
                </NavLink>
              </li>
              <li
                className={clsx(
                  s.footerButtonItem,
                  currentPath === "daily" && s.active
                )}
              >
                <NavLink to="/daily" className={clsx(s.footerButtonLink)}>
                  <svg width="25" height="25">
                    <use href="../../../public/symbol-defs.svg#icon-second-page"></use>
                  </svg>
                </NavLink>
              </li>
              <li
                className={clsx(
                  s.footerButtonItem,
                  s.center,
                  currentPath === "we-pools" && s.active
                )}
              >
                <NavLink
                  to="/we-pools"
                  className={clsx(s.footerButtonLink, s.center)}
                >
                  <svg width="35" height="35">
                    <use href="../../../../public/symbol-defs.svg#icon-third-page"></use>
                  </svg>
                </NavLink>
              </li>
              <li
                className={clsx(
                  s.footerButtonItem,
                  s.fourth,
                  currentPath === "invite" && s.active
                )}
              >
                <NavLink to="/invite" className={clsx(s.footerButtonLink)}>
                  <svg width="21" height="25">
                    <use href="../../../public/symbol-defs.svg#icon-fourth-page"></use>
                  </svg>
                </NavLink>
              </li>
              <li
                className={clsx(
                  s.footerButtonItem,
                  currentPath === "tasks" && s.active
                )}
              >
                <NavLink to="/tasks" className={clsx(s.footerButtonLink)}>
                  <svg width="25" height="28">
                    <use href="../../../public/symbol-defs.svg#icon-fifth-page"></use>
                  </svg>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </footer>
  );
};

export default FooterMenu;
