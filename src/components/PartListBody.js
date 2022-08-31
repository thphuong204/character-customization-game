
import { total } from './Total';

const body = [];

const addBodyItem = () => {
    for (let i = 1; i < total.body + 1; i++) {
        body.push(`../images/body/${i}.png`);
    }
    return body;
};

addBodyItem();

export { body };


