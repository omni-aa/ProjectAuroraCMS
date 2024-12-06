export default {
  name: 'ClassGuides',
  type: 'document',
  title: 'Class Guides Data ',
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
      name:'guidesDescription',
      type:'text',
      title: 'Guide Description',
    },
    {
      name:'gearTypesSection',
      type:'array',
      title: 'Gear Type Section',
      of:[
        {
          type: 'block',
        }
      ]
    },
    {
      name:'ipnyshArtifactTypesSection',
      type:'array',
      title: 'Ipnysh Artifact Guide Section',
      of:[
        {
          type: 'block',
        }
      ]
    },
    {
      name:'weaponGuideSection',
      type:'array',
      title: 'Weapon Guide Section',
      of:[
        {
          type: 'block',
        }
      ]
    },
    {
      name:'gemSection',
      type:'array',
      title: 'Gem Guide Section',
      of:[
        {
          type: 'block',
        }
      ]
    },

    {
      name:'skillGuideSection',
      type:'array',
      title: 'Skill Guide Section',
      of:[
        {
          type: 'block',
        }
      ]
    },
    {
      name:'skillSetGuideSection',
      type:'array',
      title: 'Skill Set Guide Section',
      of:[
        {
          type: 'block',
        }
      ]
    },
    {
      name:'combatUtilitySection',
      type:'array',
      title: 'Mounts, Gliders, Pets Section',
      of:[
        {
          type: 'block',
        }
      ]
    }
  ]
}