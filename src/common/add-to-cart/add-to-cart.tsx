import React, { FC } from 'react';
import s from './add-to-cart.module.scss';

type Props = {
  count: number;
};

const AddToCart: FC<Props> = ({ count }) => {
  return (
    <div className={s.wrapper}>
      {count === 0 ? (
        <button className={s.addButton}>Add to Cart</button>
      ) : (
        <div className={s.counterWrapper}>
          <button className={s.counterButton}>-</button>
          <input className={s.input} type="text" value={count} readOnly />
          <button className={s.counterButton}>+</button>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
