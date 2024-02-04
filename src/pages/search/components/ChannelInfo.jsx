import { ProfileBtn } from 'components/buttons/ProfileBtn';
import { SubscriptionBtn } from 'components/buttons/SubscriptionBtn';
import { ChannelIdName } from 'components/common/ChannelIdName';
import { ChannelSubscribeNum } from 'components/common/ChannelSubscribeNum';
import { CommonDesc } from 'components/common/CommonDesc';
import { VideoChannelName } from 'components/common/VideoChannelName';
import { Link } from 'react-router-dom';

export const ChannelInfo = () => {
  return (
    <div className="search__channel-container">
      <div className="search__profile-btn-wrap">
        <ProfileBtn
          isBtn
          size={'xxlarge'}
        />
      </div>
      <div className="search__channel-info">
        <Link className="search__channel-desc">
          <VideoChannelName
            isLink={false}
            videoChannelName={'채널십오야'}
            channelId={'dfd'}
          />
          <div className="search__channel-count">
            <ChannelIdName />
            <ChannelSubscribeNum />
          </div>
          <CommonDesc
            txt={
              '채널십오야는 다양한 창작자들의 "달나라"가는 꿈같은 콘텐츠들이 업로드 됩니다. 꽉찬 보름달 같은 많은 사랑 부탁 드립니다.'
            }
          />
        </Link>
        <SubscriptionBtn />
      </div>
    </div>
  );
};
