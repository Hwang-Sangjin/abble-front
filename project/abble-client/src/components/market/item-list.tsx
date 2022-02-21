import React from "react";
import '../../pages/scss/market-item-list.scss'

interface Props{
  name:string;
  price: string;
  description: string;
}
const ItemList: React.FC<Props> = ({name, price, description}:Props) => {
  return (
    <div>
        <div className="market-item" >
            <div className='item-image'></div>
            <div className='name-price'>
            <div className='item-name'>{name}</div>
            <div className="item-price">{price}</div>
            </div>
            <div className="item-description">{description}</div>
        </div>
    </div>
  );
}

export default ItemList;
