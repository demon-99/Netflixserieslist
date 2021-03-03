import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import "./index.css";
import Sdata from "./Sdata";


ReactDOM.render(
<>
<h1 className="heading_style"> List of top 5 netflix series in 2021</h1>
<Card imgsrc={Sdata[0].imgsrc} title={Sdata[0].title} sname={Sdata[0].sname} />
<Card imgsrc={Sdata[1].imgsrc} title={Sdata[1].title} sname={Sdata[1].sname} />
<Card imgsrc={Sdata[2].imgsrc} title={Sdata[2].title} sname={Sdata[2].sname} />
<Card imgsrc={Sdata[3].imgsrc} title={Sdata[3].title} sname={Sdata[3].sname} />
<Card imgsrc={Sdata[4].imgsrc} title={Sdata[4].title} sname={Sdata[4].sname} />
</>,
document.getElementById('root'));