import React from 'react';
import {
  Page,
  ScrollView
} from 'daifee-react-component';

export default function ScrollViewPage() {
  return (
    <Page>
      <h1>ScrollView</h1>
      <ScrollView
        height='400px'
        iscrollOptions={{
          scrollbars: true
        }}>
        <div className='wrap'>
          <h2>Vertical</h2>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
          <p>哈哈哈哈哈哈</p>
        </div>
      </ScrollView>

      <br />
      <br />

      <h2>Horizontal</h2>
      <ScrollView
        className='scroll-horizontal'
        height='114px'
        iscrollOptions={{
          scrollY: false,
          scrollX: true
        }}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
      </ScrollView>
    </Page>
  );
}
