const sidebars = {
  tutorialSidebar: [
    'bevezetes',
    {
      type: 'category',
      label: 'Alapok',
      items: [
        'bevezetes' // Egyelőre tegyük be ide a bevezetes.md-t példának
      ],
    },
    {
      type: 'category',
      label: 'Haladó témák',
      items: [
        // Itt most nem kell elem, mert van link property
        // vagy elem az items tömbben
      ],
      link: {
        type: 'doc',
        id: 'bevezetes'
      }
    },
    {
      type: 'category',
      label: 'Gyakorlás',
      items: [
        // Itt most nem kell elem, mert van link property
        // vagy elem az items tömbben
      ],
      link: {
        type: 'doc',
        id: 'bevezetes'
      }
    },
  ],
};

module.exports = sidebars;