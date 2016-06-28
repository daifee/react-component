import {expect} from 'chai';
import TransitionShow from '../src/TransitionShow';
import {shallow} from 'enzyme';
import React from 'react';

describe.only('TransitionShow.js', () => {
  it('隐藏 show=false', () => {
    let wrapper = shallow(
      <TransitionShow transitionName='da' duration={43}>
        <div id='TransitionShow' />
      </TransitionShow>
    );

    expect(wrapper.find('#TransitionShow')).to.have.length(0);
  });

  it('显示 show=true', () => {
    let wrapper = shallow(
      <TransitionShow show={true} transitionName='transition' duration={2000}>
        <div id='TransitionShow' />
      </TransitionShow>
    );

    expect(wrapper.find('#TransitionShow')).to.have.length(1);
  });
});
