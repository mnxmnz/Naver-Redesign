import { useEffect } from 'react';
import Header from '../components/detail/header/Header';
import Middle from '../components/detail/middle/Middle';
import Footer from '../components/detail/footer/Footer';
import { useSetRecoilState } from 'recoil';
import { sportsDataAtom } from '../states/atom';
import getSportsApi from '../lib/getSportsApi';

function Detail() {
  const setSportsData = useSetRecoilState(sportsDataAtom);

  const getSportsData = async () => {
    const data = await getSportsApi();
    setSportsData(data);
    console.log(data);
  };

  useEffect(() => {
    getSportsData();
  }, []);

  return (
    <>
      <Header />
      <Middle />
      <Footer />
    </>
  );
}

export default Detail;
