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
      title: 'Enter Guides Data',
      of:[
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot:true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description:'Important for SEO',
              options:{
                isHighlighted:true
              },
            },
          ],
        },
      ],
    },
    ]
}