import {expect} from 'chai';
import {classNames, createInstance} from '../src/utils';
import config from '../src/config';

const {namespace} = config;

describe('utils.js 功能函数', () => {
  it('classNames()', () => {
    let classes = classNames('cl-1', {
      'cl-2': true,
      'cl-3': false,
      'cl-4': 'cl-4',
      '_user': 'user'
    }, 'cl-5');
    expect(classes).to.be.equal(`${namespace}-cl-1 ${namespace}-cl-2 ${namespace}-cl-4 user ${namespace}-cl-5`);
  });

  it('createInstance');
});
