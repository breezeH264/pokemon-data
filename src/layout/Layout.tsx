import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
