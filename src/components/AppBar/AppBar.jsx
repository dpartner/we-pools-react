import { useDispatch, useSelector } from "react-redux";
import s from "./AppBar.module.css";
import clsx from "clsx";
import { selectUser } from "../../redux/users/selectors";
import { menuToggle } from "../../redux/users/slice";

const AppBar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  function handleMenuOpen() {
    dispatch(menuToggle());
  }

  return (
    <header className={clsx("section", s.headerSection)}>
      <div className={clsx("container", s.headerContainer)}>
        <div className={clsx(s.headerMenuButtonWrap)}>
          <button className={clsx(s.headerMenuButton)} onClick={handleMenuOpen}>
            <span></span>
          </button>
        </div>
        <div>
          <p className={clsx(s.headerUserId)}>
            #user_<span>{user.id}</span>
          </p>
        </div>
        <div className={clsx(s.userIconWrap)}>
          {user.photoUrl ? (
            <img
              className={s.hasPicture}
              src={`../../../public/${user.photoUrl}`}
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

export default AppBar;
