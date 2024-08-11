import { TabBtnPrimary } from 'components/tabs/TabBtnPrimary';
import { PopularVideoPage } from './components/PopularVideoPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const MainPage = () => {
  const [popularVideos, setPopularVideos] = useState([]);
  const [videoCategoryId, setVideoCategoryId] = useState([]);
  const [clickedCateId, setClickedCateId] = useState();

  useEffect(() => {
    const data = async () => {
      const res = await axios.get(
        'https://www.googleapis.com/youtube/v3/videos',
        {
          params: {
            part: 'snippet',
            regionCode: 'KR',
            maxResult: 5,
            chart: 'mostPopular',
            key: process.env.REACT_APP_GOOGLE_API_KEY,
            videoCategoryId: clickedCateId && clickedCateId,
          },
        },
      );
      console.log(res.data.items);

      return setPopularVideos(res.data.items);
    };
    data();
  }, [clickedCateId]);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get(
        'https://www.googleapis.com/youtube/v3/videoCategories',
        {
          params: {
            part: 'snippet',
            hl: 'ko',
            // maxResult: 5,
            regionCode: 'KR',
            key: process.env.REACT_APP_GOOGLE_API_KEY,
          },
        },
      );
      console.log(res.data.items, 'cate');

      return setVideoCategoryId(res.data.items);
    };
    data();
    // console.log(data, 'videocate');
  }, []);

  useEffect(() => {
    console.log(videoCategoryId, 'videoCategoryId');
  }, [videoCategoryId]);

  const onClick = (id) => {
    console.log(id);
    setClickedCateId(id);
  };

  return (
    <div className="main__wrapper">
      <div className="main__inner">
        <div className="main__header">
          <TabBtnPrimary
            label={videoCategoryId}
            onClick={onClick}
          />
        </div>
        <section className="main__section">
          <div className="main__video-item-wrap">
            <PopularVideoPage popularVideos={popularVideos} />
          </div>
        </section>
      </div>
    </div>
  );
};
