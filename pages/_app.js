import '../src/styles/index.scss';

import { Provider, useSelector } from 'react-redux'
import { useStore } from 'src/ultils/store';


function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    </>
  );


}

export default MyApp
