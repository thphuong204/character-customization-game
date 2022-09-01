
import { total } from './total';

const hatsSrcUrlArray = [];

const addHatItem = () => {
    for (let i = 1; i < total.hat + 1; i++) {
        hatsSrcUrlArray.push(`../images/accessories/hats/${i}.png`);
    }
    return hatsSrcUrlArray;
};

addHatItem();

export { hatsSrcUrlArray };


