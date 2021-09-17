import Head from 'next/head';
import NavBar from '../components/Navbar';
import Menu from '../components/sections/Menu';
import Header from '../components/sections/Header';
import About from '../components/sections/About';
import Explore from '../components/sections/Explore';
import Partners from '../components/sections/Partners';
import CTA from '../components/sections/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar align="justify-between">
        <Menu />
      </NavBar>
      <Header />
      <Explore />
      <Partners />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
