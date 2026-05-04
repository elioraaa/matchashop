import { useEffect, useMemo, useState } from 'react';
import ProductCard from '../components/product/ProductCard';
import ProductDetailPanel from '../components/product/ProductDetailPanel';

function MenuPage({ products, addToCart, selectedProduct, setSelectedProduct, selectedCategory, onCategoryChange }) {
  const [category, setCategory] = useState('All');
  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category).filter(Boolean))],
    [products],
  );

  // Sync external category selection to local state
  useEffect(() => {
    if (selectedCategory) {
      // Map footer categories to product categories
      const categoryMap = {
        'ceremonial': 'Ceremonial',
        'culinary': 'Culinary',
        'accessories': 'Accessories'
      };
      const mappedCategory = categoryMap[selectedCategory] || selectedCategory;
      if (categories.includes(mappedCategory)) {
        setCategory(mappedCategory);
      }
    } else if (selectedCategory === null) {
      setCategory('All');
    }
    // Reset the selected category after applying
    if (onCategoryChange) {
      onCategoryChange(null);
    }
  }, [selectedCategory, categories, onCategoryChange]);

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
            onClick={() => setCategory(item)}
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
