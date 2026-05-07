import { useOutletContext } from 'react-router-dom';
import BenefitsSection from '../components/sections/BenefitsSection';
import ComparisonSection from '../components/sections/ComparisonSection';
import HeroSection from '../components/sections/HeroSection';
import InnerCircle from '../components/sections/InnerCircle';
import PromiseStrip from '../components/sections/PromiseStrip';
import RitualStrip from '../components/sections/RitualStrip';
import ShopPreview from '../components/sections/ShopPreview';

function HomePage() {
  const { products, addToCart } = useOutletContext();
  const featured = products.slice(0, 3);

  return (
    <main className="page-shell">
      <HeroSection />
      <RitualStrip />
      <BenefitsSection />
      <ComparisonSection />
      <ShopPreview products={featured} addToCart={addToCart} />
      <PromiseStrip />
      <InnerCircle />
    </main>
  );
}

export default HomePage;
