import CanMap from 'can/map/';
import List from 'can/list/';
import 'can/map/define/';


/**
 * @module {can.Map} can-getfeatureinfo/lib/CanRestless.ParameterMap ParameterMap
 * @parent can-getfeatureinfo
 * @group props Properties
 * @description A set of parameters that serializes to valid wms parameters
 */
export const ParameterMap = CanMap.extend({
    /**
     * @prototype
     */
    define: {
        is130: {
            get() {
                return this.attr('version').indexOf('1.3') !== -1;
            },
            serialize: false
        },
        projection: {
            type: 'string',
            value: 'EPSG:3857',
            serialize: false,
            set(proj) {
                this.attr({
                    crs: proj,
                    srs: proj
                });
                return proj;
            }
        },
        x: {
            type: 'number',
            set(x) {
                this.attr('i', x);
                return x;
            },
            serialize(x) {
                return !this.attr('is130') ? x : undefined;
            }
        },
        y: {
            type: 'number',
            set(y) {
                this.attr('j', y);
                return y;
            },
            serialize(y) {
                return !this.attr('is130') ? y : undefined;
            }
        },
        service: {
            type: 'string',
            value: 'WMS'
        },
        version: {
            type: 'string',
            value: '1.1.1'
        },
        request: {
            type: 'string',
            value: 'GetFeatureInfo'
        },
        layers: {
            type: 'string',
            set(layers) {
                if (typeof layers !== 'string') {
                    //assume array
                    return layers.join(',');
                }
                return layers;
            }
        },
        styles: {
            set(styles) {
                if (typeof styles !== 'string') {
                    return styles.join(',');
                }
                return styles;
            }
        },
        srs: {
            type: 'string',
            serialize: function(srs) {
                return !this.attr('is130') ? srs : undefined;
            }
        },
        crs: {
            type: 'string',
            serialize: function(crs) {
                return this.attr('is130') ? crs : undefined;
            }
        },
        bbox: {
            Type: List,
            serialize(bbox) {
                return bbox && bbox.length ? bbox.join(',') : undefined;
            }
        },
        width: {
            type: 'number',
            value: 256
        },
        height: {
            type: 'number',
            value: 256
        },
        query_layers: {
            type: 'string',
            set(layers) {
                if (typeof layers !== 'string') {
                    //assume array
                    return layers.join(',');
                }
                return layers;
            },
            serialize(layers) {
                return layers || this.attr('layers');
            }
        },
        format: {
            type: 'string',
            value: 'image/png'
        },
        info_format: {
            value: 'application/json',
            type: 'string'
        },
        feature_count: {
            type: 'number',
            value: 10
        },
        i: {
            type: 'string',
            serialize(i) {
                return this.attr('is130') ? i : undefined;
            }
        },
        j: {
            type: 'string',
            serialize(j) {
                return this.attr('is130') ? j : undefined;
            }
        },
        buffer: {
            type: 'number',
            value: 5
        },
        cql_filter: {
            type: 'string'
        },
        filter: {
            type: 'string'
        },
        propertyName: {
            Type: List,
            set(props) {
                if (typeof props !== 'string') {
                    //assume array
                    return props.join(',');
                }
                return props;
            }
        },
        exceptions: {
            type: 'string',
            value: 'application/vnd.ogc.se_xml'
        }
    }
});

export default ParameterMap;
