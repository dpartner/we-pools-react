import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loaderWrap}>
      <img src="../../../img/svg/loader.png" />
      <p>LOADING</p>
    </div>
  );
};

export default Loader;
