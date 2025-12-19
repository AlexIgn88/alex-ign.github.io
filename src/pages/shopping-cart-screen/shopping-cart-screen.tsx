import React, { FC } from 'react';
import { Mode } from 'src/common/items-list/items-list-consts';
import ItemsList from 'src/common/items-list/items-list';
import { products } from 'src/common/items-list/items-list-utils';

const ShoppingCartScreen: FC = () => {
  return (
    <main>
      <ItemsList data={products} mode={Mode.preview} />
    </main>
  );
};

export default ShoppingCartScreen;
