// require('./setting.less');

var appFunc = require('utils/appUtils');
    // template = require('./setting.tpl.html');

 var settingView = {
    init: function(){
        settingView.bindEvents();
        // alert("setting init");
        // settingView.renderSetting();
    },
    renderSetting: function(){
//         // if($$('#settingView .page-content')[0]) return;
        // alert("render");
        myApp.showIndicator();
        template = appFunc.loadPage("tpl/setting.tpl.html");
        var renderData = {
            avatarUrl: 'http://lorempixel.com/68/68/people/7/',
            nickName: 'HiApp',
            points: '100'
        };

        var output = appFunc.renderTpl(template, renderData);
        $$('#settingView .page[data-page="setting"]').html(output);

        myApp.hideIndicator();
    },
//     logOut: function(){
//         hiApp.confirm(i18n.setting.confirm_logout,function(){
//             //mainView.router.loadPage('page/login.html');
//             //hiApp.showTab('#ourView');
//         });
//     },
    bindEvents: function(){
        var bindings = [{
            element: '#settingView',
            event: 'show',
            handler: settingView.renderSetting
        },{
            element: '#settingView',
            selector: '.logout-button',
            event: 'click',
            handler: settingView.logOut
        },{
            element: '#settingView',
            selector: '.update-button',
            event: 'click',
            //handler: settingView.checkVersion
        }];
        appFunc.bindEvents(bindings);
    }
};

module.exports = settingView;