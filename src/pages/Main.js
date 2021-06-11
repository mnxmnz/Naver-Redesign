import { useEffect } from 'react';
import Header from '../components/main/header/Header';
import Middle from '../components/main/middle/Middle';
import Footer from '../components/main/footer/Footer';
//리코일 변수 set하기 위해 import
import { useSetRecoilState } from 'recoil';
//maindDataAtom에 set할 것이므로 데려오기
import { mainDataAtom } from '../states/atom';
//Api 호출 함수
import getMainApi from '../lib/getMainApi';

function Main() {
  //recoil변수 setter만들기
  const setMainData = useSetRecoilState(mainDataAtom);
  //Api불러오면 setter통해서 recoil변수에 넣기
  const getMainData = async () => {
    const data = await getMainApi();
    setMainData(data);
  };

  //recoil변수에 setter하는 함수는 렌더될 때 한 번 실행
  useEffect(() => {
    getMainData();
  }, []);

  return (
    <>
      <Header />
      <Middle />
      <Footer />
    </>
  );
}

export default Main;
