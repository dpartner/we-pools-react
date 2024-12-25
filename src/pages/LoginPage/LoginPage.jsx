import { useEffect, useState } from "react";
import s from "./LoginPage.module.css";
import clsx from "clsx";
import { delay } from "../../utils/delay";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogged } from "../../redux/users/slice";

const LoginPage = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loadPage = async () => {
      await delay(50);
      setPageLoaded(true);
    };

    loadPage();
  }, []);

  function handleLogin() {
    dispatch(setLogged(true));
    navigate("/balance");
  }

  return (
    <main>
      <section className={clsx("section", s.sectionWelcome)}>
        <div className={clsx("container", s.containerWelcome)}>
          <h1 className={clsx(s.welcomeHeading)}>We pools</h1>
          {/* <img
            className={clsx(s.welcomeLogo)}
            src="../../../public/img/welcome-logo.svg"
            alt="welcome-logo"
          /> */}
          <div className={clsx(s.imgWrap, pageLoaded && s.shown)}>
            <img
              srcSet="../../../public/img/welcome@1x.png 1x, ../../../public/img/welcome@2x.png 2x"
              src="../../../public/img/welcome@1x.png"
              alt="welcome img"
            />
          </div>
          <div className={clsx(s.welcomeButtonWrap)}>
            <button
              className={clsx("primaryButton", s.primaryButtonWelcome)}
              onClick={handleLogin}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
