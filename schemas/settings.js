// Document unique « Réglages marque » : liens et textes modifiables sans code.
// Ne créer qu’UN SEUL document (l’import initial le crée déjà avec l’id « settings »).
export default {
  name: 'settings',
  title: 'Réglages marque',
  type: 'document',
  fields: [
    {
      name: 'brandName',
      title: 'Nom',
      type: 'string',
      description: 'Affiché en grand (ex. Kim’s).',
    },
    {
      name: 'brandSuffix',
      title: 'Suffixe',
      type: 'string',
      description: 'Petit texte à côté du nom (ex. JEWELLERY). Vide = aucun suffixe.',
    },
    {name: 'tagline', title: 'Signature', type: 'string'},
    {
      name: 'instagramUrl',
      title: 'Lien Instagram',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['https']}).error('Colle un lien commençant par https://'),
    },
    {
      name: 'tiktokUrl',
      title: 'Lien TikTok',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['https']}).error('Colle un lien commençant par https://'),
    },
    {
      name: 'vintedProfileUrl',
      title: 'Profil Vinted général',
      type: 'url',
      description: 'Vide = boutons Vinted en « bientôt disponible ».',
      validation: (Rule) => Rule.uri({scheme: ['https'], allowRelative: true}).error('Colle un lien commençant par https://'),
    },
    {
      name: 'aboutText',
      title: 'Texte À propos (à valider par Kim)',
      type: 'text',
      rows: 8,
    },
  ],
  preview: {
    prepare() {
      return {title: 'Réglages marque'};
    },
  },
};
