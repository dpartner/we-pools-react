import { useSelector } from "react-redux";
import { selectBalanceCoins } from "../../redux/balance/selectors";
import BalanceCoin from "../BalanceCoin/BalanceCoin";


const BalanceCoinsList = () => {
  const coins = useSelector(selectBalanceCoins);

  return (
    <ul>
      {coins.map(coin => {
        return <BalanceCoin key={coin.id} {...coin} />;
      })}
    </ul>
  );
};

export default BalanceCoinsList;
