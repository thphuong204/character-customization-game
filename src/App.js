import React, { useState } from 'react';
import './App.css';
import PartList from './components/PartList';
import Avatar from './components/Avatar';

function App() {
  const [bodySrc, setBodySrc] = useState("");
  const [clothes1Src, setClothes1Src] = useState("");
  const [clothes2Src, setClothes2Src] = useState("");
  const [clothes3Src, setClothes3Src] = useState("");
  const [eyebrowsSrc, setEyebrowsSrc] = useState("");
  const [eyesSrc, setEyesSrc] = useState("");
  const [glassesSrc, setGlassesSrc] = useState("");
  const [hairSrc, setHairSrc] = useState("");
  const [hatSrc, setHatSrc] = useState("");
  const [mouthSrc, setMouthSrc] = useState("");
  const [neckwearSrc, setNeckwearSrc] = useState("");

  const onChangeBody = (bodyURL) => {
    setBodySrc(bodyURL);
  }

  return (
    <>
      <div id="title">
        <div className="line1">Character
          <span></span>
        </div>
        <div className="line2">👗 👒 👜 🎀 Customization 🧢 👖 👔 👞 </div>
      </div>
      <div id="content">
        <Avatar bodySrc={bodySrc} />
        <PartList onChangeBody={onChangeBody}/*Render list of selection parts*/ />
      </div>
    </>
  );
}

export default App;
