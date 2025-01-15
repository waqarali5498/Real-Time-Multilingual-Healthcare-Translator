// import React, { useState, useEffect } from "react";
// import useSpeechRecognition from "../hooks/useSpeechRecognitionHook";

// const YourComponent = () => {
//   const {
//     text,
//     translatedText,
//     isListening,
//     error,
//     startListening,
//     stopListening,
//     hasRecognitionSupport,
//     speakText,
//     translate,
//   } = useSpeechRecognition();

//   const [inputLanguage, setInputLanguage] = useState("en-US");
//   const [targetLanguage, setTargetLanguage] = useState("es");

//   useEffect(() => {
//     console.log("Transcript updated:", text);
//   }, [text]);

//   const handleStartListening = () => {
//     console.log(
//       "Calling startListening function with input language:",
//       inputLanguage
//     );
//     startListening(inputLanguage);
//   };

//   const handleTranslate = () => {
//     console.log(
//       "Calling translate function with target language:",
//       targetLanguage
//     );
//     translate(targetLanguage);
//   };

//   return (
//     <div>
//       {hasRecognitionSupport ? (
//         <>
//           <div>
//             <label htmlFor="inputLanguage">Input Language: </label>
//             <select
//               id="inputLanguage"
//               value={inputLanguage}
//               onChange={(e) => setInputLanguage(e.target.value)}
//             >
//               <option value="en-US">English</option>
//               <option value="es-ES">Spanish</option>
//               <option value="fr-FR">French</option>
//               <option value="de-DE">German</option>
//               <option value="zh-CN">Chinese</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="targetLanguage">Target Language: </label>
//             <select
//               id="targetLanguage"
//               value={targetLanguage}
//               onChange={(e) => setTargetLanguage(e.target.value)}
//             >
//               <option value="en">English</option>
//               <option value="es">Spanish</option>
//               <option value="fr">French</option>
//               <option value="de">German</option>
//               <option value="zh">Chinese</option>
//             </select>
//           </div>
//           <div>
//             <button onClick={handleStartListening} disabled={isListening}>
//               Start Listening
//             </button>
//             <button onClick={stopListening} disabled={!isListening}>
//               Stop Listening
//             </button>
//             <button onClick={handleTranslate} disabled={!text}>
//               Translate
//             </button>
//             <button
//               onClick={() => speakText(translatedText, targetLanguage)}
//               disabled={!translatedText}
//             >
//               Speak Translated Text
//             </button>
//           </div>
//           {isListening && <p>Listening...</p>}
//           {error && <p style={{ color: "red" }}>Error: {error}</p>}
//           <p>Transcript: {text}</p>
//           <p>Translated Text: {translatedText}</p>
//         </>
//       ) : (
//         <p>Speech recognition is not supported in this browser.</p>
//       )}
//     </div>
//   );
// };

// export default YourComponent;

//----

//Enhanced Complete without styling

// import React, { useState, useEffect } from "react";
// import useSpeechRecognition from "../hooks/useSpeechRecognitionHook";

// const MainComponent = () => {
//   const {
//     text,
//     // enhancedText,
//     translatedText,
//     isListening,
//     error,
//     startListening,
//     stopListening,
//     hasRecognitionSupport,
//     speakText,
//     translate,
//   } = useSpeechRecognition();

//   const [inputLanguage, setInputLanguage] = useState("en-US");
//   const [targetLanguage, setTargetLanguage] = useState("es");

//   useEffect(() => {
//     console.log("Transcript updated:", text);
//   }, [text]);

//   const handleStartListening = () => {
//     console.log(
//       "Calling startListening function with input language:",
//       inputLanguage
//     );
//     startListening(inputLanguage);
//   };

//   const handleTranslate = () => {
//     console.log(
//       "Calling translate function with target language:",
//       targetLanguage
//     );
//     translate(targetLanguage);
//   };

