
import { total } from './Total';

const clothing1 = [];
const clothing2 = [];
const clothing3 = [];

const addClothing1Item = () => {
    for (let i = 1; i < total.clothing1 + 1; i++) {
        clothing1.push(`../images/clothes/layer_1/${i}.png`);
    }
    return addClothing1Item;
};

const addClothing2Item = () => {
    for (let i = 1; i < total.clothing2 + 1; i++) {
        clothing2.push(`../images/clothes/layer_2/${i}.png`);
    }
    return addClothing2Item;
};

const addClothing3Item = () => {
    for (let i = 1; i < total.clothing3 + 1; i++) {
        clothing3.push(`../images/clothes/layer_3/${i}.png`);
    }
    return addClothing3Item;
};

addClothing1Item();
addClothing2Item();
addClothing3Item();

export { clothing1, clothing2, clothing3 };


