'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
  function(Menus) {
    // Add the Articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Articles',
      state: 'articles',
      type: 'dropdown'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'articles', {
      title: 'List Articles',
      state: 'articles.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'articles', {
      title: 'Create Article',
      state: 'articles.create'
    });
  }
]);