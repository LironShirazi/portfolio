/* eslint-disable react/prop-types */
import '@/styles/globals.css'
import React from 'react';
import Header from '../components/Header/Header';

export default function App({ Component, pageProps }) {
  return (
     <><Header /><Component {...pageProps} /></>
    );
}