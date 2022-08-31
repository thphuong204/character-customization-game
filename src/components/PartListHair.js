
import { total } from './Total';

const hair = [];

const addHairItem = () => {
    for (let i = 1; i < total.hair + 1; i++) {
        hair.push(`../images/hair/${i}.png`);
    }
    return hair;
};

addHairItem();

export { hair };


