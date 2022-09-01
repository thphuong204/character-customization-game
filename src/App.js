import React, { useEffect, useState } from 'react';
import './App.css';
import PartList from './components/PartList';
import Avatar from './components/Avatar';
import { bodySrcUrlArray } from './configs/partListBody';
import { eyesSrcUrlArray } from './configs/partListEyes';
import { eyebrowsSrcUrlArray } from './configs/partListEyeBrows';
import { mouthsSrcUrlArray } from './configs/partListMouths';
import { clothingExtraComponentSrcUrlArray, clothingInnerSrcUrlArray, clothingOuterSrcUrlArray } from './configs/partListClothes';
import { glassesSrcUrlArray } from './configs/partListGlasses';
import { hairSrcUrlArray } from './configs/partListHair';
import { hatsSrcUrlArray } from './configs/partListHats';
import { neckwearSrcUrlArray } from './configs/partListNeckwear';

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
    setBodySrc(bodySrcUrlArray[Math.floor(Math.random() * bodySrcUrlArray.length)])
    setEyesSrc(eyesSrcUrlArray[Math.floor(Math.random() * eyesSrcUrlArray.length)])
    setEyebrowsSrc(eyebrowsSrcUrlArray[Math.floor(Math.random() * eyebrowsSrcUrlArray.length)])
    setMouthSrc(mouthsSrcUrlArray[Math.floor(Math.random() * mouthsSrcUrlArray.length)])
    setClothes1Src(clothingInnerSrcUrlArray[Math.floor(Math.random() * clothingInnerSrcUrlArray.length)])
    setClothes2Src(clothingOuterSrcUrlArray[Math.floor(Math.random() * clothingOuterSrcUrlArray.length)])
    setClothes3Src(clothingExtraComponentSrcUrlArray[Math.floor(Math.random() * clothingExtraComponentSrcUrlArray.length)])
    setGlassesSrc(glassesSrcUrlArray[Math.floor(Math.random() * glassesSrcUrlArray.length)])
    setHairSrc(hairSrcUrlArray[Math.floor(Math.random() * hairSrcUrlArray.length)])
    setHatSrc(hatsSrcUrlArray[Math.floor(Math.random() * hatsSrcUrlArray.length)])
    setNeckwearSrc(neckwearSrcUrlArray[Math.floor(Math.random() * neckwearSrcUrlArray.length)])
  }

  useEffect(() => {
    onRandomize()
  }, [])


  return (
    <>
      <div id="title">
        <div className="line1">Wearing Game
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
