
import { total } from './Total';

const neckwear = [];

const addNeckwearItem = () => {
    for (let i = 1; i < total.neckwear + 1; i++) {
        neckwear.push(`../images/accessories/neckwear/${i}.png`);
    }
    return neckwear;
};

addNeckwearItem();

export { neckwear };


