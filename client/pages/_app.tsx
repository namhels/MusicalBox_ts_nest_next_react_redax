import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "../store";

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);

// import { FC } from "react";
// import { Provider } from "react-redux";
// import type { AppProps } from "next/app";
// import { wrapper } from "../store";
// import { CacheProvider } from "@emotion/react";

// const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
//   const { store, props } = wrapper.useWrappedStore(rest);
//   const { emotionCache = clientSideEmotionCache, pageProps } = props;
//   return (
//     <Provider store={store}>
//       <CacheProvider value={emotionCache}>
//         ...
//         <Component {...pageProps} />
//         ...
//       </CacheProvider>
//     </Provider>
//   );
// };

// export default MyApp;

