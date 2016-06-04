import * as components from '../src';
import {expect} from 'chai';
import {Component} from 'react';

describe('index.js 入口', () => {
  it('所有组件都是 stateless 组件', () => {
    let keys = Object.keys(components);

    // 目前肯定不少于 10 个组件
    expect(keys.length).to.be.above(10);
    keys.forEach((key) => {
      expect(components[key]).to.be.a('function');
      expect(Object.getPrototypeOf(components[key])).to.not.equal(Component);
    });
  });
});

