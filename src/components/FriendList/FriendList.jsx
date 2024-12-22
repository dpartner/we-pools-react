import { useSelector } from "react-redux";
import s from "./FriendList.module.css";
import clsx from "clsx";
import {
  selectInviteFriendList,
  selectInviteLoadingFriendList,
} from "../../redux/invite/selectors";
import Friend from "../Friend/Friend";
import useDelayedShow from "../../utils/useDelayedShow";

const FriendList = () => {
  const friendList = useSelector(selectInviteFriendList);
  const loading = useSelector(selectInviteLoadingFriendList);
  const isShown = useDelayedShow(!loading, 50);

  if (friendList.length === 0) {
    return <h3 className={s.noFriends}>No Friends yet.</h3>;
  }

  return (
    <>
      {isShown && (
        <ul className={clsx(s.flList, s.shown)}>
          {friendList.map((friend) => {
            return <Friend key={friend.id} {...friend} />;
          })}
        </ul>
      )}
    </>
  );
};

export default FriendList;
