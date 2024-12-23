import { useDispatch, useSelector } from "react-redux";
import s from "./Inviter.module.css";
import clsx from "clsx";
import { selectInviterToggle } from "../../redux/users/selectors";
import { setInviter } from "../../redux/users/slice";
import useDelayedShow from "../../utils/useDelayedShow";
import { useRef, useState } from "react";

const Inviter = () => {
  const inviterIsOpen = useSelector(selectInviterToggle);
  const isShown = useDelayedShow(inviterIsOpen, 50);
  const dispatch = useDispatch();

  function handleCloseInviter() {
    dispatch(setInviter(false));
  }

  function checkIsBackdrop(e) {
    if (e.target === e.currentTarget) handleCloseInviter();
  }
  let touchstartY = 0;
  let touchendY = 0;
  function handleTouchStart(e) {
    touchstartY = e.changedTouches[0].screenY;
  }
  function handleTouchEnd(e) {
    touchendY = e.changedTouches[0].screenY;
    checkDirection();
  }
  function checkDirection() {
    // if (touchendY < touchstartY) alert('swiped up!');
    if (touchendY > touchstartY) handleCloseInviter();
  }

  const notifRef = useRef();
  const [failNotif, setFailNotif] = useState(false);
  const [notifShown, setNotifShown] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (e.target.elements.inputLink.value.trim() !== "") {
      setFailNotif(false);
      setNotifShown(true);
      e.target.elements.inputLink.value = "";
      setTimeout(() => {
        handleCloseInviter();
      }, 2000);
    } else {
      setFailNotif(true);
      setNotifShown(true);
    }
    e.target.reset();

    setTimeout(() => {
      setNotifShown(false);
    }, 3000);
  }

  return (
    <>
      {
        <div
          className={clsx(s.invLinkBackdrop, isShown && s.shown)}
          onClick={checkIsBackdrop}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={s.invLinkWrap}>
            <h2 className={s.invHeading}>Recover Inviter</h2>
            <p className={s.invDesc}>
              You can link the account that invited you if this did not happen
              automatically.
            </p>
            <form className={s.invForm} onSubmit={handleFormSubmit}>
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
          <p
            ref={notifRef}
            className={clsx(
              s.invNotification,
              failNotif && s.fail,
              notifShown && s.shown
            )}
          >
            {failNotif ? "Empty value" : "Recover Done!"}
          </p>
        </div>
      }
    </>
  );
};

export default Inviter;
