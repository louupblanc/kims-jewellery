// Fiche « Nouveau bijou » : nom, prix, catégorie, description, photos,
// lien Vinted. Champs obligatoires = ceux qui affichent le produit en ligne.
export default {
  name: 'product',
  title: 'Bijou',
  type: 'document',
  orderings: [
    {title: 'Ordre manuel', name: 'ordre', by: [{field: 'order', direction: 'asc'}]},
    {title: 'Nom A–Z', name: 'nom', by: [{field: 'name', direction: 'asc'}]},
    {title: 'Prix croissant', name: 'prix', by: [{field: 'price', direction: 'asc'}]},
  ],
  fields: [
    {
      name: 'name',
      title: 'Nom du bijou',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).error('Donne un nom au bijou (2 lettres minimum).'),
    },
    {
      name: 'slug',
      title: 'Identifiant URL',
      type: 'slug',
      description: 'Généré depuis le nom. Ne modifier que si tu sais pourquoi.',
      options: {source: 'name', maxLength: 60},
    },
    {
      name: 'price',
      title: 'Prix (€)',
      type: 'number',
      description: 'Prix en euros, sans centimes.',
      validation: (Rule) => Rule.required().min(0).error('Indique un prix (0 ou plus).'),
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{type: 'collection'}],
      description: 'Détermine dans quel filtre le bijou apparaît sur le site.',
      validation: (Rule) => Rule.required().error('Choisis une catégorie.'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Une ou deux phrases : motif, allure. Pas de promesse matière ici.',
    },
    {
      name: 'material',
      title: 'Matière',
      type: 'string',
      description: 'Confirmé pour tout le catalogue. Ne changer que sur consigne.',
      initialValue: 'Acier inoxydable 316L',
    },
    {
      name: 'images',
      title: 'Photos du produit',
      type: 'array',
      description: 'Glisser-déposer accepté. Première photo = image principale du site.',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', title: 'Texte alternatif', type: 'string'}],
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('Ajoute au moins une photo.'),
    },
    {
      name: 'vintedUrl',
      title: 'Lien vers l’annonce Vinted (facultatif)',
      type: 'url',
      description: 'Vide = bouton « bientôt disponible » sur la fiche.',
      validation: (Rule) => Rule.uri({scheme: ['https']}).error('Colle un lien commençant par https://'),
    },
    {
      name: 'featured',
      title: 'Afficher dans « Coups de cœur » (accueil)',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'archived',
      title: 'Archivé (retiré du site, fiche conservée)',
      type: 'boolean',
      description: 'Cocher pour retirer ce bijou du site sans perdre sa fiche. Laisser décoché sinon.',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Ordre d’affichage',
      type: 'number',
      description: 'Petit nombre = affiché en premier dans sa catégorie.',
    },
  ],
  preview: {
    select: {title: 'name', price: 'price', archived: 'archived', media: 'images.0'},
    prepare({title, price, archived, media}) {
      return {
        title,
        subtitle: (price != null ? price + ' €' : 'Prix ?') + (archived ? ' • archivé' : ''),
        media,
      };
    },
  },
};
