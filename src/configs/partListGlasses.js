
import { total } from './total';

const glassesSrcUrlArray = [];

const addGlassesItem = () => {
    for (let i = 1; i < total.glasses + 1; i++) {
        glassesSrcUrlArray.push(`../images/accessories/glasses/${i}.png`);
    }
    return glassesSrcUrlArray;
};

addGlassesItem();

export { glassesSrcUrlArray };


