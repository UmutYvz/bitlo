import { OrderType } from '../redux/coins/reducer';

export const calculateSums = (coinDetail: any) => {
  const { asks, bids } = coinDetail;
  let totalAsk: any = 0.0;
  let totalBid: any = 0.0;
  asks?.forEach(
    (ask: OrderType) => (totalAsk += parseFloat(ask[0]) * parseFloat(ask[1]))
  );
  bids?.forEach(
    (bid: OrderType) => (totalBid += parseFloat(bid[0]) * parseFloat(bid[1]))
  );
  totalAsk = totalAsk.toFixed(2);
  totalBid = totalBid.toFixed(2);

  return {
    totalAsk,
    totalBid
  };
};
