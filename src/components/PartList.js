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


//create PartRender to use for PartList
function PartRender({ source, onSourceChange }) {
    return (
        <img className="part-square" src={source} alt="Img can't be seen" onClick={() => onSourceChange()}></img>
    )
}


function PartList({ onChangePart }) {

    return (
        <div id="parts">
            <div className="part-section">
                <div className="part-header">Body</div>
                <div className="part-list">
                    {body.map((obj) => (
                        <PartRender key={obj} source={obj} onSourceChange={() => onChangePart(obj)} />
                    ))}
                </div>
            </div>
            <div className="part-section">
                <div className="part-header">Eyes</div>
                <div className="part-list">
                    {eyes.map((obj) => (
                        <PartRender key={obj} source={obj} onSourceChange={() => onChangePart(obj)} />
                    ))}
                </div>
            </div>
            <div className="part-section">
                <div className="part-header">Hair</div>
                <div className="part-list">
                    {hair.map((obj) => (
                        <PartRender key={obj} source={obj} onSourceChange={() => onChangePart(obj)} />
                    ))}
                </div>
            </div>
            <div className="part-section">
                <div className="part-header">Mouth</div>
                <div className="part-list">
                    {mouths.map((obj) => (
                        <PartRender key={obj} source={obj} onSourceChange={() => onChangePart(obj)} />
                    ))}
                </div>
            </div>

            <div className="part-section">
                <div className="part-header">Eyebrows</div>
                <div className="part-list">
                    {eyebrows.map((obj) => (
                        <PartRender key={obj} source={obj} onSourceChange={() => onChangePart(obj)} />
                    ))}
                </div>
            </div>

            <div className="part-section">
                <div className="part-header">Clothing 1</div>
                <div className="part-list">
                    {clothing1.map((obj) => (
                        <PartRender key={obj} source={obj} onSourceChange={() => onChangePart(obj)} />
                    ))}
                </div>
            </div>
            <div className="part-section">
                <div className="part-header">Clothing 2</div>
                <div className="part-list">
                    {clothing2.map((obj) => (
                        <PartRender key={obj} source={obj} onSourceChange={() => onChangePart(obj)} />
                    ))}
                </div>
            </div>

            <div className="part-section">
                <div className="part-header">Clothing 3</div>
                <div className="part-list">
                    {clothing3.map((obj) => (
                        <PartRender key={obj} source={obj} onSourceChange={() => onChangePart(obj)} />
                    ))}
                </div>
            </div>

            <div className="part-section">
                <div className="part-header">Hat</div>
                <div className="part-list">
                    {hats.map((obj) => (
                        <PartRender key={obj} source={obj} onSourceChange={() => onChangePart(obj)} />
                    ))}
                </div>
            </div>

            <div className="part-section">
                <div className="part-header">Glasses</div>
                <div className="part-list">
                    {glasses.map((obj) => (
                        <PartRender key={obj} source={obj} onSourceChange={() => onChangePart(obj)} />
                    ))}
                </div>
            </div>

            <div className="part-section">
                <div className="part-header">Neckwear</div>
                <div className="part-list">
                    {neckwear.map((obj) => (
                        <PartRender key={obj} source={obj} onSourceChange={() => onChangePart(obj)} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default PartList;