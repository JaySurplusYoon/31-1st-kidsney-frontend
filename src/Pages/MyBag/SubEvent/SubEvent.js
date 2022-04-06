import React, { useState, useEffect } from 'react';
import Button from '../../../Components/Button/Button';
import { BASE_URL, Token } from '../../../config';
import './SubEvent.scss';

const SubEvent = ({ slideCount }) => {
  const [eventProducts, setEventProducts] = useState([]);
  const [wishListIdx, setWishListIdx] = useState([]);
  const [isAddedWishList, setIsAddedWishList] = useState(false);

  const getData = async () => {
    const data = await (await fetch(`${BASE_URL}/products?main=toy`)).json();

    setEventProducts(data.result);
  };

  useEffect(() => getData(), []);

  const getWishList = () => {
    fetch(`${BASE_URL}/users/wishlist`, {
      headers: {
        Authorization: Token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setWishListIdx(data.wish_list.map(list => list.id));
      })
      .catch(error => console.error(error.message));
  };

  useEffect(getWishList, []);

  const addToWishList = () => {
    fetch(`${BASE_URL}/users/wishlist?product-id=${id}`, {
      method: 'POST',
      headers: {
        Authorization: Token,
      },
      body: JSON.stringify({ id: id }),
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsAddedWishList(data.message === 'ADDED');
        // if (data.message === 'ADDED') {
        //   showWishList();
        // }
      })
      .catch(error => console.error(error.message));
  };

  return (
    <div className="subEvent">
      {eventProducts.map(product => {
        const { id, name, price, images } = product;
        return (
          <div
            key={id}
            className="eventCard"
            style={{ transform: `translateX(${580 * slideCount}px) ` }}
          >
            <img src={images[0]} alt="thumbnail" />
            <div className="description">
              <h2>
                ${price / 2} {name}
              </h2>
              <p>50% SALE (04.07~)</p>
              <Button text="♡ Add to WishList" functionType={addToWishList} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubEvent;
