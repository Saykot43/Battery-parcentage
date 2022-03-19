import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Battery.css'


let firstBlockVisibility;
let secondBlockVisibility;
let thirdBlockVisibility;
let fourBlockVisibility;
let fiveBlockVisibility;
let sixBlockVisibility;
let sevenBlockVisibility;
let eightBlockVisibility;
let nineBlockVisibility;
let lastBlockColor;
let  iconHide;
const Battery = () => {
    let [charging, setCharging] = useState(0);
    let disabled;

    function chargeIncreasing(){
        let newCharge = charging + 1;
        
        if(newCharge === 101){
            
            return;
        }
        setCharging(newCharge);
        
    }
    function chargeDecreasing(){
        const newCharge = charging - 1;
        if(newCharge === 0){
            return 0;
        }
        setCharging(newCharge);
    }

 // button disable condition 
    if(charging <= 1){
        disabled = true;
    }
    else{
        disabled = false;
    }

    // icon hide 
    if(charging === 100){
        iconHide = {display:'none'};
        
    }else{
        iconHide = {display:'block'}
    }

    // block visible and hidden 
    // ----------------------------------------------
    // first 
    if(charging >= 10 && charging <= 20){
        firstBlockVisibility = {visibility:'visible'};
        secondBlockVisibility = {visibility:'hidden'};
        thirdBlockVisibility= {visibility:'hidden'};
        fourBlockVisibility= {visibility:'hidden'};
        fiveBlockVisibility= {visibility:'hidden'};
        sixBlockVisibility= {visibility:'hidden'};
        sevenBlockVisibility= {visibility:'hidden'};
        eightBlockVisibility= {visibility:'hidden'};
        nineBlockVisibility= {visibility:'hidden'};
        lastBlockColor = {backgroundColor:'green'};
    }
    // second 
    else if(charging >= 20 && charging <= 30){
        firstBlockVisibility = {visibility:'visible'};
        secondBlockVisibility = {visibility:'visible'};
        thirdBlockVisibility= {visibility:'hidden'};
        fourBlockVisibility= {visibility:'hidden'};
        fiveBlockVisibility= {visibility:'hidden'};
        sixBlockVisibility= {visibility:'hidden'};
        sevenBlockVisibility= {visibility:'hidden'};
        eightBlockVisibility= {visibility:'hidden'};
        nineBlockVisibility= {visibility:'hidden'};
    }
    // third 
    else if(charging >= 30 && charging <= 40 ){
        firstBlockVisibility = {visibility:'visible'};
        secondBlockVisibility = {visibility:'visible'};
        thirdBlockVisibility= {visibility:'visible'};
        fourBlockVisibility= {visibility:'hidden'};
        fiveBlockVisibility= {visibility:'hidden'};
        sixBlockVisibility= {visibility:'hidden'};
        sevenBlockVisibility= {visibility:'hidden'};
        eightBlockVisibility= {visibility:'hidden'};
        nineBlockVisibility= {visibility:'hidden'};
    }
    // four 
    else if(charging >= 40 && charging <= 50 ){
        firstBlockVisibility = {visibility:'visible'};
        secondBlockVisibility = {visibility:'visible'};
        thirdBlockVisibility= {visibility:'visible'};
        fourBlockVisibility= {visibility:'visible'};
        fiveBlockVisibility= {visibility:'hidden'};
        sixBlockVisibility= {visibility:'hidden'};
        sevenBlockVisibility= {visibility:'hidden'};
        eightBlockVisibility= {visibility:'hidden'};
        nineBlockVisibility= {visibility:'hidden'};
    }
    // five 
    else if(charging >= 50 && charging <= 60 ){
        fiveBlockVisibility = {visibility:'visible'};
        thirdBlockVisibility = {visibility:'visible'};
        firstBlockVisibility = {visibility:'visible'};
        secondBlockVisibility = {visibility:'visible'};
        fourBlockVisibility = {visibility:'visible'};
        sixBlockVisibility= {visibility:'hidden'};
        sevenBlockVisibility= {visibility:'hidden'};
        eightBlockVisibility= {visibility:'hidden'};
        nineBlockVisibility= {visibility:'hidden'};
        lastBlockColor = {backgroundColor:'green'};
    }
    // six 
    else if(charging >= 60 && charging <= 70 ){
        fiveBlockVisibility = {visibility:'visible'};
        thirdBlockVisibility = {visibility:'visible'};
        firstBlockVisibility = {visibility:'visible'};
        secondBlockVisibility = {visibility:'visible'};
        fourBlockVisibility = {visibility:'visible'};
        sixBlockVisibility= {visibility:'visible'};
        sevenBlockVisibility= {visibility:'hidden'};
        eightBlockVisibility= {visibility:'hidden'};
        nineBlockVisibility= {visibility:'hidden'};
        lastBlockColor = {backgroundColor:'green'};
    }
    // seven 
    else if(charging >= 70 && charging <= 80 ){
        fiveBlockVisibility = {visibility:'visible'};
        thirdBlockVisibility = {visibility:'visible'};
        firstBlockVisibility = {visibility:'visible'};
        secondBlockVisibility = {visibility:'visible'};
        fourBlockVisibility = {visibility:'visible'};
        sixBlockVisibility= {visibility:'visible'};
        sevenBlockVisibility= {visibility:'visible'};
        eightBlockVisibility= {visibility:'hidden'};
        nineBlockVisibility= {visibility:'hidden'};
        lastBlockColor = {backgroundColor:'green'};
    }
    // eight 
    else if(charging >= 80 && charging <= 90 ){
        fiveBlockVisibility = {visibility:'visible'};
        thirdBlockVisibility = {visibility:'visible'};
        firstBlockVisibility = {visibility:'visible'};
        secondBlockVisibility = {visibility:'visible'};
        fourBlockVisibility = {visibility:'visible'};
        sixBlockVisibility= {visibility:'visible'};
        sevenBlockVisibility= {visibility:'visible'};
        eightBlockVisibility= {visibility:'visible'};
        nineBlockVisibility= {visibility:'hidden'};
        lastBlockColor = {backgroundColor:'green'};
    }
    // nine 
    else if(charging >= 90 && charging <= 100 ){
        fiveBlockVisibility = {visibility:'visible'};
        thirdBlockVisibility = {visibility:'visible'};
        firstBlockVisibility = {visibility:'visible'};
        secondBlockVisibility = {visibility:'visible'};
        fourBlockVisibility = {visibility:'visible'};
        sixBlockVisibility= {visibility:'visible'};
        sevenBlockVisibility= {visibility:'visible'};
        eightBlockVisibility= {visibility:'visible'};
        nineBlockVisibility= {visibility:'visible'};
        lastBlockColor = {backgroundColor:'green'};
    }

    else{
        firstBlockVisibility = {visibility:'hidden'};
        secondBlockVisibility = {visibility:'hidden'};
        thirdBlockVisibility= {visibility:'hidden'};
        fourBlockVisibility= {visibility:'hidden'};
        fiveBlockVisibility= {visibility:'hidden'};
        sixBlockVisibility= {visibility:'hidden'};
        sevenBlockVisibility= {visibility:'hidden'};
        eightBlockVisibility= {visibility:'hidden'};
        nineBlockVisibility= {visibility:'hidden'};
        
        lastBlockColor = {backgroundColor:'salmon'};
    }

    return (
        <div>
            <div className="row justify-content-center bg-light">
                <div className="col-lg-12 text-center">
                <h3>BATTERY STATUS</h3>
                <p>
                    You can find your battery charge percentage and charging animation which is purely built on reactjs
                </p>
                </div>
                <div className="col mb-3 mt-5 col-12 d-flex justify-content-center">
                 <div className="d-flex flex-column battery-outer">
                    {/* nine  */}
                    <div style={nineBlockVisibility} className="battery-inner flex-fill nine-block"></div>
                    {/* eight  */}
                    <div style={eightBlockVisibility} className="battery-inner  flex-fill "></div>
                    {/* seven  */}
                    <div style={sevenBlockVisibility} className="battery-inner flex-fill"></div>
                    {/* six  */}
                    <div style={sixBlockVisibility} className="battery-inner flex-fill"></div>
                    {/* five  */}
                    <div style={fiveBlockVisibility} className="battery-inner flex-fill"></div>
                    {/* four  */}
                    <div style={fourBlockVisibility} className="battery-inner  flex-fill "></div>
                    {/* three  */}
                    <div style={thirdBlockVisibility} className="battery-inner flex-fill"></div>
                    {/* second  */}
                    <div style={secondBlockVisibility} className="battery-inner flex-fill"></div>
                    {/* first  */}
                    <div style={firstBlockVisibility} className="battery-inner flex-fill"></div>

                    {/* last block  */}
                    <div style={lastBlockColor} className="battery-inner flex-fill"></div>

                    <FontAwesomeIcon style={iconHide} className='charging-icon' icon="fa-solid fa-charging-station" />
                    {/* charging icon  */}
                    {/* <i style={iconHide} className="fa-solid fa-charging-station charging-icon"></i> */}
                 </div>
                </div>
                <h1 className='text-center'>Charging: {charging}%</h1>
                <div className="d-flex justify-content-center m-2 p-2">
                <button disabled={disabled} onClick={chargeDecreasing} className='m-1 btn btn-danger'>Decrease</button>
                <button onClick={chargeIncreasing} className='m-1 btn btn-success'>Increase</button>
                </div>
            </div>
        </div>
    );
};

export default Battery;