import React, { FC } from 'react';
import s from './product-card-full.module.scss';
import AddToCart from '../add-to-cart/add-to-cart';

type Props = {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

const ProductCardFull: FC<Props> = ({ name, description, price, image, category }) => {
  return (
    <div className={s.card}>
      <img src={image} alt={name} className={s.image} />
      <div className={s.content}>
        <span className={s.category}>{category}</span>
        <h2 className={s.name}>{name}</h2>
        <p className={s.description}>{description}</p>
        <div className={s.footer}>
          <span className={s.price}>${price}</span>
          <AddToCart count={0} />
        </div>
      </div>
    </div>
  );
};

export default ProductCardFull;
