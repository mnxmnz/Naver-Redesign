import axios from 'axios';

const getSportsApi = async () => {
  try {
    const { data } = await axios.get('http://3.34.3.155:5000/api/videos');
    // console.log(`[SUCCESS] GET Sports data`, data);
    return data.data;
  } catch (e) {
    // console.log(`[Fail] GET Sports data`);
    return null;
  }
};

export default getSportsApi;
