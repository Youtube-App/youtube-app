import { useEffect, useState } from 'react';
import { VideoItem } from './VideoItem';
import axios from 'axios';

export const PopularVideoPage = () => {
  const [popularVideos, setPopularVideos] = useState([]);

  useEffect(() => {
    const data = async () => {
      const res = axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet',
          regionCode: 'KR',
          maxResult: 5,
          chart: 'mostPopular',
          key: process.env.REACT_APP_GOOGLE_API_KEY,
        },
      });
      console.log(res.data);

      return setPopularVideos(res.data);
    };
    data();
  }, []);
  return popularVideos.items.map((item, index) => {
    return (
      <VideoItem
        videos={item}
        key={index}
      />
    );
  });
};
