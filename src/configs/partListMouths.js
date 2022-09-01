
import { total } from './total';

const mouths = [];

const addMouthItem = () => {
    for (let i = 1; i < total.mouth + 1; i++) {
        mouths.push(`../images/mouths/${i}.png`);
    }
    return mouths;
};

addMouthItem();

export { mouths };


