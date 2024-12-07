export default {
  name: 'NewPlayerGuide',
  type: 'document',
  title: 'New Player Guides ',
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
      title: 'Enter Guideasdasd Data',
      of:[
        {
          type: 'block',
        }
      ]
    }
    ]
}