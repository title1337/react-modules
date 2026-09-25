import './App.css';

import { Header } from './component/Header';
import { MainContent } from './component/MainContent';
import { ProductSection } from './component/ProductSection';
import { FAQ } from './component/Faq';
import { Footer } from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
