import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='container'>
      <Outlet></Outlet>
      <footer>Este es nuestro footer</footer>
    </div>
  );
}

export default Layout;