import axios from 'axios';

const getMainApi = async () => {
  try {
    const { data } = await axios.get('http://3.34.3.155:5000/api/main');
    // console.log(`[SUCCESS] GET Main data`, data);
    return data.data;
  } catch (e) {
    // console.log(`[Fail] GET Main data`);
    return null;
  }
};

export default getMainApi;
