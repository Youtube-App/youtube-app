import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { BtnRoundSquareGhostActive } from 'components/buttons/BtnRoundSquareGhostActive';
import { RiArrowRightSLine } from 'react-icons/ri';
import { GoHome } from 'react-icons/go';
import { GoHomeFill } from 'react-icons/go';
import { BsFileEarmarkPlay } from 'react-icons/bs';
import { BsFileEarmarkPlayFill } from 'react-icons/bs';
import { BsCollectionPlay } from 'react-icons/bs';
import { BsCollectionPlayFill } from 'react-icons/bs';
import { PiUserSquare } from 'react-icons/pi';
import { PiUserSquareFill } from 'react-icons/pi';
import { PiClockCounterClockwise } from 'react-icons/pi';
import { PiClockCounterClockwiseBold } from 'react-icons/pi';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { AiFillPlaySquare } from 'react-icons/ai';
import { IoTimeOutline } from 'react-icons/io5';
import { IoTimeSharp } from 'react-icons/io5';
import { PiThumbsUp } from 'react-icons/pi';
import { PiThumbsUpFill } from 'react-icons/pi';
import { PiFireSimple } from 'react-icons/pi';
import { PiFireSimpleFill } from 'react-icons/pi';
import { PiShoppingBagOpenDuotone } from 'react-icons/pi';
import { PiShoppingBagOpenFill } from 'react-icons/pi';
import { IoMusicalNotesOutline } from 'react-icons/io5';
import { IoMusicalNotesSharp } from 'react-icons/io5';
import { ProfileBtn } from 'components/buttons/ProfileBtn';
import profileImg from 'images/ex-img-profile.jpeg';
import cn from 'classnames';

