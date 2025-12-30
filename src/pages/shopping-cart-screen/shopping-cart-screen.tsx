import React, { FC, useMemo } from 'react';
import { Mode } from 'src/common/items-list/items-list-consts';
import ItemsList from 'src/common/items-list/items-list';
import { useAppSelector } from 'src/store/hooks';
import ProductCardPreview from 'src/common/product-card-preview/product-card-preview';
import { useTranslation } from 'react-i18next';
import s from './shopping-cart-screen.modele.scss';

const ShoppingCartScreen: FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const products = useMemo(() => cartItems.map((item) => item.product), [cartItems]);
  const { t } = useTranslation();

  const renderItem = ({ item }: { item: any }) => {
    return (
      <div className={s.item}>
        <ProductCardPreview product={item} />
      </div>
    );
  };

  if (products.length === 0) {
    return (
      <main>
        <div className={s.empty}>
          <p>{t('screens.cart.empty')}</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <ItemsList data={products} mode={Mode.preview} renderItem={renderItem} />
    </main>
  );
};

export default ShoppingCartScreen;
