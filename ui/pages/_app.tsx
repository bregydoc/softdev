// import App from "next/app";
import { ChakraProvider } from "@chakra-ui/core";
import type { AppProps /*, AppContext */ } from "next/app";

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default CustomApp;
