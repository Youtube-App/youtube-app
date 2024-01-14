import { Dropdown } from './DefaultDropdown.jsx';
import { BtnCircleGray } from 'components/buttons/BtnCircleGray.jsx';
import { PiUserSquareLight } from 'react-icons/pi';
import { GiNestedHexagons } from 'react-icons/gi';
import { PiImagesSquare } from 'react-icons/pi';
import { PiArrowSquareRight } from 'react-icons/pi';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { IoMoonOutline } from 'react-icons/io5';
import { IoLanguageOutline } from 'react-icons/io5';
import { AiOutlineSafety } from 'react-icons/ai';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaRegKeyboard } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { VscReport } from 'react-icons/vsc';
import { IoFlagOutline } from 'react-icons/io5';
import { IoArrowUndoOutline } from 'react-icons/io5';
import { GoCircleSlash } from 'react-icons/go';

export default {
  title: 'Components/Dropdowns/DefaultDropdown',
  component: Dropdown,
};

export const LargeLogin = {
  args: {
    size: 'large',
    list: [
      {
        type: 'profile',
        name: '사용자',
        nickname: 'user-hb7xh8ho3c',
      },
      {
        type: 'bar',
      },
      {
        type: 'menu',
        icon: <PiUserSquareLight />,
        label: '내 채널',
      },
      {
        type: 'menu',
        icon: <GiNestedHexagons />,
        label: 'YouTube 스튜디오',
      },
      {
        type: 'menu',
        icon: <PiImagesSquare />,
        label: '계정 전환',
        isFold: true,
      },
      {
        type: 'menu',
        icon: <PiArrowSquareRight />,
        label: '로그아웃',
      },
      {
        type: 'bar',
      },
      {
        type: 'menu',
        icon: <BiMoneyWithdraw />,
        label: '구매항목 및 멤버십',
      },
      {
        type: 'menu',
        icon: <LiaUserCircleSolid />,
        label: 'YouTube의 내 데이터',
      },
      {
        type: 'bar',
      },
      {
        type: 'menu',
        icon: <IoMoonOutline />,
        label: '디자인: 밝은 테마',
        isFold: true,
      },
      {
        type: 'menu',
        icon: <IoLanguageOutline />,
        label: '언어: 한국어',
        isFold: true,
      },
      {
        type: 'menu',
        icon: <AiOutlineSafety />,
        label: '제한 모드: 사용 안함',
        isFold: true,
      },
      {
        type: 'menu',
        icon: <AiOutlineGlobal />,
        label: '위치: 한국',
        isFold: true,
      },
      {
        type: 'menu',
        icon: <FaRegKeyboard />,
        label: '단축키',
      },
      {
        type: 'bar',
      },
      {
        type: 'menu',
        icon: <IoSettingsOutline />,
        label: '설정',
      },
      {
        type: 'bar',
      },
      {
        type: 'menu',
        icon: <AiOutlineQuestionCircle />,
        label: '고객센터',
      },
      {
        type: 'menu',
        icon: <VscReport />,
        label: '의견 보내기',
      },
    ],
    children: <BtnCircleGray />,
  },
};

export const LargeLogout = {
  args: {
    size: 'large',
    list: [
      {
        type: 'menu',
        icon: <LiaUserCircleSolid />,
        label: 'YouTube의 내 데이터',
      },
      {
        type: 'menu',
        icon: <IoMoonOutline />,
        label: '디자인: 밝은 테마',
        isFold: true,
      },
      {
        type: 'menu',
        icon: <IoLanguageOutline />,
        label: '언어: 한국어',
        isFold: true,
      },
      {
        type: 'menu',
        icon: <AiOutlineSafety />,
        label: '제한 모드: 사용 안함',
        isFold: true,
      },
      {
        type: 'menu',
        icon: <AiOutlineGlobal />,
        label: '위치: 한국',
        isFold: true,
      },
      {
        type: 'menu',
        icon: <FaRegKeyboard />,
        label: '단축키',
      },
      {
        type: 'bar',
      },
      {
        type: 'menu',
        icon: <IoSettingsOutline />,
        label: '설정',
      },
      {
        type: 'bar',
      },
      {
        type: 'menu',
        icon: <AiOutlineQuestionCircle />,
        label: '고객센터',
      },
      {
        type: 'menu',
        icon: <VscReport />,
        label: '의견 보내기',
      },
    ],
    children: <BtnCircleGray />,
  },
};

export const Medium = {
  args: {
    size: 'medium',
    list: [
      {
        type: 'menu',
        icon: <IoFlagOutline />,
        label: '신고',
      },
      {
        type: 'menu',
        icon: <IoArrowUndoOutline />,
        label: '공유',
      },
      {
        type: 'bar',
      },
      {
        type: 'menu',
        icon: <GoCircleSlash />,
        label: '관심 없음',
      },
      {
        type: 'menu',
        icon: <VscReport />,
        label: '의견 보내기',
      },
    ],
    children: <BtnCircleGray />,
  },
};

export const Small = {
  args: {
    size: 'small',
    list: [
      {
        type: 'menu',
        icon: <IoFlagOutline />,
        label: '신고',
      },
      {
        type: 'menu',
        icon: <IoArrowUndoOutline />,
        label: '공유',
      },
    ],
    children: <BtnCircleGray />,
  },
};
