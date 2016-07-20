import q from 'steal-qunit';
import { ParameterMap } from './Params';

let params;

q.module('lib/Params.ParameterMap', {
    beforeEach() {
        params = new ParameterMap();
    },
    afterEach() {
        params = null;
    }
});
