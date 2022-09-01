
import { total } from './total';

const neckwearSrcUrlArray = [];

const addNeckwearItem = () => {
    for (let i = 1; i < total.neckwear + 1; i++) {
        neckwearSrcUrlArray.push(`../images/accessories/neckwear/${i}.png`);
    }
    return neckwearSrcUrlArray;
};

addNeckwearItem();

export { neckwearSrcUrlArray };


