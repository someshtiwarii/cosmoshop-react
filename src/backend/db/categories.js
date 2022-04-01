import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Mens",
    imgURL: "/assets/mens-category.png",
    
  },
  {
    _id: uuid(),
    categoryName: "Women",
    imgURL: "/assets/womens-category.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    imgURL: "/assets/kids-category.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Electronics",
    imgURL: "/assets/electronic-category.png",
  },
  {
    _id: uuid(),
    categoryName: "Skincare",
    imgURL: "/assets/skin-category.jpg",
  },
];
