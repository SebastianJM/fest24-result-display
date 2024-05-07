import qrimage from './images/qr-example.png';
import title from './images/title.png';
import './App.css';
import Image from './Image'
import React, { useState, useEffect } from 'react';

function App() {
  const baseDalleAPIURL = 'https://iuuq62jgkabzynablni7ucapyi0xvbwr.lambda-url.us-east-1.on.aws/';
  const [result, setResult] = useState(new Array(18).fill('https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/White_square_50%25_transparency.svg/2048px-White_square_50%25_transparency.svg.png'));

  useEffect( () => {
    const fetchResult = async () => {
      try {
        console.log("TESTING");
        const response = await fetch(baseDalleAPIURL);
        const data = await response.json();
        setResult(data.map(obj => obj.url));
      } catch (error) {
        console.error('Error making POST request', error);
      }
    };

    fetchResult();
    const intervalId = setInterval(fetchResult, 15000)
    return () => clearInterval(intervalId);
  }, [])

  return (
    <div>
      <div style={{  display: "flex", height: "82vh", backgroundColor: "#000000" }}>
        <div style={{ width: "100vh", marginRight: "auto", marginLeft: "auto", padding: "5vh", display: "relative" }}>      
          <Image height="11vh" top="11vh" left="45vh" source={result[0]}></Image>
          <Image height="14vh" top="3vh" left="53vh" source={result[1]}></Image>
          <Image height="11vh" top="8vh" left="79vh" source={result[2]}></Image>
          <Image height="19vh" top="19vh" left="58vh" source={result[3]}></Image>
          <Image height="14vh" top="24vh" left="42vh" source={result[4]}></Image>
          <Image height="14vh" top="29vh" left="79vh" source={result[5]}></Image>
          <Image height="19vh" top="40vh" left="42vh" source={result[6]}></Image>
          <Image height="11vh" top="40vh" left="66vh" source={result[7]}></Image>
          <Image height="11vh" top="45vh" left="79vh" source={result[8]}></Image>
          <Image height="14vh" top="53vh" left="63vh" source={result[9]}></Image>
          <Image height="19vh" top="58vh" left="74vh" source={result[10]}></Image>
          <Image height="11vh" top="33vh" left="29vh" source={result[11]}></Image>
          <Image height="19vh" top="30vh" left="8vh" source={result[12]}></Image>
          <Image height="11vh" top="66vh" left="50vh" source={result[13]}></Image>
          <Image height="14vh" top="61vh" left="34vh" source={result[14]}></Image>
          <Image height="11vh" top="51vh" left="14vh" source={result[15]}></Image>
          <Image height="11vh" top="64vh" left="14vh" source={result[16]}></Image>
          <Image height="13vh" top="51vh" left="27vh" source={result[17]}></Image>
          <img className="image-base" src={title} style={{width: "auto", height: "19vh"}} />
        </div>     
      </div>
      <div style={{ height: "18vh", backgroundColor: "#C757FF", display: "flex", fontFamily: "Garaje-0703", paddingLeft: "10vh", paddingRight: "10vh", paddingTop: "3vh" }}>
        <img src={qrimage} style={{width: "auto", height: "11vh", marginRight: "3vh"}} />
        <p style={{fontSize: "36px", fontWeight: "normal", marginTop: "1vh"}}><b>You've only seend a bit of your creative potential, explore all the possibilities.</b></p>
      </div>
    </div>
    
  );
}

export default App;
