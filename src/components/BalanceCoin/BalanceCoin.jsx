import s from './BalanceCoin.module.css';
import clsx from 'clsx';

const BalanceCoin = ({
  name,
  symbolName,
  haveCoins,
  price,
  change,
  total
}) => {
  const changeCalc = parseFloat(change.replace(/,/g, '.'));
    let changeSymbol = '';
    let upOrDownClass = '';
    if (changeCalc > 0) {
      changeSymbol = '+';
      upOrDownClass = 'up';
    }
    if (changeCalc < 0) {
      upOrDownClass = 'down';
    }

  return <li className={clsx(s.tokensListItem)}>
  <div>
    <img src={`../../../public/img/${symbolName}`} width="32" height="32" alt={name} />
  </div>
  <div className={clsx(s.tokensListItemValuesWrap)}>
    <div className={clsx(s.tokensItemHeading)}>
      <h4>{name}</h4>
      <span>{haveCoins}</span>
    </div>
    <div className={clsx(s.tokensItemSummary)}>
      <span className={clsx(s.tokensItemSummaryPrice)}>{price}</span> 
      <span className={clsx(s.tokensItemSummary, s.status, upOrDownClass)}>{changeSymbol}{change}</span> 
      <span className={clsx(s.tokensItemSummarySum)}>$ {total}</span>
    </div>
  </div>
</li>;
};

export default BalanceCoin;
