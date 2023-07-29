import React from "react";
import ReactDOM from "react-dom";
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   [
//     <h1> vaishnav singh</h1>,
//     <p> hey this is vaishnav singh</p>,
//     <h2> wassup guys</h2>
//   ],
//   document.getElementById("root")

// );
// // <>,</>===<React.Fragment></React.Freagment>
// // better than div and an aray tag because it is faster and also uses eass memory



// ReactDOM.render(
//   <>
//   <h1> Here is the list of top 5 netflix series</h1>
//   <p> The list begin from here</p>
//   <ul>
//   <li>Mirzapur</li>
//   <li>Bole </li>
//   <li>hole</li>
//   <li>dhole</li>
//   <li>khole</li>
//   </ul>


//   </>,
//   document.getElementById("root")
// );



// const Myname = "vaishnav";
// const Surname="singh";
//   ReactDOM.render(
// <>
// // first method
// <h1>my name is {Myname +" "+Surname}</h1>
// // second method 
// <h1>my name is {`${Myname} ${Surname}`}</h1>
// <h2> {3-1}</h2>
// </>,
// document.getElementById('root')
//   );




// const name = "vaishnav singh";
// const currDate= new Date().toLocaleDateString();
// const currTime= new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//   <h1> My name is {name} </h1>
//   <p> Current Date is ={currDate}</p>
//   <p> Current Time is ={currTime}</p>
//   </>,
//   document.getElementById('root')
// );




// const name = 'vaishnav singh';
// const img1= 'https://picsum.photos/200';
// const img2 ='https://picsum.photos/201';
// const img3='https://picsum.photos/203';
// const links='https://cs50.harvard.edu/web/2020/notes/5/';

// const heading ={
//   color: "#fa9191",
//   textAlign:"center",
//   fontWeight:"bold",
//   textTransform:"capitalize",
// textShadow :'0px 2px 4px #ffe9c5',
// margin: '70px 0',
// fontFamily:'"Josefin Sans", sans-sherif ',

// }



// ReactDOM.render(

//   <>

//   <h1 style={heading}>My Name is{name} </h1>



//   <div class="img_div">
//   <img src={img1} />
//   <img src={img2} />
//   <a href='links' target='_vaishnav'>
//   <img src={img3} />
//   </a>
// </div>
//   </>,
//   document.getElementById('root')
// )




// let currDate = new Date(2023 ,5,5, 16);
// currDate= currDate.getHours();
// let Greeting ="";
// const cssStyle = {};  
// if(currDate>=1&& currDate<=12){
//   Greeting="Good Morning";
//   cssStyle.color  ="green";
// }else if (currDate>=12&& currDate<=17){
//   Greeting="Good Afternoon";
//   cssStyle.color  ="orange";
// }else{
//   Greeting="Good Night";
//   cssStyle.color  ="black";
// }


// ReactDOM.render(
//   <h1>Hello</h1>,
//   document.getElementById("root")
// );




// import List from "./List";
// import Heading from "./Heading";
// ReactDOM.render(

//   <>
//  <Heading />
// <List />
  
//   </>, document.getElementById('root')
// );


// import {Sum,Mul, Div} from './Calculator';
// ReactDOM.render(
// <>
// <ul>
// <li> The Sum of the number is {Sum(40,4)} </li>,
// {/* <li> The Difference  of the number is {Sub(40,4)} </li>, */}
// <li> The Multiplication of the number is {Mul(40,4)} </li>,
// <li> The Division of the number is {Div(40,4)} </li>

// </ul>



// </>,
//  document.getElementById('root')


// );






import Card from "./Card";
import  Sdata from "./Sdata";
ReactDOM.render(
  <>
  <h1 className="heading_style"> List of top 4 netflix series</h1>


<Card 
imgsrc={Sdata[0].imgsrc}
title={Sdata[0].title}
link={Sdata[0].link}
sname={Sdata[0].sname}
 />
<Card
imgsrc={Sdata[1].imgsrc}
title={Sdata[1].title}
link={Sdata[1].link}
sname={Sdata[1].sname}
/>
<Card 
imgsrc={Sdata[2].imgsrc}
title={Sdata[2].title}
link={Sdata[2].link}
sname={Sdata[2].sname}
/>
<Card
imgsrc={Sdata[2].imgsrc}
title={Sdata[2].title}
link={Sdata[2].link}
sname={Sdata[2].sname}
    />
    </>,
    document.getElementById('root')
);



