import React, { FC } from 'react';
import s from './operation-card-full.module.scss';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: string;
  sum: number;
  categoryName: string;
  name: string;
  description: string;
  date: string;
};

const OperationCardFull: FC<Props> = ({ id, sum, categoryName, name, date, description }) => {
  const navigate = useNavigate();

  return (
    <div className={s.card}>
      <div className={s.categoryName}>{categoryName}</div>
      <div className={s.name}>{name}</div>
      <div className={s.sum}>${sum}</div>
      <div className={s.date}>{date}</div>
      <div className={s.description}>{description}</div>
      <button onClick={() => navigate(`/operations?modal=edit&id=${id}`)}>Edit</button>
    </div>
  );
};

export default OperationCardFull;
