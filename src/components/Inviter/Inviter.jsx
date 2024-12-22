import s from "./Inviter.module.css";
import clsx from "clsx";

const Inviter = () => {
  return (
    <div className={clsx(s.invLinkBackdrop, s.shown)}>
      <div className={s.invLinkWrap}>
        <h2 className={s.invHeading}>Recover Inviter</h2>
        <p className={s.invDesc}>
          You can link the account that invited you if this did not happen
          automatically.
        </p>
        <form className={s.invForm} action="">
          <input className={s.invInput} type="text" name="inputLink" />
          <button
            type="submit"
            className={clsx("primaryButton", s.primaryButtonInv)}
            data-action={s.bindInviter}
          >
            Bind Inviter
          </button>
        </form>
      </div>
      <p className={s.invNotification}>Recover Done!</p>
    </div>
  );
};

export default Inviter;
