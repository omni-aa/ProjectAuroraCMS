export default {
  name: 'TranslationData',
  type: 'document',
  title: 'Translation Data',
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
      name:'patchDescription',
      type:'text',
      title: 'Description',
    },
    {
      name:'patchContent',
      type:'array',
      title: 'Patch Content',
      of:[
        {
          type: 'block',
        }
      ]
    }
  ]
}