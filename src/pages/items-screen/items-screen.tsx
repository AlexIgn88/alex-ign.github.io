import React, { FC } from 'react';
import ItemsList from 'src/common/items-list/items-list';
import { Mode } from 'src/common/items-list/items-list-consts';
import s from './items-screen.module.scss';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import ItemFormModal from 'src/common/item-form-modal/item-form-modal';
import { AdminActionType } from 'src/features/forms/product-operation-form/product-operation-form-consts';
import { useAppSelector } from 'src/store/hooks';
import AdminRoute from 'src/app/admin-route';

const ItemsScreen: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isProducts = pathname.includes('/products');
  const products = useAppSelector((state) => state.items.products);
  const operations = useAppSelector((state) => state.items.operations);
  const items = isProducts ? products : operations;
  const profile = useAppSelector((state) => state.profile.profile);
  const isAdmin = profile?.role === 'admin';

  const [searchParams, setSearchParams] = useSearchParams();

  const modal = searchParams.get('modal');
  const id = searchParams.get('id');

  const isCreate = modal === 'create';
  const isEdit = modal === 'edit' && Boolean(id);
  const itemFormModalMode = isCreate
    ? isProducts
      ? AdminActionType.CreateProduct
      : AdminActionType.CreateOperation
    : isProducts
    ? AdminActionType.EditProduct
    : AdminActionType.EditOperation;

  return (
    <main>
      {isAdmin && (
        <div className={s.controlPanel}>
          <button className={s.controlButton} onClick={() => navigate(`${pathname}?modal=create`)}>
            {t('screens.items.buttons.create')}
          </button>
        </div>
      )}

      {items && <ItemsList data={items} mode={Mode.full} />}
      {(isCreate || isEdit) && (
        <AdminRoute>
          <ItemFormModal mode={itemFormModalMode} itemId={id} onClose={() => setSearchParams({})} />
        </AdminRoute>
      )}
    </main>
  );
};

export default ItemsScreen;
