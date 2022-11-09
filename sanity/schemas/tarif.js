export default {
  name: "tarif",
  title: "Tarif",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Titre",
      type: "string",
    },
    {
      name: "prix",
      title: "Prix",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [
        {
          title: "Feature",
          type: "string",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
    {
      name: "type",
      title: "Type de Tarif",
      type: "string",
      options: {
        list: [
          { title: "Abonnement", value: "abonnement" },
          { title: "High-end Gaming PC", value: "pc" },
          { title: "Console", value: "console" },
        ],
        layout: "radio",
      },
    },
  ],
};
