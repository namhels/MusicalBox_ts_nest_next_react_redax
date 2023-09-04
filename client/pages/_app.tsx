import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "../store";

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);

// import React from 'react';
// import {wrapper} from '../store';
// import {AppProps} from 'next/app';

// class MyApp extends React.Component<AppProps> {
//   render() {
//     const {Component, pageProps} = this.props;
//     return <Component {...pageProps} />;
//   }
// }

// export default wrapper.withRedux(MyApp);


