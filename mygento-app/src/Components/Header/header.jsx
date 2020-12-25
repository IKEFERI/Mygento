import React from 'react';
import { title } from './Header.module.sass';

const Header = () => {
  return (
    <header>
      <h1 className={title}>Анкета Соискателя</h1>
    </header>
  );
};
export default Header;
