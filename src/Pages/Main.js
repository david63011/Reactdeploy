import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData } from '../Redux/CryptoSlice';
import { useEffect, useState } from 'react';
import search from '../images/search.png';
import { Link } from 'react-router-dom';
import NavBar from '../Components/Navbar';

const Main = () => {
  const dispatch = useDispatch();
  const cryptoData = useSelector((state) => state.crypto);
  useEffect(() => {
    if (cryptoData.length === 0) dispatch(fetchCryptoData());
  });

  const [coinSearch, setCoinsearch] = useState('');

  const searchCoins = cryptoData.filter((coin) =>
    coin.name.toLowerCase().includes(coinSearch.toLowerCase())
  );
  return (
    <div>
      <NavBar />
      <div className="coins">
        <div className="coins-container">
          <div className="inputContainer">
            <img className="img-search" src={search} alt="/"></img>
            <input
              type="text"
              value={coinSearch}
              onChange={(e) => setCoinsearch(e.target.value)}
              className="textInput"
              placeholder="Search"
            />
          </div>
          {searchCoins.map((coin) => (
            <Link to={`/detail/${coin.id}`} key={coin.id} className="coins">
              <div className="coin">
                <img className="img" src={coin.icon} alt="crypto" />
                <h1 className="name">{coin.name}</h1>
                <p className="coin-symbol">{coin.symbol}</p>
                <p className="coin-price">
                  Current Price : $
                  {coin.price > 1
                    ? Math.round(coin.price)
                    : coin.price.toFixed(5)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
