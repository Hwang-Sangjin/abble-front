import React from 'react'
import ItemList from '../components/market/item-list'

import './scss/market.scss'

const NFTItemList = [
  {image: 'A.src',name: 'A',price: 'A.price',description: 'A.description'},
  {image: 'B.src',name: 'B',price: 'B.price',description: 'B.description'},
  {image: 'C.src',name: 'C',price: 'C.price',description: 'C.description'},
  {image: 'D.src',name: 'D',price: 'D.price',description: 'D.description'},
  {image: 'E.src',name: 'E',price: 'E.price',description: 'E.description'},
  {image: 'F.src',name: 'F',price: 'F.price',description: 'F.description'},
  {image: 'G.src',name: 'G',price: 'G.price',description: 'G.description'},
  {image: 'G.src',name: 'G',price: 'G.price',description: 'G.description'},
  {image: 'G.src',name: 'G',price: 'G.price',description: 'G.description'},
]

const MarketPage = () => {
  return (
    <div className='market-container'>
      <div className="market-header">
        <div className="market-name">Market</div>
        <div className="btn-container">
          <button className='search-btn'>Search</button>
          <button className='mint-btn'>Mint</button>
        </div>
      </div>
      <div className="market-line">
        <h1>NFT 라인</h1>
        <div className="nft-line">
          {NFTItemList.map(item => {
            return (
            <div className='nft-item-list'>
              <ItemList name={item.name} price={item.price} description={item.description}></ItemList>
            </div>

            )
          })}
        </div>
        
        
        <h1>Item 라인</h1>
        <div className="nft-line">
          {NFTItemList.map(item => {
            return (
            <div className='nft-item-list'>
              <ItemList name={item.name} price={item.price} description={item.description}></ItemList>
            </div>

            )
          })}
        </div>

        <h1>Tile 라인</h1>
        <div className="nft-line">
          {NFTItemList.map(item => {
            return (
            <div className='nft-item-list'>
              <ItemList name={item.name} price={item.price} description={item.description}></ItemList>
            </div>

            )
          })}
        </div>

        
      </div>
    </div>
  )
}

export default MarketPage
