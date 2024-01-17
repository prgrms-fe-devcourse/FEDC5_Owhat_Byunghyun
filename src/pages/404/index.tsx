import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import useLayout from '~/common/hooks/useLayout';

const NotFoundPage = () => {
  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: 'Not Found!',
      left: <ArrowBackButton />,
      right: null,
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-primary">404</h1>
      <p>길을 잃어버렸다!</p>
      <Link to="/" className="mt-5 underline">
        홈으로 돌아가기
      </Link>
    </section>
  );
};

export default NotFoundPage;
