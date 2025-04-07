// "use client";
// import { ChakraProvider } from "@chakra-ui/react";
// export function Providers({ children }: { children: React.ReactNode }) {
//   return <ChakraProvider>{children}</ChakraProvider>;
// }
"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import { CacheProvider } from "@chakra-ui/next-js";

const theme = extendTheme({
  // Your theme customization here
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <CacheProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
    // </CacheProvider>
  );
}
