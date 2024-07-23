'use client'

import React from 'react';
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";

import { NFTProvider } from "../context/NFTContext";
import { Footer, Navbar } from "../components";
import "../styles/globals.css";

import { createWeb3Modal } from '@web3modal/wagmi/react';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config, projectId } from '../utils/config';


// 0. Setup queryClient
const queryClient = new QueryClient()

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  // enableAnalytics: true, // Optional - defaults to your Cloud configuration
//  enableOnramp: true // Optional - false as default
});

const Marketplace = ({ Component, pageProps, children }) => (
  <WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  <NFTProvider>
    <ChakraProvider>
      <ThemeProvider attribute="class">
        <div className="dark:bg-nft-dark bg-white min-h-screen">
          <Navbar />
          <div className="pt-65">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>

        <Script
          src="https://kit.fontawesome.com/d45b25ceeb.js"
          crossorigin="anonymous"
        />
      </ThemeProvider>
    </ChakraProvider>
  </NFTProvider>
   </WagmiProvider>
);

export default Marketplace;
