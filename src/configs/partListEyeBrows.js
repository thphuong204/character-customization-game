
import { total } from './total';

const eyebrowsSrcUrlArray = [];

const addEyebrowsItem = () => {
    for (let i = 1; i < total.eyebrows + 1; i++) {
        eyebrowsSrcUrlArray.push(`../images/eyebrows/${i}.png`);
    }
    return eyebrowsSrcUrlArray;
};

addEyebrowsItem();

export { eyebrowsSrcUrlArray };


