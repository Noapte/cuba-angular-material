import {Filter} from './Filter';


describe('Filter', () => {
  it('should create conditions with default operation type', () => {
    const test = new Filter('a', 'b').getConditions();

    const condition = {
      property: 'a',
      operator: 'contains',
      value: 'b'
    };
    const expected = {'conditions': [condition]};

    expect(test).toEqual(expected);
  });

  it('should create conditions with given operation type', () => {
    const test = new Filter('a', 'b', '=').getConditions();

    const condition = {
      property: 'a',
      operator: '=',
      value: 'b'
    };
    const expected = {'conditions': [condition]};

    expect(test).toEqual(expected);
  });
});
