// Une catégorie = un filtre sur la page Collection.
// Kim peut en créer (ex. « Colliers », « Boucles d’oreilles ») sans toucher au code.
export default {
  name: 'collection',
  title: 'Catégorie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required().error('Donne un nom à la catégorie.'),
    },
    {
      name: 'slug',
      title: 'Identifiant URL',
      type: 'slug',
      options: {source: 'title', maxLength: 40},
    },
    {name: 'description', title: 'Description', type: 'text', rows: 3},
    {name: 'cover', title: 'Image de présentation', type: 'image', options: {hotspot: true}},
    {
      name: 'order',
      title: 'Ordre d’affichage',
      type: 'number',
      description: 'Ordre des pastilles de filtre sur la page Collection.',
    },
    {
      name: 'published',
      title: 'Visible sur le site',
      type: 'boolean',
      description: 'Décocher = la catégorie et son filtre disparaissent du site.',
      initialValue: true,
    },
  ],
  preview: {
    select: {title: 'title', media: 'cover'},
  },
};
