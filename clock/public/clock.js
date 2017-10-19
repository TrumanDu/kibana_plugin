import {
  uiModules
} from 'ui/modules';
import {
  VisTypesRegistryProvider
} from 'ui/registry/vis_types';
import {
  TemplateVisTypeProvider
} from 'ui/template_vis_type/template_vis_type';
import {
  VisVisTypeProvider
} from 'ui/vis/vis_type';
import ClockTemplate from './clock.html';
import EditorTemplate from './edit.html';
import './clock.css';
const module = uiModules.get('kibana/clock', ['kibana']);



// Add a controller to this module
module.controller('ClockController', function ($scope, $timeout) {

  const setTime = function () {
    $scope.time = Date.now();
    $timeout(setTime, 1000);
  };
  setTime();

});


function ClockProvider(Private) {
  const VisType = Private(VisVisTypeProvider);
  const TemplateVisType = Private(TemplateVisTypeProvider);
  return new TemplateVisType({
    name: 'clock',
    title: 'My Clock',
    icon: 'fa-clock-o',
    category: VisType.CATEGORY.OTHER, //指定图标所在分类
    description: 'An awesome Kibana plugin for clock',
    requiresSearch: false, //是否从es中查询数据
    template: ClockTemplate,
    params: {
      editor: EditorTemplate, // Use this HTML as an options editor for this vis
      defaults: { // Set default values for paramters (that can be configured in the editor)
        format: 'HH:mm:ss'
      }
    }
  });
}
VisTypesRegistryProvider.register(ClockProvider);
export default ClockProvider;
