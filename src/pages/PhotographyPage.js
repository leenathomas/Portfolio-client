import React from 'react';
import butterfly from '../images/butterfly.jpeg';
import dragonfly2 from '../images/dragonfly2.JPG';
import dragonfly from '../images/dragonfly.jpg';
import edakkal from '../images/edakkal.jpeg';
import frog from '../images/frog.jpg';
import kochuveli from '../images/kochuveli.jpeg';
import vazhvanthol from '../images/vazhvanthol_portrait.jpeg';
import veli_beach from '../images/veli_beach.jpeg';
import vellayani from '../images/vellayani.jpeg';
import vivekananda from '../images/vivekananda.jpeg';
import wayanad from '../images/wayanad.jpeg';
import rain from '../images/rain.jpg';
import squirel from '../images/squirel_pappaya.JPG';
import butterfly2 from '../images/butterfly2.jpg';
import edakkal2 from '../images/edakkal2.jpeg';
import './photographyPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {AiOutlineLeft, AiOutlineRight, AiOutlineClose} from 'react-icons/ai';

function PhotographyPage(){
    
    var carousal_index = 1;
    
    function closeModal(){
        document.getElementById("carousal").style.display="none";
        document.body.style.overflow="auto";
    }

    function openCarousal()  {
        document.getElementById("carousal").style.display="block";
        document.body.style.overflow="hidden";
    }

    function plusCarousal(n){
        //console.log("plus",carousal_index+=n);
        openEachCarousal(carousal_index+=n);
    }
    function openEachCarousal(carousal_number){  
        
        console.log("index",carousal_number);
      //  console.log(carousal_number);
        var i; 
        var eachCarousal = document.getElementsByClassName("eachCarousal");
        carousal_index=carousal_number;
        for(i =0; i<eachCarousal.length; i++){
            eachCarousal[i].style.display="none";
        }
        if(carousal_number>eachCarousal.length){
            carousal_index = 1;
        }
        if(carousal_number<1){
            carousal_index=eachCarousal.length;
        }
        console.log("index1",carousal_index);
        eachCarousal[carousal_index-1].style.display="block";
    }
    
    return(

        <div className="photography">
            <div className="gallery">
                <div className="row">
                    <div className="column">
                        <img src={butterfly} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(1)}} alt="butterlfy"/>
                        <img src={dragonfly} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(2)}} alt="dragonfly"/>
                        <img src={wayanad} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(3)}} alt="wayanad"/> 
                        <img src={kochuveli} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(4)}} alt="kochuveli"/>  
                    </div>
                    <div className="column">
                        <img src={frog} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(5)}} alt="frog"/>
                        <img src={edakkal2} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(6)}} alt="edakkal2"/>    
                        <img src={edakkal} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(7)}} alt="edakkal"/>
                    </div>
                    <div className="column">
                        <img src={veli_beach} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(8)}} alt="veli beach"/>
                        <img src={vellayani} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(9)}} alt="vellayani"/>
                        <img src={vivekananda} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(10)}} alt="vivekananda"/>
                        <img src={dragonfly2} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(11)}} alt="dragonfly2"/>
                    </div>
                    <div className="column">
                        <img src={rain} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(12)}} alt="rain"/>
                        <img src={squirel} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(13)}} alt="squirel"/>
                        <img src={butterfly2} style={{width:"100%"}} onClick={()=>{openCarousal();openEachCarousal(14)}} alt="butterfly2"/>
                    </div>
                </div>
            </div>
                <div className="carousal" id="carousal">
                    <div className="eachCarousal">
                        <img className="carousal-display" src={butterfly} style={{width:"100%"}}  alt="butterlfy"/>
                    </div>
                    <div className="eachCarousal">
                        <img className="carousal-display" src={dragonfly} style={{width:"100%"}} alt="dragonfly"/>
                    </div>
                    <div className="eachCarousal">
                        <img className="carousal-display" src={wayanad} style={{width:"100%"}}  alt="wayanad"/>
                    </div>
                    <div className="eachCarousal">
                        <img className="carousal-display" src={kochuveli} style={{width:"100%"}}  alt="kochuveli"/>
                    </div>
                    
                    <div className="eachCarousal">
                        <img className="carousal-display" src={frog} style={{width:"100%"}} alt="frog"/>
                    </div>
                    <div className="eachCarousal">
                        <img className="carousal-display" src={edakkal} style={{width:"100%"}}  alt="edakkal"/>
                    </div>
                    <div className="eachCarousal">
                        <img className="carousal-display" src={edakkal2} style={{width:"100%"}}  alt="edakkal2"/>
                    </div>
                    <div className="eachCarousal">
                        <img className="carousal-display" src={veli_beach} style={{width:"100%"}}  alt="veli beach"/>
                    </div>
                    <div className="eachCarousal">
                        <img className="carousal-display" src={vellayani} style={{width:"100%"}} alt="vellayani"/>
                    </div>
                    <div className="eachCarousal">
                        <img className="carousal-display" src={vivekananda} style={{width:"100%"}}  alt="vivekananda"/>
                    </div> 
                    <div className="eachCarousal">
                        <img className="carousal-display" src={dragonfly2} style={{width:"100%"}} alt="dragonfly2"/>
                    </div> 
                    <div className="eachCarousal">
                        <img className="carousal-display" src={rain} style={{width:"100%"}}  alt="rain"/>
                    </div>
                    <div className="eachCarousal">
                        <img className="carousal-display" src={squirel} style={{width:"100%"}}  alt="squirel"/>
                    </div> 
                    <div className="eachCarousal">
                        <img className="carousal-display" src={butterfly2} style={{width:"100%"}}  alt="butterfly2"/>
                    </div>
                    
                    <span className="close" onClick={closeModal}><AiOutlineClose size={30} color="white"></AiOutlineClose></span>
                    <a className="prev" onClick={()=>plusCarousal(-1)}><AiOutlineLeft size={30} color="white" ></AiOutlineLeft></a>
                    <a className="next" onClick={()=>plusCarousal(1)}><AiOutlineRight size={30} color="white"></AiOutlineRight></a>  
                              
                </div>
            </div>
      


    )
}

export default PhotographyPage;