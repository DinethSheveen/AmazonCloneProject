import {formatCurrency} from "../scripts/generalFunctions/currencyFormatter.js"
class Product{
  productId;
  productImage;
  productName;
  rating;
  priceInCents;

  constructor(product){
    this.productId = product.productId;
    this.productImage = product.productImage;
    this.productName = product.productName;
    this.rating = product.rating;
    this.priceInCents = product.priceInCents;
  }

  getImage(){
    return `images/ratings/rating-${this.rating.stars*10}.png`
  }

  getPrice(){
    return `${formatCurrency(this.priceInCents)}`
  }

  getSizeChartLink(){
    return `<a href=""></a>`
  }

  getWarrantyLink(){
    return `<a href=""></a>`
  }
}

class Clothing extends Product{
  sizeChartLink;

  constructor(product){
    super(product)
    this.sizeChartLink = product.sizeChartLink
  }

  getSizeChartLink(){
    return `
      <a href="../images/${this.sizeChartLink}" target="_blank" class="size-chart">Size Chart</a>
    `
  }
}

class Appliance extends Product{
  warrantyLink;

  constructor(product){
    super(product),
    this.warrantyLink = product.warrantyLink
  }

  getWarrantyLink(){
    return `
    <a href="../images/${this.warrantyLink}" target="_blank" class="size-chart">Warranty Info</a>`
  }
}

