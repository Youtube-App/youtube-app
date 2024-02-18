import { TabBtnPrimary } from 'components/tabs/TabBtnPrimary';
import { PopularVideoPage } from './components/PopularVideoPage';

export const MainPage = () => {
  return (
    <div className="main__wrapper">
      <div className="main__inner">
        <div className="main__header">
          <TabBtnPrimary />
        </div>
        <section className="main__section">
          <div className="main__video-item-wrap">
            <PopularVideoPage />
          </div>
        </section>
      </div>
    </div>
  );
};
