import { MainHeader } from 'layout/MainHeader';
// import { SearchPage } from 'pages/search/SearchPage';
import { Outlet } from 'react-router-dom';
import { LayoutLnb } from './LayoutLnb';
import { LayoutLnbPopup } from './LayoutLnbPopup';

export const LayoutPage = () => {
  return (
    <div className="common-wrap">
      <header className="header">
        <MainHeader />
      </header>
      <div className="common-inner">
        <div className="lnb-area">
          <LayoutLnb />
          <LayoutLnbPopup />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
