import React from 'react';
import { VideoTitle } from './components/VideoTitle';
import { VideoIntroduce } from './components/VideoIntroduce';
import { CommentHeader } from '../../components/common/CommentHeader';
import { DefaultComment } from 'components/comments/DefaultComment';
import { ReplyComment } from 'components/comments/ReplyComment';
import { VideoItem } from 'pages/search/VideoItem';

export const WatchPage = () => {
  return (
    <div className="watch__wrapper">
      <div className="watch__video-container">
        <div className="video__player-section">{/* 플레이어 자리 */}</div>
        <VideoTitle
          title="개발자가 사용하는 노션 노트 공개 (프로젝트, 목표, 일정 관리)"
          creator="드림코딩"
          subscriber="17.2만"
          likes="7.3천"
        />
        <VideoIntroduce
          views="23만"
          openDate="1년 전"
          videoContents="🎖 https://ntn.so/dreamcoding 노션 무료로 가입해서 사용해 보세요.
          3년 정도 노션을 사용해 오면서 정착한 다양한 노트 작성법 공개합니다. 
          영상속 PLANNING이 마음에 드신 여러분들을 위해 템플릿을 공유해 드립니다:"
          creator="드림코딩"
          subscriber="17.2만"
        />
        <div className="comment__header-section">
          <CommentHeader />
        </div>
        <DefaultComment />
        <ReplyComment />
      </div>
      {/* 우측 영상 목록 */}
      <div className="watch__related-container">
        <div className="watch__related-item">
          <VideoItem size="small" />
        </div>
        <div className="watch__related-item">
          <VideoItem size="small" />
        </div>
      </div>
    </div>
  );
};
