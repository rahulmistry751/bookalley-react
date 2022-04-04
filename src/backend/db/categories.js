import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "self help",
    description: "instruct its readers on solving personal problems.",
  },
  {
    _id: uuid(),
    categoryName: "fantasy",
    description:
      "unrealistic settings, or magic, often set in a medieval universe, or possibly involving mythical beings or supernatural forms as a primary element of the plot, theme, or setting.",
  },
];
