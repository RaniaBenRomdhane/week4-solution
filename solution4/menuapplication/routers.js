(function(){
'use strict';

angular.module('data')
.config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
function RoutesConfig ($stateProvider,$urlRouterProvider){

$urlRouterProvider.otherwise('/');

$stateProvider
.state('home', {
  url:'/',
  templateUrl: '/menuapplication/home.html'
})
.state ('categories',{
  url:'/categories',
  templateUrl : '/menuapplication/main-categories.html',
  controller: 'DataController as listData',
  resolve:{
    mainList :['MenuDataService', function(MenuDataService){
              return MenuDataService.getAllCategories();
              }]
         }
})
  .state('items',{
    url:'/items/{shotName}',
    templateUrl: '/MenuApplication/items.html',
    controller : 'ItemsForCategoryController as itemsforcategory',
    resolve:{
      items :['MenuDataService','$stateParams', function(MenuDataService,$stateParams){
                return MenuDataService.getItemsForCategory($stateParams.shotName);
                }]
            }
});

}
})();
