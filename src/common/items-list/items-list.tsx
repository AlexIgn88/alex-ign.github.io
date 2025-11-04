import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Operation, Product, createRandomOperation, createRandomProduct } from 'src/homeworks/ts1/3_write';
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
  const [items, setItems] = useState(data);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const addMoreItems = useCallback(() => {
    const createdAt = new Date().toISOString();

    if (isProductArray(items)) {
      const newItems = Array.from({ length: 3 }, () => createRandomProduct(createdAt));
      setItems((prev) => [...(prev as Product[]), ...newItems]);
    } else if (isOperationArray(items)) {
      const newItems = Array.from({ length: 3 }, () => createRandomOperation(createdAt));
      setItems((prev) => [...(prev as Operation[]), ...newItems]);
    }
  }, [items]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          addMoreItems();
        }
      },
      { threshold: 0.5, rootMargin: '200px' }
    );

    const target = observerRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [addMoreItems, items]);

  if (!items.length) {
    return <div className={s.empty}>No items to display</div>;
  }

  const renderList = () => {
    if (isOperationArray(items)) {
      return (
        <div className={s.list}>
          {items.map(({ id, name, desc, amount, category, createdAt }) =>
            mode === Mode.preview ? (
              <OperationCardPreview key={id} sum={amount} categoryName={category.name} name={name} description={desc} />
            ) : (
              <OperationCardFull
                key={id}
                sum={amount}
                categoryName={category.name}
                name={name}
                date={createdAt}
                description={desc}
              />
            )
          )}
        </div>
      );
    }

    if (isProductArray(items)) {
      return (
        <div className={s.list}>
          {items.map(({ id, name, photo, desc, price, category }) =>
            mode === Mode.preview ? (
              <ProductCardPreview key={id} name={name} description={desc} price={price} image={photo} />
            ) : (
              <ProductCardFull
                key={id}
                name={name}
                description={desc}
                price={price}
                image={photo}
                category={category.name}
              />
            )
          )}
        </div>
      );
    }
  };

  return (
    <>
      {renderList()}
      <div ref={observerRef} style={{ height: '1px' }} />
    </>
  );
};

export default ItemsList;
