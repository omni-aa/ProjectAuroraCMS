export default {
  name: "EventTimers",
  title: "Event Timers",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "src",
      title: "Image",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Rift", value: "rift" },
          { title: "Custom", value: "custom" },
        ],
        layout: "radio",
      },
    },
    {
      name: "schedule",
      title: "Schedule",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "day",
              title: "Day",
              type: "string",
            },
            {
              name: "times",
              title: "Times",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
};
