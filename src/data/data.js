const products = [
  {
    id: 1,
    name: "La Roche-Posay Anthelios Ultra-Light Invisible Fluid Sun Cream SPF50+",
    img_url:
      "https://media.wired.co.uk/photos/608bd8aab4a0a16bf421fa9f/master/w_1600,c_limit/30042021-WIRED-SPF4.jpg",
    category: "sunscreens",
    description:
      "Made to protect your skin from harmful UV rays. Offers a silky finish. Leaves no white cast",
    price: "17.50",
  },
  {
    id: 2,
    name: "Garnier Ambre Solaire Ultra-hydrating sun lotion SPF 50+",
    img_url:
      "https://media.wired.co.uk/photos/608bd8a91d4c1b7d05a512af/master/w_1600,c_limit/30042021-WIRED-SPF2.jpg",
    category: "sunscreens",
    description:
      "Made to protect your skin from harmful UV rays. Offers a silky finish. Leaves no white cast",
    price: "5",
  },
  {
    id: 3,
    name: "Comfort Zone Sun Soul Face And Body Cream SPF50+",
    img_url:
      "https://media.wired.co.uk/photos/608bd8aab4a0a16bf421faa1/master/w_1600,c_limit/30042021-WIRED-SPF3.jpg",
    category: "sunscreens",
    description:
      "Made to protect your skin from harmful UV rays. Offers a silky finish. Leaves no white cast",
    price: "23",
  },
  {
    id: 4,
    name: "Boots Soltan Once",
    img_url:
      "https://media.wired.co.uk/photos/608bd8a91d4c1b7d05a512b1/master/w_1600,c_limit/30042021-WIRED-SPF6.jpg",
    category: "sunscreens",
    description:
      "Made to protect your skin from harmful UV rays. Offers a silky finish. Leaves no white cast",
    price: "10",
  },
  {
    id: 5,
    name: "Omni by Esther Sunshine Block SPF 50+",
    img_url:
      "https://media.wired.co.uk/photos/608bd8ab1d4c1b7d05a512b3/master/w_1600,c_limit/30042021-WIRED-SPF5.jpg",
    category: "sunscreens",
    description:
      "Made to protect your skin from harmful UV rays. Offers a silky finish. Leaves no white cast",
    price: "45",
  },
  {
    id: 6,
    name: "Neutrogena Alcohol and Oil-Free Toner",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1637679624-31SFTXpU6ZL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=768:*",
    category: "toners",
    description:
      "Takes care of dirt residues left after cleansing, and balances skin tone",
    price: "20.00",
  },
  {
    id: 7,
    name: "Pixi by Petra Glow Tonic",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590703863-pixi-facial-toner-1590703791.jpg?crop=1xw:1xh;center,top&resize=768:*",
    category: "toners",
    description:
      "Takes care of dirt residues left after cleansing, and balances skin tone.Perfect for all skin types",
    price: "17.50",
  },
  {
    id: 8,
    name: "The Ordinary Glycolic Acid 7% Toning Solution",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1606252303-1590702240-the-ordinary-face-toner-1590702222.jpg?crop=1xw:1xh;center,top&resize=768:*",
    category: "toners",
    description:
      "Takes care of dirt residues left after cleansing, and balances skin tone.",
    price: "13.50",
  },
  {
    id: 9,
    name: "AESOP In Two Minds Facial Toner",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590703086-aesop-facial-toner-1590703067.jpg?crop=1xw:1xh;center,top&resize=768:*",
    category: "toners",
    description:
      "Takes care of dirt residues left after cleansing, and balances skin tone",
    price: "15.00",
  },
  {
    id: 10,
    name: "Glow Recipe Watermelon Glow PHA +BHA Pore-Tight Toner",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590704222-s2348431-main-zoom.jpg?crop=1xw:1.00xh;center,top&resize=768:*",
    category: "toners",
    description:
      "Takes care of dirt residues left after cleansing, and balances skin tone.Revitalizes skin to give a healthy glow",
    price: "19.50",
  },
  {
    id: 11,
    name: "Lipikar Balm AP + Body & Face Cream",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650312942-2592993.jpg?crop=0.667xw:1xh;center,top&resize=768:*",
    category: "moisturizers",
    description: "Softens and smoothens skin.Perfect for dry skin types.",
    price: "20.00",
  },
  {
    id: 12,
    name: "DermaControl Oil Absorbing Moisturizer with SPF 30",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650312904-71audkgmqql-sl1500-1650312895.jpg?crop=0.8xw:1xh;center,top&resize=768:*",
    category: "moisturizers",
    description: "Softens and smoothens skin.",
    price: "17.00",
  },
  {
    id: 13,
    name: "Hydro Boost Hyaluronic Acid Hydrating Water Face Gel Moisturizer",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1600711343-screen-shot-2020-09-21-at-2-02-00-pm-1600711327.png?crop=0.796xw:1.00xh;0.0865xw,0&resize=768:*",
    category: "moisturizers",
    description: "Softens and smoothens skin",
    price: "14.50",
  },
  {
    id: 14,
    name: "Facial Moisturizing Lotion with SPF 30",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580405360-2241990-1580405351.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=768:*",
    category: "moisturizers",
    description:
      "Softens and smoothens skin.This is a moisturizer and sunscreen all in one product!",
    price: "16.00",
  },
  {
    id: 15,
    name: "Unscented Simple Water Boost Hydrating Gel Cream",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1600710337-71urcyiwgjl-sl1500-1600710324.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=768:*",
    category: "moisturizers",
    description: "Softens and smoothens skin.",
    price: "9.50",
  },
  {
    id: 16,
    name: "Soothing Cleanser Foam",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585255345-73632.jpg?crop=0.667xw:1xh;center,top&resize=768:*",
    category: "cleansers",
    description: "Removes debris and dirt from the face",
    price: "17.50",
  },
  {
    id: 17,
    name: "Cetaphil Daily Facial Cleanser",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585257585-s-l640-1585257552.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=768:*",
    category: "cleansers",
    description: "Removes debris and dirt from the face",
    price: "16",
  },
  {
    id: 18,
    name: "La Roche-Posay Toleriane Hydrating Gentle Face Cleanser",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585256498-toleriane-hydrating-gentle-facial-cleanser-3337875545778.jpg?crop=0.8566666666666667xw:1xh;center,top&resize=768:*",
    category: "cleansers",
    description:
      "Removes debris and dirt from the face. Also ensures hydration.",
    price: "17.50",
  },
  {
    id: 19,
    name: "St.Ives Cleansing Stick",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585256046-1c32876b-d6a0-40a6-9e30-f0179b8bf395_1.8b35b3634e9fdb733a011b6f59506fe0.jpg?crop=0.667xw:1xh;center,top&resize=768:*",
    category: "cleansers",
    description: "Removes debris and dirt from the face",
    price: "15",
  },
  {
    id: 20,
    name: "Neutrogena Skin Balancing Milky Cleanser",
    img_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621286859-310l8Je7mSL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=768:*",
    category: "sunscreen",
    description: "Removes debris and dirt from the face",
    price: "12.99",
  },
];

const services = [
  {
    id: 1,
    serviceType: "Consultation",
    serviceDesc:
      "We offer 30mins of consultation with a certified dermatologist",
    img_url: "images/consultation.jpg",
  },
  {
    id: 2,
    serviceType: "Retail",
    serviceDesc:
      "Our products are available at retail prices for skincare lovers",
    img_url: "images/retail.jpg",
  },
  {
    id: 3,
    serviceType: "Wholesale",
    serviceDesc:
      "We have great deals for our customers who purchase in bulk to re-sell",
    img_url: "",
  },
];

export { products, services };
