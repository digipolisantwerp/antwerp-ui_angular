export const WYSIWYG_DEFAULT_CONFIG = {
  bodyClass: 'a-input ckeditor-editable-body',
  contentsCss: ['https://cdn.antwerpen.be/core_branding_scss/4.0.0/main.min.css'],
  extraPlugins: 'divarea',
  find_highlight: {
    element: 'span',
    styles: {'background-color': '#fffc00', color: '#0064b4'},
  },
  format_tags: 'p;h1;h2;h3;h4;h5;h6',
  toolbar_Basic: [
    ['Bold', 'Italic', 'Underline', '-', 'Format', '-', 'Source'],
  ],
  removeButtons: 'Styles',
  removePlugins: 'about',
  toolbar: null,
  uiColor: '#d8d8d8',
};
