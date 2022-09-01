import React from 'react';


function AvatarRender({ avatarSrc }) {
    return avatarSrc ? (<img src={avatarSrc} alt="" />) : ""
}

export default AvatarRender;