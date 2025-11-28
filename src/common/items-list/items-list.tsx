import React, { FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { Operation, Product, createRandomOperation, createRandomProduct } from 'src/homeworks/ts1/3_write';
import s from './items-list.module.scss';
import ProductCardPreview from '../product-card-preview/product-card-preview';
import ProductCardFull from '../product-card-full/product-card-full';
import OperationCardPreview from '../operation-card-preview/operation-card-preview';
import OperationCardFull from '../operation-card-full/operation-card-full';
import { Mode } from './items-list-consts';
import { isProductArray, isOperationArray } from './items-list-utils';

type RenderItem = (params: { item: Product | Operation; index: number; mode: Mode }) => ReactNode;

type Props = {
  data: Product[] | Operation[];
  mode: Mode.full | Mode.preview;
  renderItem?: RenderItem;
  emptyState?: ReactNode | (() => ReactNode);
  listProps?: React.HTMLAttributes<HTMLDivElement>;
};

const isProductItem = (item: Product | Operation): item is Product => 'price' in item;
const isOperationItem = (item: Product | Operation): item is Operation => 'amount' in item;

const toProductPreviewProps = (product: Product) => ({
  name: product.name,
  description: product.desc,
  price: product.price,
  image: product.photo,
});

const toProductFullProps = (product: Product) => ({
  ...toProductPreviewProps(product),
  category: product.category.name,
});

const toOperationPreviewProps = (operation: Operation) => ({
  sum: operation.amount,
  categoryName: operation.category.name,
  name: operation.name,
  description: operation.desc,
});

const toOperationFullProps = (operation: Operation) => ({
  ...toOperationPreviewProps(operation),
  date: operation.createdAt,
});

const ItemsList: FC<Props> = ({ data, mode, renderItem, emptyState, listProps }) => {
  const [items, setItems] = useState<(Product | Operation)[]>(data);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const listClassName = useMemo(() => clsx(s.list, listProps?.className), [listProps?.className]);

  const mergedListProps = useMemo(
    () => ({
      ...listProps,
      className: listClassName,
    }),
    [listProps, listClassName]
  );

  const defaultRenderer = useCallback(
    (item: Product | Operation) => {
      if (isProductItem(item)) {
        return mode === Mode.preview ? (
          <ProductCardPreview {...toProductPreviewProps(item)} />
        ) : (
          <ProductCardFull {...toProductFullProps(item)} />
        );
      }
      if (isOperationItem(item)) {
        return mode === Mode.preview ? (
          <OperationCardPreview {...toOperationPreviewProps(item)} />
        ) : (
          <OperationCardFull {...toOperationFullProps(item)} />
        );
      }

      return null;
    },
    [mode]
  );

  const resolvedRenderer = useCallback(
    (item: Product | Operation, index: number) => {
      if (renderItem) {
        return renderItem({ item, index, mode });
      }

      return defaultRenderer(item);
    },
    [defaultRenderer, mode, renderItem]
  );

  const addMoreItems = useCallback(() => {
    setItems((prev) => {
      const createdAt = new Date().toISOString();

      if (isProductArray(prev)) {
        const newItems = Array.from({ length: 10 }, () => createRandomProduct(createdAt));
        return [...prev, ...newItems];
      }

      if (isOperationArray(prev)) {
        const newItems = Array.from({ length: 10 }, () => createRandomOperation(createdAt));
        return [...prev, ...newItems];
      }

      return prev;
    });
  }, []);

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
  }, [addMoreItems]);

  if (!items.length) {
    const resolvedEmpty = typeof emptyState === 'function' ? emptyState() : emptyState;
    return <div className={s.empty}>{resolvedEmpty ?? 'No items to display'}</div>;
  }

  return (
    <>
      <div {...mergedListProps}>
        {items.map((item, index) => {
          const element = resolvedRenderer(item, index);
          const key = 'id' in item ? item.id : `${index}`;

          return <React.Fragment key={key}>{element}</React.Fragment>;
        })}
      </div>
      <div ref={observerRef} style={{ height: '1px' }} aria-hidden />
    </>
  );
};

export default ItemsList;
