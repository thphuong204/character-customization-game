import './App.css';
import PartListBody, { body } from './components/PartListBody';

function App(body) {
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
          <div className="avatar">
            <img src="../images/body/1.png" alt="Why" />
            <img src="../images/eyes/1.png" alt="" />
            <img src="../images/eyebrows/1.png" alt="" />
            <img src="../images/mouths/1.png" alt="" />
            <img src="../images/noses/1.png" alt="" />
            <img src="../images/hair/1.png" alt="" />
            <img src="../images/facial_hair/2.png" alt="" />
            <img src="../images/accessories/earrings/2.png" alt="" />
            <img src="../images/accessories/glasses/2.png" alt="" />
            <img src="../images/accessories/hats/2.png" alt="" />
            <img src="../images/accessories/neckwear/2.png" alt="" />
            <img src="../images/clothes/layer_2/1.png" alt="" />
          </div>
          <div className="button">
            <button>RANDOMIZE</button>
          </div>
        </div>
        <div id="parts">
          <div className="part-section">
            <div className="part-header">Body</div>
            <div className="part-list">
              {body.map((obj) => (
                <PartListBody key={obj} source={obj} />
              ))}
            </div>
          </div>
          <div className="part-section">
            <div className="part-header">Eyes</div>
            <div className="part-list">
              <img className="part-square" src="../images/body/1.png" alt="Can't"></img>
            </div>
          </div>
          <div className="part-section">
            <div className="part-header">Hair</div>
            <div className="part-list">
              <img className="part-square" src="../images/body/1.png" alt="Can't"></img>
            </div>
          </div>

          <div className="part-section">
            <div className="part-header">Mouth</div>
            <div className="part-list">
              <img className="part-square" src="../images/body/1.png" alt="Can't"></img>
            </div>
          </div>
          <div className="part-section">
            <div className="part-header"></div>
            <div className="part-list">
              <img className="part-square" src="../images/body/1.png" alt="Can't"></img>
            </div>
          </div>
          <div className="part-section">
            <div className="part-header"></div>
            <div className="part-list">
              <img className="part-square" src="../images/body/1.png" alt="Can't"></img>
            </div>
          </div>

          <div className="part-section">
            <div className="part-header"></div>
            <div className="part-list">
              <img className="part-square" src="../images/body/1.png" alt="Can't"></img>
            </div>
          </div>

          <div className="part-section">
            <div className="part-header"></div>
            <div className="part-list">
              <img className="part-square" src="../images/body/1.png" alt="Can't"></img>
            </div>
          </div>

          <div className="part-section">
            <div className="part-header"></div>
            <div className="part-list">
              <img className="part-square" src="../images/body/1.png" alt="Can't"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
