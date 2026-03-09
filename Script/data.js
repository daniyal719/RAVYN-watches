const products = [
  // 1. Rolex section
  {
    id: 'rolex-watch-01',
    categories: ['men-watch', 'rolex-watch'],
    image: './Images/product/Rolex/rolex-black.jpg', 
    name: 'Rolex Silicon Strap Rotating Dial watch',
    price: 3499,
    description: 'A masterpiece of precision and style...',
    dis: 10,
    variations: [
      { image: './Images/product/Rolex/rolex-black.jpg' },
      { image: './Images/product/Rolex/rolex-back.jpg' },
      { image: './Images/product/Rolex/rolex-chain.jpg' }
    ]
  },
  {
    id: 'rolex-watch-02', 
    categories: ['men-watch' , 'rolex-watch'],
    image: './Images/product/Rolex/rolex-white-golden.jpg', 
    name: 'Bugatti Luxury Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { image: './Images/product/Rolex/rolex-white-golden.jpg' },
      { image: './Images/product/Rolex/rolex-back.jpg' },
      { image: './Images/product/Rolex/rolex-chain.jpg' }
    ]
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
      { image: './Images/product/Rolex/rolex-back.jpg' },
      { image: './Images/product/Rolex/rolex-chain.jpg' }
    ]
  },
  // 2. P-P section
  {
    id: 'pata-watch-01', 
    categories: ['men-watch' , 'pata-watch'],
    image: './Images/product/P P/pp-black-B.jpg', 
    name: 'Patek Philippe Geneve leather strap watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { image: './Images/product/P P/pp-black-B.jpg' },
      { image: './Images/product/P P/pp-back.jpg' },
      { image: './Images/product/P P/pp-chain.jpg' }
    ]
  },
  {
    id: 'pata-watch-02', 
    categories: ['men-watch' , 'pata-watch'],
    image: './Images/product/P P/pp-silver-B.jpg', 
    name: 'Patek Philippe Semi Auto watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'black', image: './Images/product/P P/pp-silver-B.jpg'},
      { color: 'white', image: './Images/product/P P/pp-silver-W.jpg'},
      { image: './Images/product/P P/pp-back.jpg' },
      { image: './Images/product/P P/pp-chain.jpg' },
      { image: './Images/product/P P/auto-back.jpg' },
      { image: './Images/product/P P/auto-back-2.jpg' }
    ]
  },
  // 3. Aura section
  {
    id: 'aura-watch-01', 
    categories: ['men-watch' , 'aura-watch'],
    image: './Images/product/Aura/aura-white.jpg', 
    name: 'Arabic Aura watches',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'white', image: './Images/product/Aura/aura-white.jpg'},
      { color: 'black', image: './Images/product/Aura/aura-black.jpg'},
      { color: 'gray', image: './Images/product/Aura/aura-gray.jpg'},
      { image: './Images/product/Aura/aura-back.jpg'}
    ]
  },
  // 4. Cartiner section
  {
    id: 'cartiner-watch-01', 
    categories: ['men-watch' , 'cartiner-watch'],
    image: './Images/product/Cartiner/cartiner-white.jpg', 
    name: 'Cartier Old Money watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'white' , image: './Images/product/Cartiner/cartiner-white.jpg' },
      { color: 'black' , image: './Images/product/Cartiner/cartiner-black.jpg' }
    ]
  },
  // 5. Casio section
  {
    id: 'casio-watch-01', 
    categories: ['men-watch' , 'casio-watch'],
    image: './Images/product/Casio/casio-white.jpg', 
    name: 'Casio Quartz watch',
    price: 19000,
    description: 'A masterpiece of precision and style... (water resistant)',
    dis: 0,
    variations: [
      { color: 'white' , image: './Images/product/Casio/casio-white.jpg' },
      { color: 'black' , image: './Images/product/Casio/casio-black.jpg' },
      { image: './Images/product/Casio/casio-back.jpg' }
    ]
  },
  // 6. Forchs section
  {
    id: 'forchs-watch-01', 
    categories: ['men-watch' , 'forchs-watch'],
    image: './Images/product/Forchs/forchs-white.jpg', 
    name: 'Forichs semi auto watch',
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
    name: 'Hublot Diamond Cut watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: '#A88905' , image: './Images/product/Hublot/hublot-gray-G6.jpg' },
      { color: 'brown' , image: './Images/product/Hublot/hublot-gray-R6.jpg' },
      { color: 'black' , image: './Images/product/Hublot/hublot-white-B6.jpg' },
      { image: './Images/product/Hublot/hublot-back.jpg' }
    ]
  },
  {
    id: 'hublot-watch-02', 
    categories: ['men-watch' , 'hublot-watch'],
    image: './Images/product/Hublot/hublot-silver-Br.jpg', 
    name: 'Hublot Round watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'lightgray' , image: './Images/product/Hublot/hublot-silver-Br.jpg' },
      { color: 'black' , image: './Images/product/Hublot/hublot-silver-Br-2.jpg' },
      { image: './Images/product/Hublot/hublot-back.jpg' }
    ]
  },
  // 8. Lambo section
  {
    id: 'lambo-watch-01', 
    categories: ['men-watch' , 'lambo-watch'],
    image: './Images/product/Lambo/lam-blue.jpg', 
    name: 'Lamborghini Watch',
    price: 19000,
    description: 'A masterpiece of precision and style...',
    dis: 0,
    variations: [
      { color: 'black' , image: './Images/product/Lambo/lam-blue.jpg' },
      { color: 'lightgray' , image: './Images/product/Lambo/lam-silver.jpg' },
      { image: './Images/product/Lambo/lam-top.jpg' },
      { image: './Images/product/Lambo/lam-bottom.jpg' }
    ]
  },
  // 9. un section
  {
    id: 'un-watch-01', 
    categories: ['men-watch' , 'un-watch'],
    image: './Images/product/un/un-blue.jpg', 
    name: 'Farrari Wheel watch',
    price: 19000,
    description: 'A masterpiece of precision and style... (rotating dial)',
    dis: 0,
    variations:[
      { color: 'blue' , image: './Images/product/un/un-blue.jpg'},
      { color: 'green' , image: './Images/product/un/un-green.jpg'},
      { color: 'red' , image: './Images/product/un/un-red.jpg'}
    ]
  },
  {
    id: 'un-watch-02', 
    categories: ['men-watch' , 'un-watch'],
    image: './Images/product/un/un-blue-com.jpg', 
    name: 'Farrari Modren Dial watch',
    price: 19000,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 0,
    variations:[
      { color: 'blue' , image: './Images/product/un/un-blue-com.jpg'},
      { color: 'green' , image: './Images/product/un/un-green-com.jpg'},
      { color: 'yellow' , image: './Images/product/un/transfomer.jpg'}
    ]
  },
  // 10. tomi section
  {
    id: 'tomi-watch-01', 
    categories: ['men-watch' , 'tomi-watch'],
    image: './Images/product/Tomi/tomi-1-s.jpg', 
    name: 'Farrari Modren Dial watch',
    price: 19000,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 0,
    variations: [
      './Images/product/Tomi/tomi-back.jpg'
    ]
  },
  {
    id: 'tomi-watch-02', 
    categories: ['men-watch' , 'tomi-watch'],
    image: './Images/product/Tomi/tomi-round.jpg', 
    name: 'Farrari Modren Dial watch',
    price: 19000,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 0,
    variations: [
      './Images/product/Tomi/tomi-back.jpg'
    ]
  },
  {
    id: 'tomi-watch-03', 
    categories: ['men-watch' , 'tomi-watch'],
    image: './Images/product/Tomi/tomi-box-black-brown.jpg', 
    name: 'Farrari Modren Dial watch',
    price: 19000,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 0,
    variations: [
      './Images/product/Tomi/tomi-box-dial.jpg',
      './Images/product/Tomi/tomi-back.jpg'
    ]
  },
  {
    id: 'tomi-watch-03', 
    categories: ['men-watch' , 'tomi-watch'],
    image: './Images/product/Tomi/tomi-box-black-gray.jpg', 
    name: 'Farrari Modren Dial watch',
    price: 19000,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 0,
    variations: [
      './Images/product/Tomi/tomi-box-dial.jpg',
      './Images/product/Tomi/tomi-back.jpg'
    ]
  },
  // 11. women section
  {
    id: 'women-watch-01', 
    categories: ['women-watch'],
    image: './Images/product/Women/women-1-black.jpg', 
    name: 'Farrari Modren Dial watch',
    price: 19000,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 0,
    variations: [
      { color: 'black' , image: './Images/product/Women/women-1-black.jpg' },
      { color: '#FFD700' , image: './Images/product/Women/women-1-golden.jpg' },
      { color: '#C0C0C0' , image: './Images/product/Women/women-1-silver.jpg' },
    ]
  },
  {
    id: 'women-watch-02', 
    categories: ['women-watch'],
    image: './Images/product/Women/women-2-black.jpg', 
    name: 'Farrari Modren Dial watch',
    price: 19000,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 0,
    variations: [
      { color: 'black' , image: './Images/product/Women/women-2-black.jpg' },
      { color: 'brown' , image: './Images/product/Women/women-2-brown.jpg' },
    ]
  },
  {
    id: 'women-watch-03', 
    categories: ['women-watch'],
    image: './Images/product/Women/women-3.jpg', 
    name: 'Farrari Modren Dial watch',
    price: 19000,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 0,
  },
];