export default {
  name: 'NewsData',
  type: 'document',
  title: 'NewsData',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'News title',
    },
    {
      type: 'slug',
      title: 'Slug',
      name: 'slug',
      options: {
        source:'title',
      }
    },
    {
      name:'newsImage',
      type: 'image',
      title: 'News Image',
    },
    {
      name:'smallDescription',
      type:'text',
      title: 'Description',
    },
  ]
}