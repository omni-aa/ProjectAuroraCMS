export default {
  name: 'GuideContentData',
  type: 'document',
  title: 'Guides Context Data',
  fields: [
    {
      name: 'guideTitle',
      type: 'string',
      title: 'Guide Title',
    },
    {
      name:'newsImage',
      type: 'image',
      title: 'News Image',
    },
    {
      name:'guidesDescription',
      type:'text',
      title: 'Guide Description',
    },
    {
      name:'dataContent',
      type:'array',
      title: 'Guide Content',
      of:[
        {
          type: 'block',
        }
      ]
    }
  ]
}