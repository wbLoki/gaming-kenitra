export default {
  name: "jeux",
  title: "Jeux",
  type: "document",
  fields: [
    {
      name: "titre",
      title: "Titre",
      type: "string",
    },
    {
      name: "detail",
      title: "Detail",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "platforms",
      title: "Platforms",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "checkbox",
        list: [
          { value: "PC", title: "PC" },
          { value: "PS5", title: "Playstation 5" },
          { value: "PS4", title: "Playstation 4" },
          { value: "XBOX", title: "Xbox" },
        ],
      },
    },
  ],
};
