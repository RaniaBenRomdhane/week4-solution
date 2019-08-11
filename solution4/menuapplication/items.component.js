(function(){
'use strict';

angular.module('data')
.component('items',{
  templateUrl:'/menuapplication/showitems.html',
  bindings:{
    items :'<'
}


});

})();
