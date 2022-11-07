export default {
  name: "platform",
  title: "Platform",
  type: "document",
  fields: [
    {
      name: "titre",
      title: "Nom de platform",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
