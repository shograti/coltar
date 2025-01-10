import { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  fields: [
    {
      label:"Titre",
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label:"Slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "content",
      label:"Contenu",
      type: "richText",
      required: true,
    },
    {
      name: "authors",
      label:"Auteur(s)",
      type: "text",
      required: true,
    },
  ],
};
