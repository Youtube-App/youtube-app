import { DefaultDropdown } from 'components/dropdowns/DefaultDropdown';
import { CiTextAlignLeft } from 'react-icons/ci';

export const CommentRangeBtn = () => {
  const rangeDropdown = [
    {
      type: 'menu',
      label: '인기 댓글 순',
    },
    {
      type: 'menu',
      label: '최신 순',
    },
  ];

  return (
    <DefaultDropdown
      size={'small'}
      list={rangeDropdown}
    >
      <button className="comment__range-btn">
        <div className="btn__icon">
          <CiTextAlignLeft />
        </div>
        <div className="btn__label">정렬 기준</div>
      </button>
    </DefaultDropdown>
  );
};
