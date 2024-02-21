import "@rainbow-me/rainbowkit/styles.css";
import "@/styles/globals.css";

import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";

import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "Blue DAO",
  projectId: "d0498ff2586b608134fff78687835ea2",

  chains: [sepolia],

  ssr: true,
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;

// import '../styles/global.css';
// import '@rainbow-me/rainbowkit/styles.css';
// import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// //import { config } from "./config";
// import { sepolia } from "wagmi/chains";
// import { WagmiProvider, http } from "wagmi";

// const config = getDefaultConfig({
//   appName: "Blue DAO",
//   projectId: "d0498ff2586b608134fff78687835ea2",
//   chains: [sepolia],
//   transports: {
//     [sepolia.id]: http(),
//   },
// });

// // const { connectors } = getDefaultWallets({
// // appName: "Blue DAO",
// //   projectId: "d0498ff2586b608134fff78687835ea2",
// //   chains,
// // });

// //const wagmiprovider = createprovider({
// //autoConnect: true,
// //connectors,
// //publicClient,
// //});

// const queryClient = new QueryClient();

// const App = ({ Component, pageProps }) => {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <RainbowKitProvider>
//           <Component {...pageProps} />
//         </RainbowKitProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// };
