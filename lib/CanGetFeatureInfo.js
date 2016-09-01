/* jshint esnext:true */
import List from 'can/list/';
import CanMap from 'can/map/';
import connect from 'can-connect';

// import superMap from 'can-connect/can/super-map/';
import can from 'can/util/library';
import set from 'can-set';
import { ParameterMap } from './Params';

import 'can-connect/constructor/';
import 'can-connect/can/map/';
import 'can-connect/constructor/store/';

import 'can-connect/data/callbacks/';
import 'can-connect/data/callbacks-cache/';
import 'can-connect/data/inline-cache/';

import 'can-connect/data/parse/';
import 'can-connect/data/url/';
import 'can-connect/data/localstorage-cache/';
import 'can-connect/real-time/';
import 'can-connect/fall-through-cache/';
import 'can-connect/constructor/callbacks-once/';


/**
 *
 * A factory function that creates a new Flask-Restless API connection.
 * @parent can-getfeatureinfo
 * @signature `ConnectionFactory(options)`
 * @param {can-getfeatureinfo.types.WMSConnectOptions} options The factory options
 * @return {can-connect/can/super-map}
 * A special super map that contains an additional property `metadata`
 * of type [{MetadataObject}](can-getfeatureinfo.types.MetadataObject).
 * @link can-getfeatureinfo.types.MetadataObject MetadataObject
 */
export function ConnectionFactory(options) {
  //a new list which should hold the objects
  let Objectist = List.extend({
    Map: options.map
  });

  let idProp = options.idProp || 'id';

    //create a local storage connection
    let cacheConnection = connect(['data-localstorage-cache'], {
      name: options.name
    });

  //create and return a new supermap
  return connect(['constructor', 'can-map', 'constructor-store',
  'data-callbacks', 'data-callbacks-cache', 'data-inline-cache',
  'data-parse', 'data-url', 'real-time', 'fall-through-cache',
  'constructor-callbacks-once'], {
    cacheConnection: cacheConnection,
    idProp: idProp,
    // algebra: algebra,
    baseURL: options.url,
    Map: CanMap.extend({
      List: List.extend()
    }),
    name: options.name,
    url: {
      resource: options.url,
      getListData: function(params) {
        params = new ParameterMap(params);
        var def = can.ajax({
          url: this.resource,
          method: 'GET',
          data: params.serialize()
        });
        def.then(function(props) {
          //anything that needs to happen after the request is made
        });
        return def;
      }
    },
    parseListProp: 'features'
    // parseInstanceData: function(props) {
    //
    // }
  });
}
