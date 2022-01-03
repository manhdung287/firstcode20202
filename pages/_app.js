import '../src/styles/index.scss';

import { Provider, useSelector } from 'react-redux'
import { useStore } from 'src/ultils/store';
import Layout from 'modules/Layout';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );


}

export default MyApp
