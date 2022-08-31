import React from 'react';
import { body } from './PartListBody';
import { clothing1, clothing2, clothing3 } from './PartListClothes';
import { eyes } from './PartListEyes';
import { hair } from './PartListHair';
import { mouths } from './PartListMouths';
import { eyebrows } from './PartListEyeBrows';
import { hats } from './PartListHats';
import { glasses } from './PartListGlasses';
import { neckwear } from './PartListNeckwear';



//create PartRender to use for PartList
function PartRender({ source }) {
    return (
        <img className="part-square" src={source} alt="Img can't be seen" onClick={HanldleClick}></img>
    )
}

// 
let avatarSrc = "";
let sectionName = "";
const HanldleClick = (e) => {
    avatarSrc = (e.target).getAttribute("src");
    sectionName = (e.target).parentElement.previousElementSibling.innerHTML;
    console.log("avtSrc: ", avatarSrc);
    console.log("sectionName: ", sectionName);
}


function PartList() {
    return (
        <div id="parts">
            <div className="part-section">
                <div className="part-header">Body</div>
                <div className="part-list">
                    {body.map((obj) => (
                        <PartRender key={obj} source={obj} />
                    ))}
                </div>
            </div>
            <div className="part-section">
                <div className="part-header">Eyes</div>
                <div className="part-list">
                    {eyes.map((obj) => (
                        <PartRender key={obj} source={obj} />
                    ))}
                </div>
            </div>
            <div className="part-section">
                <div className="part-header">Hair</div>
                <div className="part-list">
                    {hair.map((obj) => (
                        <PartRender key={obj} source={obj} />
                    ))}
                </div>
            </div>
            <div className="part-section">
                <div className="part-header">Mouth</div>
                <div className="part-list">
                    {mouths.map((obj) => (
                        <PartRender key={obj} source={obj} />
                    ))}
                </div>
            </div>

            <div className="part-section">
                <div className="part-header">Eyebrows</div>
                <div className="part-list">
                    {eyebrows.map((obj) => (
                        <PartRender key={obj} source={obj} />
                    ))}
                </div>
            </div>

            <div className="part-section">
                <div className="part-header">Clothing 1</div>
                <div className="part-list">
                    {clothing1.map((obj) => (
                        <PartRender key={obj} source={obj} />
                    ))}
                </div>
            </div>
            <div className="part-section">
                <div className="part-header">Clothing 2</div>
                <div className="part-list">
                    {clothing2.map((obj) => (
                        <PartRender key={obj} source={obj} />
                    ))}
                </div>
            </div>

            <div className="part-section">
                <div className="part-header">Clothing 3</div>
                <div className="part-list">
                    {clothing3.map((obj) => (
                        <PartRender key={obj} source={obj} />
                    ))}
                </div>
            </div>

            <div className="part-section">
                <div className="part-header">Hat</div>
                <div className="part-list">
                    {hats.map((obj) => (
                        <PartRender key={obj} source={obj} />
                    ))}
                </div>
            </div>

            <div className="part-section">
                <div className="part-header">Glasses</div>
                <div className="part-list">
                    {glasses.map((obj) => (
                        <PartRender key={obj} source={obj} />
                    ))}
                </div>
            </div>

            <div className="part-section">
                <div className="part-header">Neckwear</div>
                <div className="part-list">
                    {neckwear.map((obj) => (
                        <PartRender key={obj} source={obj} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default PartList;
export { avatarSrc, sectionName };