import s from './AppBar.module.css'
import clsx from 'clsx';

const AppBar = () => {
  return (
    <header className={clsx("section", s.headerSection)}>
        <div className={clsx("container", s.headerContainer)}>
          <div className={clsx(s.headerMenuButtonWrap)}>
            <button className={clsx(s.headerMenuButton)}><span></span></button>
          </div>
          <div>
            <p className={clsx(s.headerUserId)}>#user_<span>id</span></p>
          </div>
          <div className={clsx(s.userIconWrap)}>
            <img src="../../../public/img/svg/user-icon.svg" alt="" />
          </div>
        </div>
    </header>);
};

export default AppBar;
