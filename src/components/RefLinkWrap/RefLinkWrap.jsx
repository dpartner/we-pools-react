import clsx from "clsx";
import s from "./RefLinkWrap.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectToogleInviteLinkWrap } from "../../redux/invite/selectors";
import { toogleRefLinkWrap } from "../../redux/invite/slice";
import { setNotification } from "../../redux/utils/slice";

const RefLinkWrap = () => {
  const isShown = useSelector(selectToogleInviteLinkWrap);
  const dispatch = useDispatch();

  function checkIsBackdrop(e) {
    if (e.target === e.currentTarget) {
      dispatch(toogleRefLinkWrap());
    }
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
    if (touchendY > touchstartY) {
      dispatch(toogleRefLinkWrap());
    }
  }

  async function handleCopyButton() {
    //-------paste here referal link for copy
    let link = "Your ref Link";

    dispatch(
      setNotification({
        message: "Referal link copied",
        isApprove: true,
        shown: true,
      })
    );
    await navigator.clipboard
      .writeText(link)
      .then(() => {})
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }

  return (
    <div
      className={clsx(s.refLinkBackdrop, isShown && s.shown)}
      onClick={checkIsBackdrop}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={clsx(s.refLinkWrap)}>
        <img
          className={clsx(s.refImg)}
          srcSet="../../img/ref-img@1x.png 1x, ../../img/ref-img@2x.png 2x"
          src="../img/ref-img@1x.png"
          alt="invite image"
        />
        <h2 className={clsx(s.refHeading)}>Friendship Bonus</h2>
        <p className={clsx(s.refDesc)}>
          Friends amplify your power! Earn 20% HOT from all your friends income
          - no limits, no boundaries. Let’s go wild!
        </p>
        <button
          className={clsx("primaryButton", s.primaryButtonFl)}
          onClick={handleCopyButton}
        >
          Get referral link
        </button>
      </div>
    </div>
  );
};

export default RefLinkWrap;
