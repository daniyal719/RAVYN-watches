const products = [
  // 1. Rolex section
  {
    id: 'rolex-watch-01',
    categories: ['men-watch', 'rolex-watch'],
    image: './Images/product/Rolex/rolex-black.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
  },
  {
    id: 'rolex-watch-02', 
    categories: ['men-watch' , 'rolex-watch'],
    image: './Images/product/Rolex/rolex-white-golden.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
  },
  {
    id: 'rolex-watch-03',
    categories: ['men-watch' , 'rolex-watch'],
    image: './Images/product/Rolex/rolex-golden-green.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 10,
    variations: [
      { color: 'lightgreen', image: './Images/product/Rolex/rolex-golden-green.jpg' },
      { color: 'red', image: './Images/product/Rolex/rolex-golden-red.jpg' },
    ]
  },
  // 2. P-P section
  {
    id: 'pata-watch-01', 
    categories: ['men-watch' , 'pata-watch'],
    image: './Images/product/P P/pp-black-B.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
  },
  {
    id: 'pata-watch-02', 
    categories: ['men-watch' , 'pata-watch'],
    image: './Images/product/P P/pp-silver-B.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'black', image: './Images/product/P P/pp-silver-B.jpg'},
      { color: 'white', image: './Images/product/P P/pp-silver-W.jpg'}
    ]
  },
  // 3. Aura section
  {
    id: 'aura-watch-01', 
    categories: ['men-watch' , 'aura-watch'],
    image: './Images/product/Aura/aura-white.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'white', image: './Images/product/Aura/aura-white.jpg'},
      { color: 'black', image: './Images/product/Aura/aura-black.jpg'}
    ]
  },
  {
    id: 'aura-watch-02', 
    categories: ['men-watch' , 'aura-watch'],
    image: './Images/product/Aura/aura-gray.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
  },
  // 4. Cartiner section
  {
    id: 'cartiner-watch-01', 
    categories: ['men-watch' , 'cartiner-watch'],
    image: './Images/product/Cartiner/cartiner-white.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'white' , image: './Images/product/cartiner/cartiner-white.jpg' },
      { color: 'black' , image: './Images/product/cartiner/cartiner-black.jpg' }
    ]
  },
  // 5. Casio section
  {
    id: 'casio-watch-01', 
    categories: ['men-watch' , 'casio-watch'],
    image: './Images/product/Casio/casio-white.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'white' , image: './Images/product/Casio/casio-white.jpg' },
      { color: 'black' , image: './Images/product/Casio/casio-black.jpg' }
    ]
  },
  // 6. Forchs section
  {
    id: 'forchs-watch-01', 
    categories: ['men-watch' , 'forchs-watch'],
    image: './Images/product/Forchs/forchs-white.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'white' , image: './Images/product/Forchs/forchs-white.jpg' },
      { color: 'black' , image: './Images/product/Forchs/forchs-black.jpg' }
    ]
  },
  // 7. Hublot section
  {
    id: 'hublot-watch-01', 
    categories: ['men-watch' , 'hublot-watch'],
    image: './Images/product/Hublot/hublot-gray-G6.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'gray' , image: './Images/product/Hublot/hublot-gray-G6.jpg' },
      { color: 'red' , image: './Images/product/Hublot/hublot-gray-R6.jpg' },
      { color: 'white' , image: './Images/product/Hublot/hublot-white-B6.jpg' }
    ]
  },
  {
    id: 'hublot-watch-02', 
    categories: ['men-watch' , 'hublot-watch'],
    image: './Images/product/Hublot/hublot-silver-Br.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'lightgray' , image: './Images/product/Hublot/hublot-silver-Br.jpg' },
      { color: 'black' , image: './Images/product/Hublot/hublot-silver-Br-2.jpg' }
    ]
  },
  // 8. Lambo section
  {
    id: 'lambo-watch-01', 
    categories: ['men-watch' , 'lambo-watch'],
    image: './Images/product/Lambo/lam-blue.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'blue' , image: './Images/product/Lambo/lam-blue.jpg' },
      { color: 'lightgray' , image: './Images/product/Lambo/lam-silver.jpg' }
    ]
  },
  //9. Moonston section
  {
    id: 'moonston-watch-01', 
    categories: ['men-watch' , 'moonston-watch'],
    image: './Images/product/Moonston/moonston-1.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
  },
  // 10. Transfomer section
  {
    id: 'transfomer-watch-01', 
    categories: ['men-watch' , 'transfomer-watch'],
    image: './Images/product/transfomer/transfomer.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
  },
  // 11. un section
  {
    id: 'un-watch-01', 
    categories: ['men-watch' , 'un-watch'],
    image: './Images/product/un/un-blue.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations:[
      { color: 'blue' , image: './Images/product/un/un-blue.jpg'},
      { color: 'green' , image: './Images/product/un/un-green.jpg'},
      { color: 'red' , image: './Images/product/un/un-red.jpg'},
    ]
  },
  {
    id: 'un-watch-02', 
    categories: ['men-watch' , 'un-watch'],
    image: './Images/product/un/un-blue-com.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations:[
      { color: 'blue' , image: './Images/product/un/un-blue-com.jpg'},
      { color: 'green' , image: './Images/product/un/un-green-com.jpg'}
    ]
  },
];