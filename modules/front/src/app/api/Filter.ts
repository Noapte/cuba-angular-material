import {EntityFilter, Condition, OperatorType} from '@cuba-platform/rest/dist-node/cuba';

export class Filter implements EntityFilter {
  conditions = [];

  constructor(propertyName: string, value: string, operationType: OperatorType = 'contains') {
    const condition: Condition = {
      property: propertyName,
      operator: operationType,
      value: value
    };
    this.conditions = [condition];
  }
}