export const LayoutLnbPopup = () => {
  const [isActive, setIsActive] = useState(false);

  const basicMenu = [
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: '홈',
      link: '/',
    },
    {
      icon: <BsFileEarmarkPlay />,
      activeIcon: <BsFileEarmarkPlayFill />,
      label: 'Shorts',
      link: '/',
    },
    {
      icon: <BsCollectionPlay />,
      activeIcon: <BsCollectionPlayFill />,
      label: '구독',
      link: '/',
    },
  ];

  const myMenu = [
    {
      icon: <PiUserSquare />,
      activeIcon: <PiUserSquareFill />,
      label: '내 채널',
      link: '/',
    },
    {
      icon: <PiClockCounterClockwise />,
      activeIcon: <PiClockCounterClockwiseBold />,
      label: '시청 기록',
      link: '/',
    },
    {
      icon: <AiOutlinePlaySquare />,
      activeIcon: <AiFillPlaySquare />,
      label: '내 동영상',
      link: '/',
    },
    {
      icon: <IoTimeOutline />,
      activeIcon: <IoTimeSharp />,
      label: '나중에 볼 동영상',
      link: '/',
    },
    {
      icon: <PiThumbsUp />,
      activeIcon: <PiThumbsUpFill />,
      label: '좋아요 표시한 동영상',
      link: '/',
    },
  ];

  const subscribeMenu = [
    {
      icon: (
        <ProfileBtn
          src={profileImg}
          size={'small'}
        />
      ),
      activeIcon: (
        <ProfileBtn
          src={profileImg}
          size={'small'}
        />
      ),
      label: 'haha ha',
      link: '/',
    },
    {
      icon: (
        <ProfileBtn
          src={profileImg}
          size={'small'}
        />
      ),
      activeIcon: (
        <ProfileBtn
          src={profileImg}
          size={'small'}
        />
      ),
      label: '생활코딩',
      link: '/',
    },
    {
      icon: (
        <ProfileBtn
          src={profileImg}
          size={'small'}
        />
      ),
      activeIcon: (
        <ProfileBtn
          src={profileImg}
          size={'small'}
        />
      ),
      label: '코딩애플',
      link: '/',
    },
  ];

  const researchMenu = [
    {
      icon: <PiFireSimple />,
      activeIcon: <PiFireSimpleFill />,
      label: '인기 급상승',
      link: '/',
    },
    {
      icon: <PiShoppingBagOpenDuotone />,
      activeIcon: <PiShoppingBagOpenFill />,
      label: '쇼핑',
      link: '/',
    },
    {
      icon: <IoMusicalNotesOutline />,
      activeIcon: <IoMusicalNotesSharp />,
      label: '음악',
      link: '/',
    },
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: '영화',
      link: '/',
    },
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: '실시간',
      link: '/',
    },
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: '게임',
      link: '/',
    },
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: '스포츠',
      link: '/',
    },
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: '학습',
      link: '/',
    },
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: '팟캐스트',
      link: '/',
    },
  ];

  const premiumMenu = [
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: 'YouTube Premium',
      link: '/',
    },
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: 'YouTube 스튜디오',
      link: '/',
    },
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: 'YouTube Music',
      link: '/',
    },
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: 'YouTube Kids',
      link: '/',
    },
  ];

  const optionMenu = [
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: '설정',
      link: '/',
    },
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: '신고 기록',
      link: '/',
    },
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: '고객센터',
      link: '/',
    },
    {
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
      label: '의견 보내기',
      link: '/',
    },
  ];

  return (
    <div className="lnb__wrapper">
      <div className="lnb__container">
        <div className="lnb__section">
          {basicMenu.map((item, idx) => (
            <BtnRoundSquareGhostActive
              size={'medium'}
              activeIcon={item.activeIcon}
              icon={item.icon}
              label={item.label}
              key={idx}
            />
          ))}
        </div>
        <div className="lnb__bar"></div>
        <div className="lnb__section">
          <button
            className={cn(
              'btn--round-square btn--ghost btn--medium my-chanel__btn',
              { 'btn--active': isActive },
            )}
            onClick={() => setIsActive(!isActive)}
          >
            <span className="btn__label">나</span>
            <i className="btn__icon">
              <RiArrowRightSLine />
            </i>
          </button>
          {myMenu.map((item, idx) => (
            <BtnRoundSquareGhostActive
              size={'medium'}
              activeIcon={item.activeIcon}
              icon={item.icon}
              label={item.label}
              key={idx}
            />
          ))}
        </div>
        <div className="lnb__bar"></div>
        <div className="lnb__section">
          <div className="lnb__title">구독</div>
          {subscribeMenu.map((item, idx) => (
            <BtnRoundSquareGhostActive
              size={'medium'}
              activeIcon={item.activeIcon}
              icon={item.icon}
              label={item.label}
              key={idx}
            />
          ))}
        </div>
        <div className="lnb__bar"></div>
        <div className="lnb__section">
          <div className="lnb__title">탐색</div>
          {researchMenu.map((item, idx) => (
            <BtnRoundSquareGhostActive
              size={'medium'}
              activeIcon={item.activeIcon}
              icon={item.icon}
              label={item.label}
              key={idx}
            />
          ))}
        </div>
        <div className="lnb__bar"></div>
        <div className="lnb__section">
          <div className="lnb__title">YouTube 더보기</div>
          {premiumMenu.map((item, idx) => (
            <BtnRoundSquareGhostActive
              size={'medium'}
              activeIcon={item.activeIcon}
              icon={item.icon}
              label={item.label}
              key={idx}
            />
          ))}
        </div>
        <div className="lnb__bar"></div>
        <div className="lnb__section">
          {optionMenu.map((item, idx) => (
            <BtnRoundSquareGhostActive
              size={'medium'}
              activeIcon={item.activeIcon}
              icon={item.icon}
              label={item.label}
              key={idx}
            />
          ))}
        </div>
        <div className="lnb__bar"></div>
        <div className="lnb__section">
          <div className="lnb__info">
            <Link to="/">
              <span className="lnb__link">정보</span>
            </Link>
            <Link to="/">
              <span className="lnb__link">보도자료</span>
            </Link>
            <Link to="/">
              <span className="lnb__link">저작권</span>
            </Link>
            <Link to="/">
              <span className="lnb__link">문의하기</span>
            </Link>
            <Link to="/">
              <span className="lnb__link">크리에이터</span>
            </Link>
            <Link to="/">
              <span className="lnb__link">광고</span>
            </Link>
            <Link to="/">
              <span className="lnb__link">개발자</span>
            </Link>
          </div>
          <div className="lnb__policy">
            <Link to="/">
              <span className="lnb__link">약관</span>
            </Link>
            <Link to="/">
              <span className="lnb__link">개인정보처리방침</span>
            </Link>
            <Link to="/">
              <span className="lnb__link">정책 및 안전</span>
            </Link>
            <Link to="/">
              <span className="lnb__link">YouTube 작동의 원리</span>
            </Link>
            <Link to="/">
              <span className="lnb__link">새로운 기능 테스트하기</span>
            </Link>
          </div>
          <div className="lnb__copyright">
            © 2024 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway,
            Mountain View CA 94043, USA, 0807-882-594 (무료),
            yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보,
            불법촬영물 신고 크리에이터들이 유튜브 상에 게시, 태그 또는 추천한
            상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을
            판매하지 않으며, 그에 대한 책임을 지지 않습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

LayoutLnbPopup.propTypes = {};

LayoutLnbPopup.defaultProps = {};
