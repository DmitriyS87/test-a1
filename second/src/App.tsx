import React from 'react';
import styles from './App.module.scss';
import { SelectDropdown } from './shared/ui/Select/Select';

const menuItems = [
  {
    id: 'account',
    value: 'Account',
  },
  {
    id: 'wallet',
    value: 'Wallet',
  },
  {
    id: 'bounces',
    value: 'Bonuses',
  },
  {
    id: 'bets',
    value: 'Bets',
  },
  {
    id: 'history',
    value: 'History',
  },
];

function App() {
  return (
    <div className={styles.container}>
      <SelectDropdown items={menuItems} defaultValue="account" />
    </div>
  );
}

export default App;
