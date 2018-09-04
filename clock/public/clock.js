/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import {
  uiModules
} from 'ui/modules';
import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { CATEGORY } from 'ui/vis/vis_category';

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

const ClockProvider = Private=>{
  const VisFactory = Private(VisFactoryProvider);

  return VisFactory.createAngularVisualization({
    name: 'clock',
    title: 'My Clock',
    icon: 'fa-clock-o',
    category: CATEGORY.OTHER, //指定图标所在分类
    description: 'An awesome Kibana plugin for clock',
    visConfig: {
      defaults: {
        format: 'HH:mm:ss'
      },
      template: ClockTemplate,
    },
    editorConfig: {
      optionsTemplate: EditorTemplate,
    },
    requestHandler: 'none',
    responseHandler: 'none',
    options: {
      showIndexSelection: false,
      showQueryBar: false,
      showFilterBar: false,
    },
  });
};
VisTypesRegistryProvider.register(ClockProvider);