const products = [
  // 1. Rolex section
  {
    id: 'rolex-watch-01',
    categories: ['men-watch', 'rolex-watch'],
    image: './Images/product/Rolex/rolex-black.jpg', 
    name: 'Rolex Silicon Strap Rotating Dial watch',
    price: 3500,
    description: 'A masterpiece of precision and style...',
    dis: 10,
    actualDis: 8.6,
    variations: [
      { image: './Images/product/Rolex/rolex-black-open.jpg'}
    ]
  },
  {
    id: 'rolex-watch-02', 
    categories: ['men-watch' , 'rolex-watch'],
    image: './Images/product/Rolex/rolex-white-golden.jpg', 
    name: 'Rolex Golden Multi-Color Watch',
    price: 3399,
    description: 'A masterpiece of precision and style...',
    dis: 10,
    actualDis: 8.8,
    variations: [
      { color: '#FFD700', image: './Images/product/Rolex/rolex-white-golden.jpg' },
      { image: './Images/product/Rolex/rolex-white-golden-back.jpg' },
      { color: 'lightgreen', image: './Images/product/Rolex/rolex-golden-green.jpg' },
      { color: 'red', image: './Images/product/Rolex/rolex-golden-red.jpg' },
      { image: './Images/product/Rolex/rolex-back.jpg' },
      { image: './Images/product/Rolex/rolex-chain.jpg' }
    ]
  },
  {
    id: 'rolex-watch-03',
    categories: ['men-watch' , 'rolex-watch'],
    image: './Images/product/Rolex/rolex-golden-red.jpg', 
    name: 'Rolex GMT Master Rotating Dial Watch',
    price: 3600,
    description: 'A masterpiece of precision and style...',
    dis: 11,
    actualDis: 11.13,
    variations: [
      { image: './Images/product/Rolex/rolex-back.jpg' },
      { image: './Images/product/Rolex/rolex-chain.jpg' }
    ]
  },
  // 2. P-P section
  {
    id: 'pata-watch-01', 
    categories: ['men-watch' , 'pate-watch'],
    image: './Images/product/P P/pp-black-B.jpg', 
    name: 'Patek Philippe Geneve leather strap watch',
    price: 3200,
    description: 'A masterpiece of precision and style...',
    dis: 10,
    actualDis: 9.4,
    variations: [
      { image: './Images/product/P P/pp-black-B.jpg' },
      { image: './Images/product/P P/pp-black-B-close.jpg' },
      { image: './Images/product/P P/pp-black-B-open.jpg' },
    ]
  },
  {
    id: 'pata-watch-02', 
    categories: ['men-watch' , 'pate-watch'],
    image: './Images/product/P P/pp-silver-B.jpg', 
    name: 'Patek Philippe Semi Auto watch',
    price: 5110,
    description: 'A masterpiece of precision and style...',
    dis: 10,
    actualDis: 10,
    variations: [
      { color: 'black', image: './Images/product/P P/pp-silver-B.jpg'},
      { image: './Images/product/P P/auto-back.jpg' },
      { color: 'white', image: './Images/product/P P/pp-silver-W.jpg'},
      { image: './Images/product/P P/auto-back-2.jpg' }
    ]
  },
  // 3. Aura section
  {
    id: 'aura-watch-01', 
    categories: ['men-watch' , 'aura-watch'],
    image: './Images/product/Aura/aura-white.jpg', 
    name: 'Arabic Aura watches',
    price: 1550,
    description: 'A masterpiece of precision and style...',
    dis: 10,
    actualDis: 9.7,
    variations: [
      { color: 'white', image: './Images/product/Aura/aura-white.jpg'},
      { image: './Images/product/Aura/aura-back-white.jpg' },
      { color: 'black', image: './Images/product/Aura/aura-black.jpg'},
      { image: './Images/product/Aura/aura-back-black.jpg'},
      { color: 'gray', image: './Images/product/Aura/aura-gray.jpg'},
      
    ]
  },
  // 4. Cartiner section
  {
    id: 'cartiner-watch-01', 
    categories: ['men-watch' , 'cartiner-watch'],
    image: './Images/product/Cartiner/cartiner-black.jpg', 
    name: 'Cartier Old Money watch',
    price: 3700,
    description: 'A masterpiece of precision and style...',
    dis: 10,
    actualDis: 8.13,
    variations: [
      { color: 'black' , image: './Images/product/Cartiner/cartiner-black.jpg' },
      { color: 'white' , image: './Images/product/Cartiner/cartiner-black.jpg' }
    ]
  },
  // 5. Casio section
  {
    id: 'casio-watch-01', 
    categories: ['men-watch' , 'casio-watch'],
    image: './Images/product/Casio/casio-black.jpg', 
    name: 'Casio Quartz watch',
    price: 2600,
    description: 'A masterpiece of precision and style... (water resistant)',
    dis: 10,
    actualDis: 7.7,
    variations: [
      { color: 'black' , image: './Images/product/Casio/casio-black.jpg' },
      { color: 'white' , image: './Images/product/Casio/casio-white.jpg' },
      { image: './Images/product/Casio/casio-back.jpg' }
    ]
  },
  // 6. Forchs section
  {
    id: 'forchs-watch-01', 
    categories: ['men-watch' , 'forchs-watch'],
    image: './Images/product/Forchs/forchs-white.jpg', 
    name: 'Forichs Semi Auto watch',
    price: 4000,
    description: 'A masterpiece of precision and style...',
    dis: 10,
    actualDis: 7.52,
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
    price: 4000,
    description: 'A masterpiece of precision and style...',
    dis: 10,
    actualDis: 7.52,
    variations: [
      { color: '#A88905' , image: './Images/product/Hublot/hublot-gray-G6.jpg' },
      { image: './Images/product/Hublot/hublot-back.jpg' },
      { color: 'brown' , image: './Images/product/Hublot/hublot-gray-R6.jpg' },
      { image: './Images/product/Hublot/hublot-open.jpg' },
      { color: 'black' , image: './Images/product/Hublot/hublot-white-B6.jpg' },
    ]
  },
  {
    id: 'hublot-watch-02', 
    categories: ['men-watch' , 'hublot-watch'],
    image: './Images/product/Hublot/hublot-silver-Br.jpg', 
    name: 'Hublot Round watch',
    price: 3600,
    description: 'A masterpiece of precision and style...',
    dis: 10,
    actualDis: 8.35,
    variations: [
      { color: 'lightgray' , image: './Images/product/Hublot/hublot-silver-Br.jpg' },
      { image: './Images/product/Hublot/hublot-open.jpg' },
      { color: 'black' , image: './Images/product/Hublot/hublot-silver-Br-2.jpg' },
      { image: './Images/product/Hublot/hublot-back.jpg' },
      
    ]
  },
  // 8. Lambo section
  {
    id: 'lambo-watch-01', 
    categories: ['men-watch' , 'lambo-watch'],
    image: './Images/product/Lambo/lam-blue.jpg', 
    name: 'Lamborghini Working Chronograph Watch',
    price: 7300,
    description: 'A masterpiece of precision and style...',
    dis: 10,
    actualDis: 8.23,
    variations: [
      { color: 'black' , image: './Images/product/Lambo/lam-blue.jpg' },
      { color: 'lightgray' , image: './Images/product/Lambo/lam-silver.jpg' },
      { image: './Images/product/Lambo/lam-white-hand.jpg' },
      { image: './Images/product/Lambo/lam-top.jpg' },
    ]
  },
  // 9. un section
  {
    id: 'un-watch-01', 
    categories: ['men-watch' , 'un-watch'],
    image: './Images/product/un/un-blue.jpg', 
    name: 'Farrari Wheel watch',
    price: 3110,
    description: 'A masterpiece of precision and style... (rotating dial)',
    dis: 10,
    actualDis: 10,
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
    price: 3333,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 10,
    actualDis: 10,
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
    name: 'Tomi T-084 Mens Leather Straps Quartz Date Watch',
    price: 3500,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 10,
    actualDis: 8.6,
  },
  {
    id: 'tomi-watch-02', 
    categories: ['men-watch' , 'tomi-watch'],
    image: './Images/product/Tomi/tomi-round.jpg', 
    name: 'Tomi T-302 S Series Watch <p>(Gift Watch)</p>',
    price: 4500,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 10,
    actualDis: 8.9,
    variations: [
      { image: './Images/product/Tomi/tomi-back.jpg' }
    ]
  },
  {
    id: 'tomi-watch-03', 
    categories: ['men-watch' , 'tomi-watch'],
    image: './Images/product/Tomi/tomi-2-circle.jpg', 
    name: 'Tomi T-302 S Series Watch <p>(Gift Watch)</p>',
    price: 4500,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 10,
    actualDis: 8.9,
    variations: [
      { image: './Images/product/Tomi/tomi-circle-gift.jpg' }
    ]
  },
  {
    id: 'tomi-watch-04', 
    categories: ['men-watch' , 'tomi-watch'],
    image: './Images/product/Tomi/tomi-box-black-brown.jpg', 
    name: 'Tomi T-104 Face Gear Dual Straps Watch',
    price: 4300,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 10,
    actualDis: 9.31,
    variations: [
      { image: './Images/product/Tomi/tomi-box-black-brown.jpg', },
      { image: './Images/product/Tomi/tomi-box-dial-mec.jpg' },
      { image: './Images/product/Tomi/tomi-box-mec.jpg' },
    ]
  },
  {
    id: 'tomi-watch-05', 
    categories: ['men-watch' , 'tomi-watch'],
    image: './Images/product/Tomi/tomi-box-black-gray.jpg', 
    name: 'Tomi T-105 Face Gear Dual Straps Watch',
    price: 4300,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 10,
    actualDis: 9.31,
    variations: [
      { image: './Images/product/Tomi/tomi-box-dial.jpg' }
    ]
  },
  // 11. women section
  {
    id: 'women-watch-01', 
    categories: ['women-watch'],
    image: './Images/product/Women/women-1-black.jpg', 
    name: 'Moonston Women Chain Watch',
    price: 1750,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 10,
    actualDis: 8.6,
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
    name: 'Moonston Women Silicon Straps Watch',
    price: 1400,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 15,
    actualDis: 14.3,
    variations: [
      { color: 'black' , image: './Images/product/Women/women-2-black.jpg' },
      { color: 'brown' , image: './Images/product/Women/women-2-brown.jpg' },
    ]
  },
  {
    id: 'women-watch-03', 
    categories: ['women-watch'],
    image: './Images/product/Women/women-3.jpg', 
    name: 'Farrari Modren Rotating Dial Women watch',
    price: 4000,
    description: 'A masterpiece of precision and style... ( rotating dial )',
    dis: 10,
    actualDis: 7.51,
  },
];