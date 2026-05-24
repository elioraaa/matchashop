import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import ProductDetailPanel from '../components/product/ProductDetailPanel';

function MenuPage() {
  const { products, addToCart, selectedProduct, setSelectedProduct, selectedCategory, setSelectedCategory } = useOutletContext();
  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category).filter(Boolean))],
    [products],
  );

  const category = useMemo(() => {
    if (selectedCategory) {
      const categoryMap = {
        'ceremonial': 'Ceremonial',
        'culinary': 'Culinary',
        'accessories': 'Accessories'
      };
      const mappedCategory = categoryMap[selectedCategory] || selectedCategory;

      return categories.includes(mappedCategory) ? mappedCategory : 'All';
    }

    return 'All';
  }, [selectedCategory, categories]);

  const filteredProducts = category === 'All'
    ? products
    : products.filter((product) => product.category === category);

  return (
    <main className="page-shell">
      <section className="page-intro compact">
        <p className="eyebrow">the shop</p>
        <h1>Choose your matcha mood.</h1>
        <p>Browse products from your backend. When you add photos later, the cards will use them automatically.</p>
      </section>

      <div className="category-row">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? 'category-chip active' : 'category-chip'}
            onClick={() => setSelectedCategory(item === 'All' ? null : item)}
          >
            {item}
          </button>
        ))}
      </div>

      <section className="product-grid menu-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            onVisualClick={setSelectedProduct}
          />
        ))}
      </section>

      {selectedProduct ? (
        <ProductDetailPanel
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      ) : null}
    </main>
  );
}

export default MenuPage;
