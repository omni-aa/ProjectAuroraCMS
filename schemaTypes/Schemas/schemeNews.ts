export default {
  name: 'newsData',
  type: 'document',
  title: 'NewsData',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'News title',
    },
    {
      name: 'newsImage',
      type: 'image',
      title: 'News Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'publishedDate', // Unique field name
      type: 'date', // Field type (use 'datetime' for time as well)
      title: 'Published Date',
      options: {
        dateFormat: 'YYYY-MM-DD', // Optional date format
        calendarTodayLabel: 'Today', // Optional "Today" label in the calendar
      },
    },
  ],
};
