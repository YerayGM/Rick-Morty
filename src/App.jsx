import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Home from './components/Home';
import Contacto from './components/Contacto';
import Blog from './components/Blog';
import BlogCharacter from './components/BlogCharacter';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogCharacter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;