import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useContext } from "react";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini API Chatbot by Emanuel Ionescu</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                Suggest ideas for beautiful places to travel.
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                Briefly summarize &quot;Moara cu noroc&quot;.
                <img src={assets.pen_icon} alt="" />
              </div>
              <div className="card">
                Improve the readabilty of the following code.
                <img src={assets.code_icon} alt="" />
              </div>
              <div className="card">
                Brainstorm gift ideas for my friend&apos;s birthday.
                <img src={assets.bulb_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <>
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                </>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Enter a prompt here..."
            />
            <div>
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            This model may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
