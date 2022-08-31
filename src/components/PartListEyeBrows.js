
import { total } from './Total';

const eyebrows = [];

const addEyebrowsItem = () => {
    for (let i = 1; i < total.eyebrows + 1; i++) {
        eyebrows.push(`../images/eyebrows/${i}.png`);
    }
    return eyebrows;
};

addEyebrowsItem();

export { eyebrows };


