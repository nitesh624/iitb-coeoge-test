/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  Drupal.color = {
    logoChanged: false,
    bgChanged: false,
    callback: function callback(context, settings, $form) {
     
      var $colorPreview = $form.find('.color-preview');
      var $colorPalette = $form.find('.js-color-palette');


      $colorPreview.find('.color-preview-top-head *, .color-preview-footer-wrapper *').css('color', $colorPalette.find('input[name="palette[topnav]"]').val());
      $colorPreview.find('.color-preview-top-head').css('background-color', $colorPalette.find('input[name="palette[header_bg]"]').val());      
      $colorPreview.find('.color-preview-footer-wrapper').css('background-color', $colorPalette.find('input[name="palette[footer_bg]"]').val());
      $colorPreview.find('.color-preview-main h2, .color-preview .preview-content, .color-preview-content h1, .preview-content ').css('color', $colorPalette.find('input[name="palette[text]"]').val());
      $colorPreview.find('.color-preview-content a, .color-preview-main-menu-links a, .color-preview-main-menu-links a:hover').css('color', $colorPalette.find('input[name="palette[link]"]').val());
      $colorPreview.find('.color-preview-site-name').css('color', $colorPalette.find('input[name="palette[footer]"]').val());


    }
  };
})(jQuery, Drupal, drupalSettings);