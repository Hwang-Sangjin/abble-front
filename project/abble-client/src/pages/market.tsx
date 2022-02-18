import React from 'react'
import './scss/market.scss'

const MarketPage = () => {
  return (
    <div>
      <div className="market-header">
        <div className="market-name">Market</div>
        <button className='search-btn'>Search</button>
        <button className='mint-btn'>Mint</button>
      </div>
      <div className="market-line">
        <div className="nft-line">NFT 라인</div>
        <div className="item-line">Item 라인</div>
        <div className="tile-line">Tile 라인</div>
      </div>
    </div>
  )
}

export default MarketPage