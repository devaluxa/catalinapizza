export const orderConfig = {
  companyId: "3a150fbf-eeda-4938-977f-76923d2702fb",
  restaurantId: "dbe26fc3-bef9-4883-83a6-a3a77ef4bd04",
  directUrl:
    "https://www.ordermenu.ca/ordering/restaurant/menu?restaurant_uid=dbe26fc3-bef9-4883-83a6-a3a77ef4bd04&client_is_mobile=true",
  scriptUrl: "https://www.fbgcdn.com/embedder/js/ewm2.js",
} as const;

export const business = {
  name: "Catalina Pizza & Chicken",
  siteUrl: "https://catalinapizzaandchicken.com",
  address: "Unit 7, 5147 20 Ave SE, Calgary, AB T2B 0B1",
  phone: "(403) 452-3300",
  phoneHref: "tel:+14034523300",
  email: "info@catalinapizzaandchicken.com",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Unit%207%2C%205147%2020%20Ave%20SE%2C%20Calgary%2C%20AB%20T2B%200B1",
  facebookUrl: "https://www.facebook.com/catalinapizzayyc/",
  hours: [
    { days: "Monday–Thursday", display: "3:00 PM–11:00 PM", schema: "Mo-Th 15:00-23:00" },
    { days: "Friday–Saturday", display: "3:00 PM–1:00 AM", schema: "Fr-Sa 15:00-01:00" },
    { days: "Sunday", display: "3:00 PM–10:00 PM", schema: "Su 15:00-22:00" },
  ],
} as const;

export const pizzaRows = [
  ["1", "All Meat Pizza", "$19.99", "$21.99", "$23.99", "$26.99"],
  ["2", "House Special Pizza", "$19.99", "$21.99", "$23.99", "$26.99"],
  ["3", "Donair Pizza", "$19.99", "$21.99", "$23.99", "$26.99"],
  ["4", "Chef's Special Pizza", "$19.99", "$21.99", "$23.99", "$26.99"],
  ["5", "Catalina Special Pizza", "$19.99", "$21.99", "$23.99", "$26.99"],
  ["6", "Spicy Chicken Delight Pizza", "$19.99", "$21.99", "$23.99", "$26.99"],
  ["7", "The Honey-Hot Pizza", "$19.99", "$21.99", "$23.99", "$26.99"],
  ["8", "The Greek Pizza", "$19.99", "$21.99", "$23.99", "$26.99"],
  ["9", "Vegetarian Pizza", "$19.99", "$21.99", "$23.99", "$26.99"],
  ["10", "2 PIZZA + 15 Wings", "$41.99", "$44.99", "$48.99", "$55.99"],
] as const;

export const burgers = [
  ["Hamburger", "$9.99"],
  ["Double Burger", "$10.99"],
  ["Cheese Burger", "$10.99"],
  ["Double Cheese Burger", "$11.99"],
  ["Chicken Burger", "$11.99"],
] as const;

export const sides = [
  ["Poutine (7\" / 9\")", "—", "$11.00", "$15.00"],
  ["French Fries", "$4.00", "$5.00", "$7.00"],
  ["Onion Rings", "$4.00", "$5.00", "$7.00"],
  ["Pizza Bread", "—", "$3.50", "—"],
  ["Coleslaw", "—", "$3.00", "$5.00"],
  ["Potato Salad", "—", "$3.00", "$5.00"],
  ["Macaroni Salad", "—", "$3.00", "$5.00"],
  ["Garlic Toast", "—", "$1.50", "—"],
  ["Cheese Toast", "—", "$3.00", "—"],
] as const;

export const pickupSpecials = [
  ["2 Medium Pizzas with 5 Toppings", "$22.99"],
  ["2 Large Pizzas with 5 Toppings", "$26.99"],
  ["15 Pieces Chicken Wings", "$12.99"],
  ["100 Pieces Chicken Wings", "$62.99"],
] as const;

export const reviews = [
  {
    quote: "Love this place. This is the best pizza in Calgary. Family owned, awesome people 😀 Must try.",
    name: "Crystal Martinez",
  },
  {
    quote: "Ordered pizza and wings, both were fantastic tasting. The customer service was wonderful and the food was right on time. Thank you",
    name: "Kaitlyn G",
  },
  {
    quote: "Every time I have went there the food was absolutely amazing. Cooked to perfection, great customer service!",
    name: "Jessica Eddy",
  },
] as const;

export const galleryImages = [
  { src: "/images/gallery/catalina-post-6.webp", alt: "Catalina Pizza & Chicken food special" },
  { src: "/images/gallery/catalina-post-7.webp", alt: "Catalina Pizza & Chicken menu promotion" },
  { src: "/images/gallery/catalina-post-4.webp", alt: "Catalina Pizza & Chicken pizza promotion" },
  { src: "/images/gallery/catalina-post-65.webp", alt: "Catalina Pizza & Chicken pickup special" },
] as const;
