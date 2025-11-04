import React, { FC } from 'react';
import { Operation, Product } from 'src/homeworks/ts1/3_write';
import s from './items-list.module.scss';
import ProductCardPreview from '../../common/product-card-preview/product-card-preview';
import { isOperationArray, isProductArray } from './items-list-utils';
import OperationCardPreview from '../../common/operation-card-preview/operation-card-preview';
import ProductCardFull from '../../common/product-card-full/product-card-full';
import OperationCardFull from '../../common/operation-card-full/operation-card-full';
import { Mode } from 'src/common/items-list/items-list-consts';

type Props = {
  data: Product[] | Operation[];
  mode: Mode.full | Mode.preview;
};

const ItemsList: FC<Props> = ({ data, mode }) => {
  if (!data.length) {
    return <div className={s.empty}>No items to display</div>;
  }

  if (isOperationArray(data)) {
    if (mode === Mode.preview) {
      return (
        <div className={s.list}>
          {data.map(({ id, name, desc, amount, category }) => (
            <OperationCardPreview key={id} sum={amount} categoryName={category.name} name={name} description={desc} />
          ))}
        </div>
      );
    }
    if (mode === Mode.full) {
      return (
        <div className={s.list}>
          {data.map(({ id, name, desc, createdAt, amount, category }) => (
            <OperationCardFull
              key={id}
              sum={amount}
              categoryName={category.name}
              name={name}
              date={createdAt}
              description={desc}
            />
          ))}
        </div>
      );
    }
  }

  if (isProductArray(data)) {
    if (mode === Mode.preview) {
      return (
        <div className={s.list}>
          {data.map(({ id, name, photo, desc, price }) => (
            <ProductCardPreview key={id} name={name} description={desc} price={price} image={photo} />
          ))}
        </div>
      );
    }
    if (mode === Mode.full) {
      return (
        <div className={s.list}>
          {data.map(({ id, name, photo, desc, price, category }) => (
            <ProductCardFull
              key={id}
              name={name}
              description={desc}
              price={price}
              image={photo}
              category={category.name}
            />
          ))}
        </div>
      );
    }
  }
};

export default ItemsList;
