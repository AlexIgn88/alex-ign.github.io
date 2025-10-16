import React, { FC } from 'react';
import s from './delete-product.module.scss';

const DeleteProduct: FC = () => {
  return (
    <div className={s.wrapper}>
      <button className={s.deleteButton}>Delete</button>
    </div>
  );
};

export default DeleteProduct;
