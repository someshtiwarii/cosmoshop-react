import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Regular Spacesuit(Men)",
    image: "/assets/men/men_spacesuit.jpg",
    price: "100000",
    category: "men",
    rating: 4,
    discount: "45",
  },
  {
    _id: uuid(),
    title: "Spacehelmet(Men)",
    image: "/assets/men/men_spacehelmet.jpg",
    price: "30000",
    category: "men",
    rating: 4,
    discount: "25",
  },
  {
    _id: uuid(),
    title: "Regular Spacesuit(Women)",
    image: "/assets/women/women_spacesuit.jpg",
    price: "100000",
    category: "women",
    rating: 4,
    discount: "25",
  },
  {
    _id: uuid(),
    title: "Spacehelmet(Women)",
    image: "/assets/women/women_spacehelmet.jpg",
    price: "30000",
    category: "women",
    rating: 4,
    discount: "25",
  },
  {
    _id: uuid(),
    title: "Spacesuit(Kids)",
    image: "/assets/kids/kids_spacesuit.jpg",
    price: "80000",
    category: "kids",
    rating: 2,
    discount: "25",
  },
  {
    _id: uuid(),
    title: "Spacehelmet(Kids)",
    image: "/assets/kids/kids_spacehelmet.jpg",
    price: "25000",
    category: "kids",
    rating: 3,
    discount: "45",
  },
  {
    _id: uuid(),
    title: "Tablet",
    image: "/assets/electronics/space_pad.jpg",
    price: "90000",
    category: "electronics",
    rating: 4,
    discount: "45",
  },
  {
    _id: uuid(),
    title: "Watch",
    image: "/assets/electronics/space_watch.jpg",
    price: "50000",
    category: "electronics",
    rating: 4,
    discount: "55",
  },
  {
    _id: uuid(),
    title: "Skin Cream",
    image: "/assets/skincare/skincare_cream.jpg",
    price: "10000",
    category: "skincare",
    rating: 1,
    discount: "35",
  },
  {
    _id: uuid(),
    title: "Skin Oil",
    image: "/assets/skincare/skincare_oil.jpg",
    price: "10000",
    category: "skincare",
    rating: 2,
    discount: "45",
  },

];
