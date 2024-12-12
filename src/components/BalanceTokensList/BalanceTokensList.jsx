import { useSelector } from "react-redux";
import { selectBalanceTokens } from "../../redux/balance/selectors";
import BalanceToken from "../BalanceToken/BalanceToken";


const BalanceTokensList = () => {
  const tokens = useSelector(selectBalanceTokens);

  return (
    <ul>
      {tokens.map(token => {
        return <BalanceToken key={token.id} {...token} />;
      })}
    </ul>
  );
};

export default BalanceTokensList;
