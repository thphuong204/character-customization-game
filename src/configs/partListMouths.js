
import { total } from './total';

const mouthsSrcUrlArray = [];

const addMouthItem = () => {
    for (let i = 1; i < total.mouth + 1; i++) {
        mouthsSrcUrlArray.push(`../images/mouths/${i}.png`);
    }
    return mouthsSrcUrlArray;
};

addMouthItem();

export { mouthsSrcUrlArray };


