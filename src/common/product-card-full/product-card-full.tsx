import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
import s from './product-card-full.module.scss';
import AddToCart from '../add-to-cart/add-to-cart';
import { useQuantity } from '../add-to-cart/use-quantity';

type Props = {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  defaultCount?: number;
  actions?: ReactNode | ReactNode[];
  imageProps?: React.ImgHTMLAttributes<HTMLImageElement>;
};

const ProductCardFull: FC<Props> = ({
  name,
  description,
  price,
  image,
  category,
  defaultCount = 0,
  actions,
  imageProps,
}) => {
  const { quantity, setQuantity } = useQuantity({ initial: defaultCount });

  const mergedActions = React.Children.toArray(
    actions ?? [<AddToCart key="add-to-cart" count={quantity} onChange={setQuantity} />]
  );

  return (
    <div className={s.card}>
      <img src={image} alt={name} {...imageProps} className={clsx(s.image, imageProps?.className)} />
      <div className={s.content}>
        <span className={s.category}>{category}</span>
        <h2 className={s.name}>{name}</h2>
        <p className={s.description}>{description}</p>
        <div className={s.footer}>
          <span className={s.price}>${price}</span>
          <div className={s.actions}>{mergedActions}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardFull;
