'use strict';

import angular from 'angular';
import jsonFormatter from 'jsonformatter';
import jsonCss from 'jsonformatter/dist/json-formatter.min.css';
import MainController from './MainController';
import SearchTextbox from './SearchTextboxDirective';

console.log("hi");
angular.module('cah-web-portal', ['jsonFormatter'])
    .controller('MainCtrl', ['$http', MainController])
    .directive('searchCardsTextbox', ['$timeout', ($timeout) => new SearchTextbox($timeout)]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['cah-web-portal'], {strictDi: true});
});
/*
 /c/Users/bla/AppData/Local/Google/Chrome SxS/Application
 ./chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
 */