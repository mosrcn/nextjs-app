import { DefaultSeo } from 'next-seo';

import { wrapper } from '@/redux/store';
import SEO from '@/config/seo';
import { AppPropsWithLayout } from '@/types';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <DefaultSeo {...SEO} />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default wrapper.withRedux(MyApp);
