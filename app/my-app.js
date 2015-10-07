// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
  init: false //Disable App's automatica initialization
});
// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var appFunc = require('utils/appUtils');
// Add view
// appFunc.hideToolbar();
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

// Now we need to run the code that will be executed only for About page.
function setFlexboxHeight(){
  var screenH = document.documentElement.clientHeight;
  var headerH = document.getElementsByTagName('header')[0].clientHeight;
  var navH = document.getElementsByTagName('nav')[0].clientHeight;
  var footerH = document.getElementsByTagName('footer')[0].clientHeight;
  //remaining height = screen - header - nav - footer
  var heightLeft = screenH - headerH - navH - footerH;
  document.getElementById('flexbox').style.height = (heightLeft - 20) + "px";
  // document.getElementsByClassName('pages')[0].style.height = (screenH - navH) + "px";
}

//home page JS calls on init
// appFunc.hideToolbar();
setFlexboxHeight();
// mainView.router.loadContent($$('#myPage').html());
myApp.onPageBeforeAnimation('index', function (page) {
  // Do something here for "about" page
  // myApp.alert('Here comes About page');
  // appFunc.hideToolbar();
  setFlexboxHeight();
})
// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
  // Do something here for "about" page
  // myApp.alert('Here comes About page');
  appFunc.showToolbar();
})
myApp.addView('#settingView', {
  dynamicNavbar: true
});
settingView = require('../setting/setting');
settingView.init();
myApp.init();