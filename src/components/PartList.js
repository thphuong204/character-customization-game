import React from 'react';
import { bodySrcUrlArray } from '../configs/partListBody';
import { clothingInnerSrcUrlArray, clothingOuterSrcUrlArray, clothingExtraComponentSrcUrlArray } from '../configs/partListClothes';
import { eyesSrcUrlArray } from '../configs/partListEyes';
import { hairSrcUrlArray } from '../configs/partListHair';
import { mouthsSrcUrlArray } from '../configs/partListMouths';
import { eyebrowsSrcUrlArray } from '../configs/partListEyeBrows';
import { hatsSrcUrlArray } from '../configs/partListHats';
import { glassesSrcUrlArray } from '../configs/partListGlasses';
import { neckwearSrcUrlArray } from '../configs/partListNeckwear';

function PartList({ onChangePart }) {
    return (
        <div id="parts">
            {partSection("Body", bodySrcUrlArray, onChangePart)}
            {partSection("Hair", hairSrcUrlArray, onChangePart)}
            {partSection("Mouth", mouthsSrcUrlArray, onChangePart)}
            {partSection("Eyes", eyesSrcUrlArray, onChangePart)}
            {partSection("Eyebrows", eyebrowsSrcUrlArray, onChangePart)}
            {partSection("Clothing 1", clothingInnerSrcUrlArray, onChangePart)}
            {partSection("Clothing 2", clothingOuterSrcUrlArray, onChangePart)}
            {partSection("Clothing 3", clothingExtraComponentSrcUrlArray, onChangePart)}
            {partSection("Hat", hatsSrcUrlArray, onChangePart)}
            {partSection("Glasses", glassesSrcUrlArray, onChangePart)}
            {partSection("Neckwear", neckwearSrcUrlArray, onChangePart)}
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