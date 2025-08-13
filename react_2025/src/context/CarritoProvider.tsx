// import { createContext, useContext, useState } from "react";
// import type { ReactNode } from "react";
// import type { Product } from "../components/Response";

// type CarritoContextType = {
//   carrito: Product[];
//   agregarAlCarrito: (producto: Product) => void;
//   quitarDelCarrito: (productoId: number) => void;
//   vaciarCarrito: () => void;
// };

// const CarritoContext = createContext<CarritoContextType | undefined>(undefined);



// export function CarritoProvider({ children }: { children: ReactNode }) {
//   const [carrito, setCarrito] = useState<Product[]>([]);

//   const agregarAlCarrito = (producto: Product) => {
//     setCarrito((prev) => [...prev, producto]);
//   };

//   const quitarDelCarrito = (productoId: number) => {
//     setCarrito((prev) => prev.filter((item) => item.id !== productoId));
//   };

//   const vaciarCarrito = () => {
//     setCarrito([]);
//   };

//   return (
//     <CarritoContext.Provider
//       value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito }}
//     >
//       {children}
//     </CarritoContext.Provider>
//   );
// };

// export function useCarrito() {
//   const context = useContext(CarritoContext);
//   if (!context) {
//     throw new Error("Error useCarrito mal usado, debe estar dentro de CarritoProvider");
//   }
//   return context;
// }

import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../components/Response";

type CarritoContextType = {
  carrito: Product[];
  agregarAlCarrito: (producto: Product) => void;
  quitarDelCarrito: (productoId: number) => void;
  vaciarCarrito: () => void;
};

export const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<Product[]>([]);

  const agregarAlCarrito = (producto: Product) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const quitarDelCarrito = (productoId: number) => {
    setCarrito((prev) => prev.filter((item) => item.id !== productoId));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}