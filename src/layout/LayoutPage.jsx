import { MainHeader } from 'layout/MainHeader';
import { SearchPage } from 'pages/search/SearchPage';
// import { Outlet } from 'react-router-dom';

export const LayoutPage = () => {
  return (
    <div className="common-wrap">
      <MainHeader />
      <div className="common-inner">
        {/* <Outlet /> */}
        <SearchPage />
      </div>
    </div>
  );
};
