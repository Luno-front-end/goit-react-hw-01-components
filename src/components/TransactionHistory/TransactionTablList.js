import React from 'react';

import s from './TransactionHistory.module.css'

export default function TransactionTablList({ type, amount, currency }) {
  return (
    <tr>
      <td className={s.type}>{type}</td>
      <td className={s.amount}>{amount}</td>
      <td className={s.currency}>{currency}</td>
    </tr>
  );
}
