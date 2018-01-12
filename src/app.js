import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  page: {
    type: 'string'
  }
});

route('{page}');

export default AppViewModel;
