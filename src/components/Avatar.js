import React from 'react';
import { AvatarBody } from './AvatarComponents';
import { avatarSrc } from './PartList';

function Avatar() {
    return (
        <>
            <div className="avatar-group">
                <div className="avatar">
                    <AvatarBody key={new Date().toLocaleString()} src={avatarSrc} />
                    <img key="avtEyes" src="../images/eyes/1.png" alt="" style={{ zIndex: "2" }} />
                    {/* <img id="avtEyebrows" src="../images/eyebrows/1.png" alt="" style={{ zIndex: "2" }} /> */}
                    {/* <img id="avtMouth" src="../images/mouths/2.png" alt="" style={{ zIndex: "2" }} /> */}
                    {/* <img id="avtNose" src="../images/noses/1.png" alt="" style={{ zIndex: "2" }} /> */}
                    <img id="avtClothes1" src="../images/clothes/layer_1/1.png" alt="" style={{ zIndex: "2" }} />
                    <img id="avtClothes2" src="../images/clothes/layer_2/2.png" alt="" style={{ zIndex: "3" }} />
                    {/* <img id="avtGlasses" src="../images/accessories/glasses/5.png" alt="" style={{ zIndex: "3" }} /> */}
                    <img id="avtClothes3" src="../images/clothes/layer_3/5.png" alt="" style={{ zIndex: "4" }} />
                    {/* <img id="avtHair" src="../images/hair/1.png" alt="" style={{ zIndex: "4" }} /> */}
                    {/* <img id="avtHats" src="../images/accessories/hats/12.png" alt="" style={{ zIndex: "5" }} /> */}
                    {/* <img id="avtNeckwear" src="../images/accessories/neckwear/2.png" alt="" style={{ zIndex: "5" }} /> */}
                </div>
                <div className="button">
                    <button>RANDOMIZE</button>
                </div>
            </div>
        </>
    )
}

export default Avatar;

