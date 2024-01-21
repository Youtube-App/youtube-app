import { ProfileBtn } from 'components/buttons/ProfileBtn';
import { ChannelIdName } from 'components/common/ChannelIdName';
import { ChannelSubscribeNum } from 'components/common/ChannelSubscribeNum';
import { CommonDesc } from 'components/common/CommonDesc';
import { VideoChannelName } from 'components/common/VideoChannelName';
import { Link } from 'react-router-dom';

export const ChannelInfo = () => {
  return (
    <div className="search__channel-container">
      <ProfileBtn
        isBtn
        size={'xxlarge'}
      />
      <Link className="search__channel-desc">
        <VideoChannelName
          isLink={false}
          videoChannelName={'채널십오야'}
        />
        <div className="search__channel-count">
          <ChannelIdName />
          <ChannelSubscribeNum />
          <CommonDesc
            txt={
              '채널십오야는 다양한 창작자들의 "달나라"가는 꿈같은 콘텐츠들이 업로드 됩니다. 꽉찬 보름달 같은 많은 사랑 부탁 드립니다.'
            }
          />
        </div>
      </Link>
    </div>
  );
};
