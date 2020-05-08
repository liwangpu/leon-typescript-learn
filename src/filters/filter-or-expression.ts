import { FilterLogicalMultipleExpression } from './filter-logical-multiple-expression';
import { FilterExpression } from './filter-expression';

export class FilterOrExpression extends FilterLogicalMultipleExpression {

    public constructor(children: Array<FilterExpression>) {
        super(children);
    }
}