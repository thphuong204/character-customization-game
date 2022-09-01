import React, { useEffect, useState } from 'react';
import './App.css';
import PartList from './components/PartList';
import Avatar from './components/Avatar';
import { body } from './components/PartListBody';
import { eyes } from './components/PartListEyes';
import { eyebrows } from './components/PartListEyeBrows';
import { mouths } from './components/PartListMouths';
import { clothing1, clothing2, clothing3 } from './components/PartListClothes';
import { glasses } from './components/PartListGlasses';
import { hair } from './components/PartListHair';
import { hats } from './components/PartListHats';
import { neckwear } from './components/PartListNeckwear';

function App() {
  const [bodySrc, setBodySrc] = useState("");
  const [eyesSrc, setEyesSrc] = useState("");
  const [eyebrowsSrc, setEyebrowsSrc] = useState("");
  const [mouthSrc, setMouthSrc] = useState("");
  const [clothes1Src, setClothes1Src] = useState("");
  const [clothes2Src, setClothes2Src] = useState("");
  const [clothes3Src, setClothes3Src] = useState("");
  const [glassesSrc, setGlassesSrc] = useState("");
  const [hairSrc, setHairSrc] = useState("");
  const [hatSrc, setHatSrc] = useState("");
  const [neckwearSrc, setNeckwearSrc] = useState("");

  const onChangePart = (url) => {
    if (url.includes("body")) {
      setBodySrc(url);
    }
    if (url.includes("eyes")) {
      setEyesSrc(url);
    }
    if (url.includes("eyebrows")) {
      setEyebrowsSrc(url);
    }
    if (url.includes("mouths")) {
      setMouthSrc(url);
    }
    if (url.includes("layer_1")) {
      setClothes1Src(url);
    }
    if (url.includes("layer_2")) {
      setClothes2Src(url);
    }
    if (url.includes("layer_3")) {
      setClothes3Src(url);
    }
    if (url.includes("glasses")) {
      setGlassesSrc(url);
    }
    if (url.includes("hair")) {
      setHairSrc(url);
    }
    if (url.includes("hats")) {
      setHatSrc(url);
    }
    if (url.includes("neckwear")) {
      setNeckwearSrc(url);
    }
  }

  const onRandomize = () => {
    setBodySrc(body[Math.floor(Math.random() * body.length)])
    setEyesSrc(eyes[Math.floor(Math.random() * eyes.length)])
    setEyebrowsSrc(eyebrows[Math.floor(Math.random() * eyebrows.length)])
    setMouthSrc(mouths[Math.floor(Math.random() * mouths.length)])
    setClothes1Src(clothing1[Math.floor(Math.random() * clothing1.length)])
    setClothes2Src(clothing2[Math.floor(Math.random() * clothing2.length)])
    setClothes3Src(clothing3[Math.floor(Math.random() * clothing3.length)])
    setGlassesSrc(glasses[Math.floor(Math.random() * glasses.length)])
    setHairSrc(hair[Math.floor(Math.random() * hair.length)])
    setHatSrc(hats[Math.floor(Math.random() * hats.length)])
    setNeckwearSrc(neckwear[Math.floor(Math.random() * neckwear.length)])
  }

  useEffect(() => {
    onRandomize()
  }, [])


  return (
    <>
      <div id="title">
        <div className="line1">Character
          <span></span>
        </div>
        <div className="line2">👗 👒 👜 🎀 Customization 🧢 👖 👔 👞 </div>
      </div>
      <div id="content">
        <div className="avatar-group">
          <Avatar
            bodySrc={bodySrc}
            eyesSrc={eyesSrc}
            eyebrowsSrc={eyebrowsSrc}
            mouthSrc={mouthSrc}
            clothes1Src={clothes1Src}
            clothes2Src={clothes2Src}
            clothes3Src={clothes3Src}
            glassesSrc={glassesSrc}
            hairSrc={hairSrc}
            hatSrc={hatSrc}
            neckwearSrc={neckwearSrc}
          />
          <div className="button">
            <button onClick={onRandomize}>RANDOMIZE</button>
          </div>
        </div>
        <PartList onChangePart={onChangePart}/*Render list of selection parts*/ />
      </div>
    </>
  );
}

export default App;
