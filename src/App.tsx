import React from 'react';

import './App.css';
import { Navbar } from 'layouts/Navbar';
import { Content } from 'layouts/Content';

export const App = () => {

  return (
    <div className="mx-auto bg-custom max-w-7xl">
      <Navbar />
      <Content />
    </div>
  );
}
