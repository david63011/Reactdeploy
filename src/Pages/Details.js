import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../Redux/DetailSlice';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import back2 from '../images/back2.png';
const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const crcdetail = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchDetail(id));
  });
  return (
    <div className="big">
      <h1 className="dheader">The Crypto Market</h1>
      <div className="detailcontainer">
        <img
          onClick={() => navigate(-1)}
          className="img-money"
          src={back2}
          alt="/"
        ></img>
        <div className="imageheader">
          <h1 className="detailname">{crcdetail.name}</h1>
          <img className="detailimg" src={crcdetail.icon} alt="crypto" />
        </div>
        <div className="detailList">
          <ul>
            <li>Ranking: {crcdetail.rank}</li>
            <li>The Current Price $: {crcdetail.price}</li>
            <li>Market Cap: {crcdetail.marketCap}</li>
            <li>Volume: {crcdetail.volume}</li>
            <li>Total Supply: {crcdetail.totalSupply}</li>
            <li>Available Supply: {crcdetail.availableSupply}</li>
            <li>1 day price change: {crcdetail.priceChange1d}</li>
            <li>1 week price change: {crcdetail.priceChange1w}</li>
          </ul>
        </div>
      </div>
      ;
    </div>
  );
};

export default Details;
