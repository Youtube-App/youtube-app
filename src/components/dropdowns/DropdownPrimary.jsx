import { React } from 'react';
import PropTypes from 'prop-types';

export const DropdownPrimary = () => {
  // const renderItem = (item) => {
  //   switch (item.type) {
  //     case 'menu':
  //       return <div></div>;
  //   }
  // };

  return (
    <div className="dropdown--primary">
      {/* {list.map((item) => (
        <React.Fragment key={item.label}>
          {renderItem(item)}
        </React.Fragment>
      ))} */}
    </div>
  );
};

DropdownPrimary.propTypes = {
  list: PropTypes.array,
};

DropdownPrimary.defaultProps = {
  list: [
    {
      type: 'menu',
      label: '난라벨',
    },
  ],
};
