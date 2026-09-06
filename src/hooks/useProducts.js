import { useState, useEffect, useCallback } from 'react';

const API_BASE = 'http://localhost:3001/products';

/**
 * Custom hook to fetch all products from json-server.
 * Returns { products, loading, error, refetch }
 */
export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_BASE);
      if (!res.ok) {
        throw new Error(`Failed to fetch products (${res.status} ${res.statusText})`);
      }
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err.message || 'Something went wrong fetching products');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}

/**
 * Custom hook to fetch a single product by ID from json-server.
 * Returns { product, loading, error, refetch }
 */
export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/${id}`);
      if (!res.ok) {
        throw new Error(`Product not found (${res.status})`);
      }
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      setError(err.message || 'Something went wrong fetching product');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return { product, loading, error, refetch: fetchProduct };
}
