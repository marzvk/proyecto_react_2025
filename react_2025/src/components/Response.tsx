type Product = {
  id: number;
  src: string;
  title: string;
  precio: number;
  cuotas?: number;
  descuento?: number;
  anio?: string;
  ubicacion?: string;
  envio?: string;
  km?: number;
};

type Response = {
  categoryTitle: string;
  producto: Product[];
};

const Respuesta: Response[] = [
  {
    categoryTitle: "Basado en tu ultima visita",
    producto: [
      {
        id:13,
        src: "public/imagenes/lastview/reloj_xiaomi.webp",
        title: "Smartwatch xioami",
        precio: 88899,
        envio: "Envio gratis",
        descuento: 38
      },
      {
        id:14,
        src: "public/imagenes/lastview/vespa.webp",
        title: "Vespa vxl 150\n Opotunidad",
        precio: 5250000,
        anio:"2025",
        km:100,
        ubicacion:"La Plata - Bs As"
      },
      {
        id:15,
        src: "public/imagenes/lastview/tornado.webp",
        title:"Honda Tornado 250",
        precio: 7900000,
        anio:"2020",
        km: 625,
        ubicacion:"San Luis - San Luis"
      },
      {
        id:16,
        src: "public/imagenes/lastview/auric.webp",
        title: "Auricular Logitech Pro 3",
        precio: 62500,
        descuento:22,
        cuotas:9,
        envio:"Envio Gratis"
      },
      {
        id: 17,
        src: "public/imagenes/lastview/zapa_topper.webp",
        title: "Zapatillas Urbanas Topper",
        precio: 49899,
        descuento: 7,
        cuotas:6,
        envio: "Envio Gratis"
      },
         {
        id: 18,
        src: "public/imagenes/lastview/star.webp",
        title: "Suplemento Star creatine",
        precio: 52477,
        descuento: 51,
        cuotas:6,
        envio:"Envio Gratis"
      },
    ],
  },
  {
    categoryTitle: "Autos más vistos",
    producto: [
      {
        id: 1,
        src: "public/imagenes/autos/aut1.jpg",
        title: "Toyota Corolla",
        precio: 14500000,
        descuento: 10,
        anio: "2020",
        ubicacion: "Buenos Aires",
        envio: "Envío gratis",
        km: 32000,
      },
      {
        id: 2,
        src: "public/imagenes/autos/aut5.webp",
        title: "Honda Civic",
        precio: 15800000,
        descuento: 5,
        anio: "2019",
        ubicacion: "Córdoba",
        envio: "Retiro en sucursal",
        km: 41000,
      },
      {
        id: 3,
        src: "public/imagenes/autos/aut4.jpg",
        title: "Ford Focus",
        precio: 13200000,
        anio: "2018",
        ubicacion: "Rosario",
        envio: "Envío a todo el país",
        km: 50000,
      },
      {
        id: 4,
        src: "public/imagenes/autos/aut2.jpg",
        title: "Chevrolet Cruze",
        precio: 14800000,
        descuento: 7,
        anio: "2021",
        ubicacion: "Mendoza",
        envio: "Envío gratis",
        km: 27000,
      },
      {
        id: 5,
        src: "public/imagenes/autos/aut.jpg",
        title: "Volkswagen Golf",
        precio: 13800000,
        anio: "2017",
        ubicacion: "Salta",
        envio: "Envío programado",
        km: 62000,
      },
      {
        id: 6,
        src: "public/imagenes/autos/aut5.webp",
        title: "Renault Mégane",
        precio: 11600000,
        descuento: 3,
        anio: "2016",
        ubicacion: "La Plata",
        envio: "Envío gratis",
        km: 75000,
      },
    ],
  },
  {
    categoryTitle: "Lo mas vendido",
    producto: [
      {
        id: 1,
        src: "public/imagenes/accesorios_celu/accesorio1.png",
        title: "Funda Antigolpe Ring Soporte Para Xiaomi Poco",
        precio: 11540,
        cuotas: 12,
        descuento: 10,
        ubicacion: "Buenos Aires",
        envio: "Envío gratis",
      },
      {
        id: 2,
        src: "public/imagenes/accesorios_celu/accesorio2.png",
        title: "Smartwatch Xiaomi Redmi Watch 5 Lite Amoled",
        precio: 88899,
        descuento: 5,
        ubicacion: "Córdoba",
        envio: "Retiro en sucursal",
      },
      {
        id: 3,
        src: "public/imagenes/accesorios_celu/accesorio3.png",
        title: "FFunda Poco X6 Pro Camshield Pro Caseme",
        precio: 16500,
        cuotas: 6,
        ubicacion: "Rosario",
        envio: "Envío a todo el país",
      },
      {
        id: 4,
        src: "public/imagenes/accesorios_celu/accesorio4.png",
        title: "Funda Poco X6 Pro Camshield Pro Caseme",
        precio: 9115,

        descuento: 7,
        anio: "2021",
      },
      {
        id: 5,
        src: "public/imagenes/accesorios_celu/accesorio5.png",
        title: "Reloj Inteligente Hombre Gps Satelital Sumergible",
        precio: 103700,
        cuotas: 12,
      },
      {
        id: 6,
        src: "public/imagenes/accesorios_celu/accesorio6.png",
        title: "Funda Antigolpe + Hidrogel Matte Para Xiaomi",
        precio: 23990,
      },
    ],
  },  
  {
    categoryTitle: "Elegidos para vos en Autos , Motos y otros",
    producto: [
         {
        id: 19,
        src: "/imagenes/autos/xr.webp",
        title: "Xr 190 Patentada",
        precio: 6098200,
        anio: "2025",
        km: 12,
        ubicacion: "Capital Federal",
      },
         {
        id: 20,
        src: "/imagenes/autos/nc700.webp",
        title: "Honda NC 700 Impecable",
        precio:14500000,
        anio: "2017",
        km: 21500,
        ubicacion:"Avellaneda - Bs As",
      },
           {
        id: 21,
        src: "/imagenes/autos/trailb.webp",
        title: "Trailblazer Nueva",
        precio: 58200000,
        anio: "2025",
        km: 50,
        ubicacion: "pilar - Bs As",
      },
           {
        id: 22,
        src: "/imagenes/autos/note.webp",
        title: "Nissan Note 1.6 Exclusive 110cv",
        precio: 20200000,
        anio: "2020",
        km: 121000,
        ubicacion: "Resistencia - Chaco",
      },
           {
        id: 23,
        src: "/imagenes/autos/aut5.webp",
        title: "Gilera Unica",
        precio: 42500000,
        anio: "2024",
        km: 500,
        ubicacion: "Chacabucho - Chaco",
      },
           {
        id: 24,
        src: "/imagenes/autos/ducati.webp",
        title: "Ducati Panigale",
        precio: 56910000,
        anio: "2025",
        km: 2,
        ubicacion: "Palermo - Capital",
      },
    ],
  },
  {
    categoryTitle: "Pelea contra el frio",
    producto: [
        {
        id: 25,
        src: "imagenes/ropa/calov2.webp",
        title: "Estufa Caloventor Electrica 400w Portatil",
        precio: 23968,
        descuento:4,
        envio:'Gratis'
      },
        {
        id: 26,
        src: "imagenes/ropa/chaleco.webp",
        title: "cCCCCcccampera",
        precio:175840 ,
      },
        {
        id: 27,
        src:"imagenes/ropa/chalec.webp" ,
        title: "Chaleco montania",
        precio: 78400,
      },
        {
        id:28 ,
        src:"imagenes/ropa/calov.webp" ,
        title: "Calefactor electrnux",
        precio:24870,
      },
        {
        id: 29,
        src:"imagenes/ropa/camper.webp",
        title: "campera termica river",
        precio: 58740,
      },
        {
        id: 30,
        src: "imagenes/ropa/boina.webp",
        title: "boina cuero",
        precio: 19890,
      },
    ],
  },
  {
    categoryTitle: "Volve a entrenar",
    producto: [
   {
    id: 31,
    src: "imagenes/ropa/zap.jpg",
    title: "Zapatillas Running Adidas Hombre",
    precio: 45999,
  },
  {
    id: 32,
    src: "imagenes/ropa/zap.webp",
    title: "Remera Deportiva Dry-Fit Nike",
    precio: 22999,
  },
  {
    id: 33,
    src: "imagenes/ropa/zap.jpg",
    title: "Pelota de Fútbol Profesional N°5",
    precio: 18999,
  },
  {
    id: 34,
    src: "imagenes/ropa/boina.webp",
    title: "Guantes de Boxeo Everlast 12oz",
    precio: 34999,
  },
  {
    id: 35,
    src:"imagenes/ropa/remm.jpg",
    title: "Short Deportivo Puma Hombre",
    precio: 15999,
  },
  {
    id: 36,
    src: "imagenes/ropa/rem.jpg",
    title: "Botella Térmica Deportiva 750ml",
    precio: 9999,
  },
    ],
  },
];

export default Respuesta;

