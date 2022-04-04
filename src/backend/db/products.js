import { v4 as uuid } from "uuid";
import { atomic, goneGirl, fiveAm, devotionOfSuspect } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: devotionOfSuspect,
    title: "The Devotion of Suspect X",
    author: "Keigo Higashino",
    discountPrice: "343",
    originalPrice: "499",
    discountPercent: "31",
    rating: 3.2,
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    img: atomic,
    title: "Atomic Habits",
    author: "James Clear",
    discountPrice: "599",
    originalPrice: "999",
    discountPercent: "40",
    rating: 2.5,
    categoryName: "self help",
  },
  {
    _id: uuid(),
    img: fiveAm,
    title: "The 5 AM Club",
    author: "Robin Sharma",
    discountPrice: "799",
    originalPrice: "999",
    discountPercent: "30",
    rating: 1.9,
    categoryName: "self help",
  },
  {
    _id: uuid(),
    img: goneGirl,
    title: "Gone girl",
    author: "Gillian Flynn",
    discountPrice: "699",
    originalPrice: "799",
    discountPercent: "10",
    rating: 5,
    categoryName: "fiction",
  },
];
