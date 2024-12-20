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

  return (
    <ul className={clsx(s.flList, isShown && s.shown)}>
      {friendList.map((friend) => {
        return <Friend key={friend.id} {...friend} />;
      })}
    </ul>
  );
};

export default FriendList;