//   return (
//     <div>
//       {hasRecognitionSupport ? (
//         <>
//           <div>
//             <label htmlFor="inputLanguage">Input Language: </label>
//             <select
//               id="inputLanguage"
//               value={inputLanguage}
//               onChange={(e) => setInputLanguage(e.target.value)}
//             >
//               <option value="en-US">English</option>
//               <option value="es-ES">Spanish</option>
//               <option value="fr-FR">French</option>
//               <option value="de-DE">German</option>
//               <option value="zh-CN">Chinese</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="targetLanguage">Target Language: </label>
//             <select
//               id="targetLanguage"
//               value={targetLanguage}
//               onChange={(e) => setTargetLanguage(e.target.value)}
//             >
//               <option value="en">English</option>
//               <option value="es">Spanish</option>
//               <option value="fr">French</option>
//               <option value="de">German</option>
//               <option value="zh">Chinese</option>
//             </select>
//           </div>
//           <div>
//             <button
//               className="border"
//               onClick={handleStartListening}
//               disabled={isListening}
//             >
//               Start Listening
//             </button>
//             <button
//               className="border"
//               onClick={stopListening}
//               disabled={!isListening}
//             >
//               Stop Listening
//             </button>
//             <button
//               className="border"
//               onClick={handleTranslate}
//               // disabled={!enhancedText}
//             >
//               Translate
//             </button>
//             <button
//               onClick={() => speakText(translatedText, targetLanguage)}
//               disabled={!translatedText}
//               className="border"
//             >
//               Speak Translated Text
//             </button>
//           </div>
//           {isListening && <p>Listening...</p>}
//           {error && <p style={{ color: "red" }}>Error: {error}</p>}
//           <div>
//             <h3>Original Transcript:</h3>
//             <p>{text}</p>
//           </div>
//           <div>
//             <h3>Enhanced Transcript:</h3>
//             {/* <p>{enhancedText}</p> */}
//           </div>
//           <div>
//             <h3>Translated Text:</h3>
//             <p>{translatedText}</p>
//           </div>
//         </>
//       ) : (
//         <p>Speech recognition is not supported in this browser.</p>
//       )}
//     </div>
//   );
// };

// export default MainComponent;

// Styled Complete
import React, { useState, useEffect } from "react";
import useSpeechRecognition from "../hooks/useSpeechRecognitionHook";

const MainComponent = () => {
  const {
    text,
    enhancedText,
    translatedText,
    isListening,
    error,
    startListening,
    stopListening,
    hasRecognitionSupport,
    speakText,
    translate,
  } = useSpeechRecognition();

  const [inputLanguage, setInputLanguage] = useState("en-US");
  const [targetLanguage, setTargetLanguage] = useState("es");

  useEffect(() => {
    console.log("Transcript updated:", text);
  }, [text]);

  const handleStartListening = () => {
    console.log(
      "Calling startListening function with input language:",
      inputLanguage
    );
    startListening(inputLanguage);
  };

  const handleTranslate = () => {
    console.log(
      "Calling translate function with target language:",
      targetLanguage
    );
    translate(targetLanguage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-600 to-blue-700 p-4 text-white">
      {hasRecognitionSupport ? (
        <>
          <h1 className="text-4xl text-center mb-8">Nao Medical Assessment</h1>
          <div className="flex flex-col lg:flex-row lg:space-x-4 mb-8">
            <div className="mb-4 lg:mb-0 lg:w-1/2">
              <label htmlFor="inputLanguage" className="block mb-2">
                Input Language:
              </label>
              <select
                id="inputLanguage"
                value={inputLanguage}
                onChange={(e) => setInputLanguage(e.target.value)}
                className="w-full p-2 rounded bg-white text-black"
              >
                <option value="en-US">English</option>
                <option value="es-ES">Spanish</option>
                <option value="fr-FR">French</option>
                <option value="de-DE">German</option>
                <option value="zh-CN">Chinese</option>
              </select>
              <label htmlFor="targetLanguage" className="block mt-4 mb-2">
                Target Language:
              </label>
              <select
                id="targetLanguage"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className="w-full p-2 rounded bg-white text-black"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2 lg:w-1/2">
              <button
                onClick={handleStartListening}
                disabled={isListening}
                className="p-2 rounded bg-green-500 hover:bg-green-600 disabled:bg-gray-400"
              >
                Start Listening
              </button>
              <button
                onClick={stopListening}
                disabled={!isListening}
                className="p-2 rounded bg-red-500 hover:bg-red-600 disabled:bg-gray-400"
              >
                Stop Listening
              </button>
              <button
                onClick={handleTranslate}
                disabled={!enhancedText}
                className="p-2 rounded bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400"
              >
                Translate
              </button>
              <button
                onClick={() => speakText(translatedText, targetLanguage)}
                disabled={!translatedText}
                className="p-2 rounded bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400"
              >
                Speak Translated Text
              </button>
            </div>
          </div>
          {isListening && <p className="mb-4">Listening...</p>}
          {error && <p className="mb-4 text-red-500">Error: {error}</p>}
          {text && (
            <div className="mb-4">
              <h3 className="text-lg font-bold">Original Transcript:</h3>
              <p className="p-2 bg-white text-black rounded">{text}</p>
            </div>
          )}
          {enhancedText && (
            <div className="mb-4">
              <h3 className="text-lg font-bold">Enhanced Transcript:</h3>
              <p className="p-2 bg-white text-black rounded">{enhancedText}</p>
            </div>
          )}
          {translatedText && (
            <div className="mb-4">
              <h3 className="text-lg font-bold">Translated Text:</h3>
              <p className="p-2 bg-white text-black rounded">
                {translatedText}
              </p>
            </div>
          )}
        </>
      ) : (
        <p>Speech recognition is not supported in this browser.</p>
      )}
    </div>
  );
};

export default MainComponent;
