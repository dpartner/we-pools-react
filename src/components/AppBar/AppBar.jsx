import { useDispatch, useSelector } from "react-redux";
import s from "./AppBar.module.css";
import clsx from "clsx";
import { selectMenuToggle, selectUser } from "../../redux/users/selectors";
import { menuToggle } from "../../redux/users/slice";
import React, { useMemo } from "react";

const AppBar = () => {
  const user = useSelector(selectUser);
  const menuIsOpen = useSelector(selectMenuToggle);
  const dispatch = useDispatch();

  const userId = useMemo(() => {
    return user.id;
  }, [user.id]);

  const userPhoto = useMemo(() => {
    return user.photoUrl;
  }, [user.photoUrl]);

  function handleMenuOpen() {
    dispatch(menuToggle());
  }

  return (
    <header className={clsx("section", s.headerSection)}>
      <div className={clsx("container", s.headerContainer)}>
        <div className={clsx(s.headerMenuButtonWrap)}>
          <button
            className={clsx(s.headerMenuButton, menuIsOpen && s.active)}
            onClick={handleMenuOpen}
          >
            <span></span>
          </button>
        </div>
        <div>
          <p className={clsx(s.headerUserId)}>
            #user_<span>{userId}</span>
          </p>
        </div>
        <div className={clsx(s.userIconWrap)}>
          {userPhoto ? (
            <img
              className={s.hasPicture}
              src={`../../../public/${userPhoto}`}
              alt=""
            />
          ) : (
            <img src="../../../public/img/svg/user-icon.svg" alt="" />
          )}
        </div>
      </div>
    </header>
  );
};

export default React.memo(AppBar);
