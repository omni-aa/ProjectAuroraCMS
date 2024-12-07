export default {
  name: 'QuestsEventsGuides',
  type: 'document',
  title: 'Quest & Event Guide ',
  fields: [
    {
      name: 'guideTitle',
      type: 'string',
      title: 'Guide Title',
    },
    {
      name:'guideImage',
      type: 'image',
      title: 'Guide Image',
    },
    {
      name:'TestData',
      type:'text',
      title: 'Guide Data Content',
    },

    {
      name:'guideData',
      type:'array',
      title: 'Enter Guides Data',
      of:[
        {
          type: 'block',
        }
      ]
    }
  ]
}