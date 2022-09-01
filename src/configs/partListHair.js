
import { total } from './total';

const hairSrcUrlArray = [];

const addHairItem = () => {
    for (let i = 1; i < total.hair + 1; i++) {
        hairSrcUrlArray.push(`../images/hair/${i}.png`);
    }
    return hairSrcUrlArray;
};

addHairItem();

export { hairSrcUrlArray };


