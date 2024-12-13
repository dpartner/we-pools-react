import { useDispatch } from "react-redux";
import s from "./AppBar.module.css";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { addHeaderHeight } from "../../redux/daily/slice";

const AppBar = () => {
  const dispatch = useDispatch();
  const headerRef = useRef();

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight =
        headerRef.current.getBoundingClientRect().bottom -
        headerRef.current.getBoundingClientRect().top;
      dispatch(addHeaderHeight(headerHeight));
    }
  });

  return (
    <header className={clsx("section", s.headerSection)} ref={headerRef}>
      <div className={clsx("container", s.headerContainer)}>
        <div className={clsx(s.headerMenuButtonWrap)}>
          <button className={clsx(s.headerMenuButton)}>
            <span></span>
          </button>
        </div>
        <div>
          <p className={clsx(s.headerUserId)}>
            #user_<span>id</span>
          </p>
        </div>
        <div className={clsx(s.userIconWrap)}>
          <img src="../../../public/img/svg/user-icon.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
