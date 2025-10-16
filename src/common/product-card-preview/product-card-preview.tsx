import React, { FC } from 'react';
import s from './product-card-preview.module.scss';
import AddToCart from '../add-to-cart/add-to-cart';

type Props = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductCardPreview: FC<Props> = ({ name, description, price, image }) => {
  return (
    <div className={s.card}>
      <img src={image} alt={name} className={s.image} />
      <div className={s.content}>
        <h3 className={s.name}>{name}</h3>
        <p className={s.description}>{description}</p>
        <div className={s.footer}>
          <span className={s.price}>${price}</span>
          <AddToCart count={0} />
        </div>
      </div>
    </div>
  );
};

export default ProductCardPreview;
