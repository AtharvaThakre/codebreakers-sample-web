import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import OurClients from './components/OurClients';
import ManageCommunity from './components/ManageCommunity';
import Experience from './components/Experience';
import HelpingBusiness from './components/HelpingBusiness';
import Design from './components/Design';
import Testimonial from './components/Testimonial';
import Marketing from './components/Marketing';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <OurClients />
        <ManageCommunity />
        <Experience />
        <HelpingBusiness />
        <Design />
        <Testimonial />
        <Marketing />
      </main>
      <Footer />
    </>
  );
};

export default App;