export const products = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    productImage: "images/products/athletic-cotton-socks-6-pairs.jpg",
    productName: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
      keywords: [
      "socks",
      "sports",
      "apparel",
      "clothing",
      "clothes",
      "footwear"
    ],
    },
    priceInCents: 1090
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    productImage: "images/products/intermediate-composite-basketball.jpg",
    productName: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127,
      keywords: [
      "sports",
      "basketball",
      "basketballs",
      "balls",
      "ball"
    ]
    },
    priceInCents: 2095,
  },
  {
    productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    productImage: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    productName: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
      keywords: [
      "tshirts",
      "t-shirts",
      "apparel",
      "mens",
      "clothing",
      "clothes"
    ],
    },
    priceInCents: 799,
    type: "clothing",
    sizeChartLink: "/clothing-size-chart.png"
  },
  {
    productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
    productImage: "images/products/black-2-slot-toaster.jpg",
    productName: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197,
      keywords: [
      "toaster",
      "kitchen",
      "appliances",
      "toast"
    ],
    },
    priceInCents: 1899,
    type : "appliance",
    warrantyLink : "/appliance-warranty.png"
  },
  {
    productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    productImage: "images/products/6-piece-white-dinner-plate-set.jpg",
    productName: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37,
      keywords: [
      "plates",
      "kitchen",
      "dining",
      "dishes",
      "dish"
    ]
    },
    priceInCents: 2067,
  },
  {
    productId: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    productImage: "images/products/6-piece-non-stick-baking-set.webp",
    productName: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175,
      keywords: [
      "kitchen",
      "cookware",
      "appliances"
    ]
    },
    priceInCents: 3499,
  },
  {
    productId: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    productImage: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    productName: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317,
      keywords: [
      "hoodies",
      "sweaters",
      "apparel",
      "clothing",
      "clothes"
    ],
    },
    priceInCents: 2400,
    type : "clothing",
    sizeChartLink : "/clothing-size-chart.png"
  },
  {
    productId: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    productImage: "images/products/luxury-tower-set-6-piece.jpg",
    productName: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144,
      keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels",
      "towel"
    ]
    },
    priceInCents: 3599,
  },
  {
    productId: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    productImage: "images/products/liquid-laundry-detergent-plain.jpg",
    productName: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305,
      keywords: [
      "bathroom",
      "cleaning",
      "detergent",
      "detergents"
    ]
    },
    priceInCents: 2899,
  },
  {
    productId: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    productImage: "images/products/knit-athletic-sneakers-gray.jpg",
    productName: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89,
      keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "foot-wear"
    ]
    },
    priceInCents: 3390,
  },
  {
    productId: "5968897c-4d27-4872-89f6-5bcb052746d7",
    productImage: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    productName: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235,
      keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel",
      "clothing",
      "clothes"
    ],
    },
    priceInCents: 2070,
    type: "clothing",
    sizeChartLink: "/clothing-size-chart.png"
  },
  {
    productId: "aad29d11-ea98-41ee-9285-b916638cac4a",
    productImage: "images/products/round-sunglasses-black.jpg",
    productName: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30,
      keywords: [
      "accessories",
      "shades",
      "sunglasses",
      "sunglass"
    ]
    },
    priceInCents: 1560,
  },
  {
    productId: "04701903-bc79-49c6-bc11-1af7e3651358",
    productImage: "images/products/women-beach-sandals.jpg",
    productName: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562,
      keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer",
      "foot-wear"
    ]
    },
    priceInCents: 2499,
  },
  {
    productId: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    productImage: "images/products/blackout-curtain-set-beige.webp",
    productName: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232,
      keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
    },
    priceInCents: 4599,
  },
  {
    productId: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    productImage: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    productName: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 4,
      count: 160,
      keywords: [
      "shorts",
      "apparel",
      "mens",
      "clothing",
      "clothes"
    ]
    },
    priceInCents: 1699,
  },
  {
    productId: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    productImage: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    productName: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 5,
      count: 846,
      keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
    },
    priceInCents: 3074,
  },
  {
    productId: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    productImage: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    productName: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 4,
      count: 99,
      keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins",
      "tissue"
    ]
    },
    priceInCents: 2374,
  },
  {
    productId: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    productImage: "images/products/straw-sunhat.webp",
    productName: "Straw Lifeguard Sun Hat",
    rating: {
      stars: 4,
      count: 215,
      keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
    },
    priceInCents: 2200,
  },
  {
    productId: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    productImage: "images/products/sky-flower-stud-earrings.webp",
    productName: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 4.5,
      count: 52,
      keywords: [
      "jewellery",
      "accessories",
      "womens"
    ]
    },
    priceInCents: 1799,
  },
  {
    productId: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    productImage: "images/products/women-stretch-popover-hoodie-black.jpg",
    productName: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 4.5,
      count: 2465,
      keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel",
      "clothing",
      "clothes"
    ],
    },
    priceInCents: 1374,
    type: "clothing",
    sizeChartLink: "/clothing-size-chart.png"
  },
  {
    productId: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    productImage: "images/products/bathroom-rug.jpg",
    productName: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: 4.5,
      count: 119,
      keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
    },
    priceInCents: 1250,
  },
  {
    productId: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    productImage: "images/products/women-knit-ballet-flat-black.jpg",
    productName: "Women's Knit Ballet Flat",
    rating: {
      stars: 4,
      count: 326,
      keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
    },
    priceInCents: 2640,
  },
  {
    productId: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    productImage: "images/products/men-golf-polo-t-shirt-blue.jpg",
    productName: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 2556,
      keywords: [
      "tshirts",
      "t-shirts",
      "tshirt",
      "shirts",
      "apparel",
      "mens",
      "clothing",
      "clothes"
    ],
    },
    priceInCents: 1599,
    type: "clothing",
    sizeChartLink: "/clothing-size-chart.png"
  },
  {
    productId: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    productImage: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    productName: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: 4.5,
      count: 2286,
      keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen",
      "trash can",
      "trash-can",
      "trash"
    ]
    },
    priceInCents: 8300,
  },
  {
    productId: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    productImage: "images/products/duvet-cover-set-blue-twin.jpg",
    productName: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: 4,
      count: 456,
      keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
    },
    priceInCents: 2399,
  },
  {
    productId: "d2785924-743d-49b3-8f03-ec258e640503",
    productImage: "images/products/women-chunky-beanie-gray.webp",
    productName: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 5,
      count: 83,
      keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens",
      "clothing",
      "clothes"
    ]
    },
    priceInCents: 1250,
  },
  {
    productId: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    productImage: "images/products/men-chino-pants-beige.jpg",
    productName: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 4.5,
      count: 9017,
      keywords: [
      "pants",
      "apparel",
      "mens",
      "clothing",
      "clothes"
    ]
    },
    priceInCents: 2290,
  },
  {
    productId: "1c079479-8586-494f-ab53-219325432536",
    productImage: "images/products/men-athletic-shoes-green.jpg",
    productName: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229,
      keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens",
      "sneakers"
    ]
    },
    priceInCents: 3890,
  },
  {
    productId: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    productImage: "images/products/men-navigator-sunglasses-brown.jpg",
    productName: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 3.5,
      count: 42,
      keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
    },
    priceInCents: 1690,
  },
  {
    productId: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    productImage: "images/products/non-stick-cooking-set-15-pieces.webp",
    productName: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 4.5,
      count: 511,
      keywords: [
      "cooking set",
      "kitchen",
      "appliances"
    ]
    },
    priceInCents: 6797,
  },
  {
    productId: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    productImage: "images/products/vanity-mirror-silver.jpg",
    productName: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: 4.5,
      count: 130,
      keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
    },
    priceInCents: 1649,
  },
  {
    productId: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    productImage: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    productName: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 4.5,
      count: 248,
      keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens",
      "clothing",
      "clothes"
    ]
    },
    priceInCents: 2400,
  },
  {
    productId: "d339adf3-e004-4c20-a120-40e8874c66cb",
    productImage: "images/products/double-elongated-twist-french-wire-earrings.webp",
    productName: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 4.5,
      count: 117,
      keywords: [
      "accessories",
      "womens",
      "jewellery"
    ]
    },
    priceInCents: 2400,
  },
  {
    productId: "d37a651a-d501-483b-aae6-a9659b0757a0",
    productImage: "images/products/round-airtight-food-storage-containers.jpg",
    productName: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: 4,
      count: 126,
      keywords: [
      "boxes",
      "food containers",
      "kitchen",
      "appliances"
    ]
    },
    priceInCents: 2899,
  },
  {
    productId: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    productImage: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    productName: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 4.5,
      count: 1211,
      keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ],
    },
    priceInCents: 2250,
    type : "appliance",
    warrantyLink : "/appliance-warranty.png"
  },
  {
    productId: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    productImage: "images/products/blackout-curtains-black.jpg",
    productName: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 4.5,
      count: 363,
      keywords: [
      "bedroom",
      "home"
    ]
    },
    priceInCents: 3099,
  },
  {
    productId: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    productImage: "images/products/cotton-bath-towels-teal.webp",
    productName: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: 4.5,
      count: 93,
      keywords: [
      "bathroom",
      "home",
      "towels",
      "towel"
    ]
    },
    priceInCents: 2110,
  },
  {
    productId: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    productImage: "images/products/knit-athletic-sneakers-pink.webp",
    productName: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 4,
      count: 89,
      keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens",
      "sneakers"
    ]
    },
    priceInCents: 3390,
  },
  {
    productId: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    productImage: "images/products/countertop-blender-64-oz.jpg",
    productName: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 4,
      count: 3,
      keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ],
    },
    priceInCents: 10747,
    type : "appliance",
    warrantyLink : "/appliance-warranty.png"
  },
  {
    productId: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    productImage: "images/products/floral-mixing-bowl-set.jpg",
    productName: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 5,
      count: 679,
      keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen",
      "appliances"
    ]
    },
    priceInCents: 3899,
  },
  {
    productId: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    productImage: "images/products/kitchen-paper-towels-30-pack.jpg",
    productName: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: 4.5,
      count: 1045,
      keywords: [
      "kitchen",
      "kitchen towels",
      "tissues",
      "tissue"
    ]
    },
    priceInCents: 5799,
  },
  {
    productId: "bc2847e9-5323-403f-b7cf-57fde044a955",
    productImage: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    productName: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157,
      keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens",
      "clothing",
      "clothes"
    ],
    },
    priceInCents: 2400,
    type : "clothing",
    sizeChartLink : "/clothing-size-chart.png"
  }
].map((product)=>{
  if(product.type === "clothing"){
    return new Clothing(product)
  }
  else if(product.type === "appliance"){
    return new Appliance(product)
  }
  else{
    return new Product(product)
  }
});