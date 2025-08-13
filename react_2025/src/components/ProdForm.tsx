
import { useMutation } from '@tanstack/react-query';
import type { Product } from '../components/Response.tsx';


function createProduct(product: Product): Promise<Product> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('✅ Producto creado con éxito:', product);
      resolve(product);
    }, 500);
  });
}

export function useCrearProducto() {
  return useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      console.log('🟢 Producto creado :', data);
    },
    onError: (error) => {
      console.error('Error creando producto: ', error);
    },
  });
}