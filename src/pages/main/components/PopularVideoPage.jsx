import { VideoItem } from './VideoItem';

export const PopularVideoPage = ({ popularVideos }) => {
  // useEffect(() => {
  //   console.log(popularVideos);
  // }, [popularVideos]);

  return popularVideos.map((item, index) => {
    return (
      <VideoItem
        videos={item}
        key={index}
      />
    );
  });
};
