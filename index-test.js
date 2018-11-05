import { assert } from 'chai';
import { data2 } from './data';

const {
  manualSort,
  manualSortSync,
} = require('./index');

setTimeout(() => {
  describe('esm', () => {

    it('sync', () => {
      assert.equal(
        manualSortSync({
          data: data2,
          fromIndex: 2,
          toIndex: 1,
        })[1],

        'loaded'
      );
    });

    it('async', (done) => {
      manualSort({
        data: data2,
          fromIndex: 2,
          toIndex: 1,
      }).then((rslt) => {
        assert.equal(
          rslt[1],
          'loaded'
        );

        done();
      }).catch((err) => {
        throw err;
      });
    });

  });

  run();
}, 0);
