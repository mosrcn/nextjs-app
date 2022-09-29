import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  title: 'Create Next App',
  titleTemplate: 'Next SEO | %s',
  defaultTitle: 'Next SEO',
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://www.url.ie/',
    site_name: 'SiteName',
  },
};

export default SEO;
