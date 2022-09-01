
import { total } from './total';

const eyesSrcUrlArray = [];

const addEyesItem = () => {
    for (let i = 1; i < total.eyes + 1; i++) {
        eyesSrcUrlArray.push(`../images/eyes/${i}.png`);
    }
    return eyesSrcUrlArray;
};

addEyesItem();

export { eyesSrcUrlArray };


