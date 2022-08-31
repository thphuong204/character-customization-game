
import { total } from './Total';

const eyes = [];

const addEyesItem = () => {
    for (let i = 1; i < total.eyes + 1; i++) {
        eyes.push(`../images/eyes/${i}.png`);
    }
    return eyes;
};

addEyesItem();

export { eyes };


