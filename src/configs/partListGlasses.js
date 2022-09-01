
import { total } from './total';

const glasses = [];

const addGlassesItem = () => {
    for (let i = 1; i < total.glasses + 1; i++) {
        glasses.push(`../images/accessories/glasses/${i}.png`);
    }
    return glasses;
};

addGlassesItem();

export { glasses };


