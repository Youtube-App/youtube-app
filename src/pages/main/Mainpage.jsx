import { TabBtnPrimary } from 'components/tabs/TabBtnPrimary';
// import { VideoItem } from './components/VideoItem';

export const MainPage = () => {
  return (
    <div className="main__wrapper">
      <div className="main__inner">
        <div className="main__header">
          <TabBtnPrimary />
        </div>
        <section className="main__section">
          <div className="main__video-item-wrap">
            {/* <VideoItem /> */}
            <div className="test">dfdv</div>
          </div>
        </section>
      </div>
    </div>
  );
};
