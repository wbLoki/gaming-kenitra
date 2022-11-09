export default {
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "key",
      title: "Emplacement",
      type: "number",
    },
    {
      name: "page",
      title: "Page",
      type: "reference",
      to: [{ type: "page" }],
    },
  ],
};
