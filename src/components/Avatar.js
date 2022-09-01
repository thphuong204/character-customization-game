import React from 'react';
import App from '../App';
import AvatarRender from './AvatarRender';

function Avatar({ bodySrc, eyesSrc, eyebrowsSrc, mouthSrc, clothes1Src, clothes2Src, glassesSrc, clothes3Src, hairSrc, hatSrc, neckwearSrc }) {
    return (
        <>
            <div className="avatar-group">
                <div className="avatar">
                    <AvatarRender key="avtBody" avatarSrc={bodySrc} style={{ zIndex: "1" }} />
                    <AvatarRender key="avtEyes" avatarSrc={eyesSrc} style={{ zIndex: "2" }} />
                    <AvatarRender key="avtEyebrows" avatarSrc={eyebrowsSrc} style={{ zIndex: "2" }} />
                    <AvatarRender key="avtMouth" avatarSrc={mouthSrc} style={{ zIndex: "2" }} />
                    <AvatarRender key="avtNose" avatarSrc="../images/noses/1.png" style={{ zIndex: "2" }} />
                    <AvatarRender key="avtClothes1" avatarSrc={clothes1Src} style={{ zIndex: "2" }} />
                    <AvatarRender key="avtClothes2" avatarSrc={clothes2Src} style={{ zIndex: "3" }} />
                    <AvatarRender key="avtGlasses" avatarSrc={glassesSrc} style={{ zIndex: "3" }} />
                    <AvatarRender key="avtClothes3" avatarSrc={clothes3Src} style={{ zIndex: "4" }} />
                    <AvatarRender key="avtHair" avatarSrc={hairSrc} style={{ zIndex: "4" }} />
                    <AvatarRender key="avtHats" avatarSrc={hatSrc} style={{ zIndex: "5" }} />
                    <AvatarRender key="avtNeckwear" avatarSrc={neckwearSrc} style={{ zIndex: "5" }} />
                </div>
                <div className="button">
                    <button>RANDOMIZE</button>
                </div>
            </div>
        </>
    )
}

export default Avatar;

