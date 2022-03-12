import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { FC } from 'react';

const withAuth = (Component: FC, redirect = '/login'): FC => {
  const Wrapper = (): JSX.Element => {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      router.replace(redirect);
      return <></>;
    }

    return <Component />;
  };

  return Wrapper;
};

export default withAuth;
