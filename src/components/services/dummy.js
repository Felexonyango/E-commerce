
const PRODUCTS = [

  {
    id: 1,
    name: 'Slim trouser',
    price: 400,
    image: require('../../../assets/products/tousers.jpeg'),
    description: 'A trouser for outfit.'
},
  {
    id: 2,
    name: ' Headset',
    price: 350,
    image: require('../../../assets/products/headset-100.jpg'),
    description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
},
{
    id: 3,
    name: 'FastLane Toy Car',
    price: 600,
    image: require('../../../assets/products/car-101.jpg'),
    description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
},
{
    id: 4,
    name: 'SweetHome Cupcake',
    price: 200,
    image: require('../../../assets/products/cake-102.jpg'),
    description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
}
];
export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => (product.id == id));
}



