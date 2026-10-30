// Menu simplifié pour Kim : que l'utile, tout en français.
// « Mes bijoux » = catalogue, « Coups de cœur » = sélection accueil,
// « Catégories » = filtres du site, « Réglages marque » = document unique.
export const structure = (S) =>
  S.list()
    .title('Contenu du site')
    .items([
      S.listItem()
        .title('Mes bijoux')
        .schemaType('product')
        .child(
          S.documentTypeList('product')
            .title('Tous les bijoux')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),
      S.listItem()
        .title('Coups de cœur (accueil)')
        .schemaType('product')
        .child(
          S.documentList()
            .title('Coups de cœur')
            .schemaType('product')
            .filter('_type == "product" && featured == true')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),
      S.divider(),
      S.listItem()
        .title('Catégories')
        .schemaType('collection')
        .child(
          S.documentTypeList('collection')
            .title('Catégories (filtres du site)')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),
      S.divider(),
      S.listItem()
        .title('Réglages marque')
        .schemaType('settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
            .title('Réglages marque')
        ),
    ]);
