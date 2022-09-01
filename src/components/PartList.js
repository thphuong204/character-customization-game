import React from 'react';
import { body } from '../configs/partListBody';
import { clothing1, clothing2, clothing3 } from '../configs/partListClothes';
import { eyes } from '../configs/partListEyes';
import { hair } from '../configs/partListHair';
import { mouths } from '../configs/partListMouths';
import { eyebrows } from '../configs/partListEyeBrows';
import { hats } from '../configs/partListHats';
import { glasses } from '../configs/partListGlasses';
import { neckwear } from '../configs/partListNeckwear';

function PartList({ onChangePart }) {
    return (
        <div id="parts">
            {partSection("Body", body, onChangePart)}
            {partSection("Hair", hair, onChangePart)}
            {partSection("Mouth", mouths, onChangePart)}
            {partSection("Eyes", eyes, onChangePart)}
            {partSection("Eyebrows", eyebrows, onChangePart)}
            {partSection("Clothing 1", clothing1, onChangePart)}
            {partSection("Clothing 2", clothing2, onChangePart)}
            {partSection("Clothing 3", clothing3, onChangePart)}
            {partSection("Hat", hats, onChangePart)}
            {partSection("Glasses", glasses, onChangePart)}
            {partSection("Neckwear", neckwear, onChangePart)}
        </div>
    )
}

// create partSection for declutterations
function partSection(partName, partArr, onChangePart) {
    return (
        <div className="part-section">
            <div className="part-header">{partName}</div>
            <div className="part-list">
                {partArr.map((obj) => (
                    <PartRender key={obj} source={obj} onSourceChange={() => onChangePart(obj)} />
                ))}
            </div>
        </div>
    )
}

//create PartRender to use in PartSection
function PartRender({ source, onSourceChange }) {
    return (
        <img className="part-square" src={source} alt="Img can't be seen" onClick={() => onSourceChange()}></img>
    )
}

export default PartList;