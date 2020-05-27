import React,{Component} from "react";
import CERTIFICATES from "./data/certificates";

const Certificate= props =>{
  
        const {title, image, link} =props.certify;
        return(
            <div style={{display:'inline-block', width: 300, margin :10}}>
            <h3 style={{padding:10}}>{title}</h3>
            <img src={image} alt='Profile' style={{width : 200, height: 120}}/>
            <br/>
            <a style={{paddingTop :20, color:"black"}} href={link}>View Certificate</a>
        </div>
        )
    

}

const Certificates = props =>{
  
      return(
          <div>
              <div> <h2>Certificates</h2> </div>
             
              {
                  
                CERTIFICATES.map(CERTIFICATE =>{
                    return(
                        <Certificate key={CERTIFICATE.id} certify={CERTIFICATE} /> 
                        )
                })
              }   
             

          </div>
      )
  }


export default Certificates;