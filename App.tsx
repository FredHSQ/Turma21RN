import React from 'react';
import { Routes } from './src/routes';
import { CartProvider } from './src/context/CartContext';

export default function App () {
  return <CartProvider>
      <Routes/>
    </CartProvider>
}
