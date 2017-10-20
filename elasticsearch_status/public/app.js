const uiModules =require ('ui/modules');
const uiRoutes =require ('ui/routes');

require ('ui/autoload/styles');
require ('./less/main.less');
const overviewTemplate =require('./templates/index.html');
const detailTemplate =require('./templates/detail.html');

uiRoutes.enable();
uiRoutes
.when('/', {
  template: overviewTemplate,
  controller: 'elasticsearchStatusController',
  controllerAs: 'ctrl'
})
.when('/index/:name', {
  template: detailTemplate,
  controller: 'elasticsearchDetailController',
  controllerAs: 'ctrl'
});

uiModules
.get('app/elasticsearch_status')
.controller('elasticsearchStatusController', function ($http) {
  $http.get('../api/elasticsearch_status/indices').then((response) => {
    this.indices = response.data;
  });
})
.controller('elasticsearchDetailController', function($routeParams, $http) {
  this.index = $routeParams.name;

  $http.get(`../api/elasticsearch_status/index/${this.index}`).then((response) => {
    this.status = response.data;
  });
});
