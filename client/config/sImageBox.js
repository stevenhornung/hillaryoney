Meteor.startup(function() {
  sImageBox.config({
    originalHeight: false,
    originalWidth: false,
    animation: 'slideInDown' //image entry animation (scale, fadeIn, zoomIn, slideInDown)
  });
});