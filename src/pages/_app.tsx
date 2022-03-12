import { wrapper } from '@/redux/store';
import { DefaultSeo } from 'next-seo';
import SEO from '@/config/seo';
import { AuthProvider } from '@/contexts/AuthContext';
import { AppPropsWithLayout } from '@/types';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <DefaultSeo {...SEO} />
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
