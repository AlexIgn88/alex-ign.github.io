import React, { FC } from 'react';
import s from './operation-card-full.module.scss';

type Props = {
  sum: number;
  categoryName: string;
  name: string;
  description: string;
  date: string;
};

const OperationCardFull: FC<Props> = ({ sum, categoryName, name, date, description }) => {
  return (
    <div className={s.card}>
      <div className={s.categoryName}>{categoryName}</div>
      <div className={s.name}>{name}</div>
      <div className={s.sum}>${sum}</div>
      <div className={s.date}>{date}</div>
      <div className={s.description}>{description}</div>
      <button>Edit</button>
    </div>
  );
};

export default OperationCardFull;
