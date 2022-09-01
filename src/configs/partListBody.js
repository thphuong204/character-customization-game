
import { total } from './total';

const bodySrcUrlArray = [];

const addBodyItem = () => {
    for (let i = 1; i < total.body + 1; i++) {
        bodySrcUrlArray.push(`../images/body/${i}.png`);
    }
    return bodySrcUrlArray;
};

addBodyItem();

export { bodySrcUrlArray };


