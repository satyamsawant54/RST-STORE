const products = [
  {
    name: "Women Floral Print Lounge T-Shirt",
    image: "/images/female_img_3.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Burberry",
    category: "Women Fashion",
    price: 1255,
    countInStock: 22,
    rating: 2.6,
    numReviews: 4,
  },
  {
    name: "Pack of 2 Round Neck T-Shirts",
    image: "/images/male_img_4.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Urban Outfitters",
    category: "Men Fashion",
    price: 1111,
    countInStock: 42,
    rating: 4.4,
    numReviews: 2,
  },
  {
    name: "Native Youth",
    image: "/images/male_img_2.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Ralph Lauren",
    category: "Men Fashion",
    price: 1500,
    countInStock: 18,
    rating: 4.5,
    numReviews: 2,
  },
  {
    name: "Print Crop Lounge Top",
    image: "/images/female_img_1.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Gucci",
    category: "Women Fashion",
    price: 900,
    countInStock: 8,
    rating: 4.8,
    numReviews: 12,
  },
  {
    name: "Crochet Detail Lightweight Top",
    image: "/images/female_img_2.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Chanel",
    category: "Women Fashion",
    price: 755,
    countInStock: 6,
    rating: 4.9,
    numReviews: 8,
  },
  {
    name: "Juventus Henley Neck Jersey",
    image: "/images/male_img_1.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Tom Ford",
    category: "Men Fashion",
    price: 1600,
    countInStock: 21,
    rating: 4.1,
    numReviews: 3,
  },
  {
    name: "Mavericks Drake Tank Top",
    image: "/images/male_img_3.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Calvin Klein",
    category: "Men Fashion",
    price: 1000,
    countInStock: 25,
    rating: 3.4,
    numReviews: 3,
  },
  {
    name: "Printed Polo Collar T-shirt",
    image: "/images/female_img_4.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Chanel",
    category: "Women Fashion",
    price: 500,
    countInStock: 0,
    rating: 4.2,
    numReviews: 5,
  },
  {
    name: "Branded Watch",
    image: "/images/watch4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Calvin Klein",
    category: "Water Proof Watches",
    price: 5000,
    countInStock: 25,
    rating: 3.4,
    numReviews: 3,
  },
  {
    name: "Red T-Shirt",
    image: "/images/product_img10.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Calvin Klein",
    category: "Men's Party Wear",
    price: 2000,
    countInStock: 25,
    rating: 3.4,
    numReviews: 3,
  },
  {
    name: "Winter Wear",
    image: "/images/8.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Calvin Klein",
    category: "Men's Fashion",
    price: 900,
    countInStock: 25,
    rating: 3.4,
    numReviews: 3,
  },
  {
    name: "Iphone 11 Pro",
    image: "/images/phone1.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Calvin Klein",
    category: "Mobile",
    price: 175000,
    countInStock: 25,
    rating: 3.4,
    numReviews: 3,
  },
  {
    name: "Official Wear",
    image: "/images/cloth1.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Calvin Klein",
    category: "Women's Fashion",
    price: 2000,
    countInStock: 25,
    rating: 3.4,
    numReviews: 3,
  },
  {
    name: "Official Wear",
    image: "/images/product_img6.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Calvin Klein",
    category: "Men's Fashion",
    price: 2000,
    countInStock: 25,
    rating: 3.4,
    numReviews: 3,
  },
  {
    name: "Men's Wear",
    image: "/images/product-3.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Calvin Klein",
    category: "Men's Fashion",
    price: 1000,
    countInStock: 25,
    rating: 3.4,
    numReviews: 3,
  },
  {
    name: "Women's Wear",
    image: "/images/03.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Calvin Klein",
    category: "Women's Fashion",
    price: 1000,
    countInStock: 25,
    rating: 3.4,
    numReviews: 3,
  },
 
];

export default products;