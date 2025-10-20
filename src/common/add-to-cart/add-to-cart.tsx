import React, { FC } from 'react';
import s from './add-to-cart.module.scss';

type Props = {
  count: number;
};

const AddToCart: FC<Props> = ({ count }) => {
  if (count === 0) {
    return (
      <div className={s.wrapper}>
        <button className={s.addButton}>Add to Cart</button>
      </div>
    );
  }
  return (
    <div className={s.wrapper}>
      <div className={s.counterWrapper}>
        <button className={s.counterButton}>-</button>
        <input className={s.input} type="text" value={count} readOnly aria-label="Quantity in cart" />
        <button className={s.counterButton}>+</button>
      </div>
    </div>
  );
};

export default AddToCart;
