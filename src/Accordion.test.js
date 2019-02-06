import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';

describe('snapshot testing accordion', () => {
it('should be empty when no sections is supplied', ()=>{
  const testSections = [{
    title: 'section 1',
    content: 'E nomine'
  }]
  const tree  = renderer
  .create(<Accordion sections={null} />)
  .toJSON();
  expect(<Accordion sections={null}/>).toBe(
    <ul className="menus"></ul>
  );
});
it('should render no sections as active (BigMenu components) by default ', ()=>{
  const testSections =
});