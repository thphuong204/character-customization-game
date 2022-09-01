
import { total } from './total';

const clothingInnerSrcUrlArray = [];
const clothingOuterSrcUrlArray = [];
const clothingExtraComponentSrcUrlArray = [];

const addClothing1Item = () => {
    for (let i = 1; i < total.clothing1 + 1; i++) {
        clothingInnerSrcUrlArray.push(`../images/clothes/layer_1/${i}.png`);
    }
    return clothingInnerSrcUrlArray;
};

const addClothing2Item = () => {
    for (let i = 1; i < total.clothing2 + 1; i++) {
        clothingOuterSrcUrlArray.push(`../images/clothes/layer_2/${i}.png`);
    }
    return clothingOuterSrcUrlArray;
};

const addClothing3Item = () => {
    for (let i = 1; i < total.clothing3 + 1; i++) {
        clothingExtraComponentSrcUrlArray.push(`../images/clothes/layer_3/${i}.png`);
    }
    return clothingExtraComponentSrcUrlArray;
};

addClothing1Item();
addClothing2Item();
addClothing3Item();

export { clothingInnerSrcUrlArray, clothingOuterSrcUrlArray, clothingExtraComponentSrcUrlArray };


