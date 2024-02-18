import { LayoutPage } from 'layout/LayoutPage';
import { MainPage } from 'pages/main/Mainpage';
import { WatchPage } from 'pages/watch/WatchPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
function CustomRouter() {
  const routes = [
    {
      path: '/',
      name: '메인 페이지',
      element: <MainPage />,
    },
    {
      path: '/watch',
      name: '비디오 보기 페이지',
      element: <WatchPage />,
    },
  ];

  const router = createBrowserRouter([
    {
      element: <LayoutPage />,
      errorElement: <div>error</div>,
      children: routes,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default CustomRouter;
