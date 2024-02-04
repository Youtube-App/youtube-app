import { BtnRoundGhost } from 'components/buttons/BtnRoundGhost';
import { TabBtnPrimary } from 'components/tabs/TabBtnPrimary';
import { IoFilterOutline } from 'react-icons/io5';
import { ChannelInfo } from './components/ChannelInfo';
import { VideoItem } from 'components/common/VideoItem';
import { SearchViewMore } from 'components/buttons/SearchViewMore';

export const SearchPage = () => {
  return (
    <div className="search__wrapper">
      <div className="search__inner">
        <div className="search__header">
          <TabBtnPrimary />
          <BtnRoundGhost
            icon={<IoFilterOutline />}
            label={'필터'}
          />
        </div>
        <section className="search__section">
          <ChannelInfo />
        </section>
        <section className="search__section">
          <div className="search__video-wrap">
            <VideoItem />
            <VideoItem />
          </div>
          <SearchViewMore />
        </section>
      </div>
    </div>
  );
};
