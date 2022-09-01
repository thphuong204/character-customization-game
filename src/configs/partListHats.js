
import { total } from './total';

const hats = [];

const addHatItem = () => {
    for (let i = 1; i < total.hat + 1; i++) {
        hats.push(`../images/accessories/hats/${i}.png`);
    }
    return hats;
};

addHatItem();

export { hats };


