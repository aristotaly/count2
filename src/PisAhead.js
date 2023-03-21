import React from "react";
import { useState } from "react";
import { getPisAhead, PIsToArray } from './Helper';
import './PisAhead.css';
import branches from './pi_branch'

const PisAhead = (props) => {


    console.log(props);
    const [currentPI, setCurrentPI] = useState(props.currentPI);
    const [currentIteration, setCurrentIteration] = useState(props.currentIteration);
    const branch = branches;
    const pis = PIsToArray(getPisAhead(props.after,currentPI-props.before));
    console.log(pis);
    const renderProgressbar =(value,pi,iter)=>{
        const iter_days =(iter == 1 || iter ==2)? 10:5;
        

        const styles = {
            width: `${value}%`,
            backgroundColor: value < 50 ? "green" : "red",
          };
        if (checkCurrentPI(pi,iter)){   
            return (
            <div className="progress-bar">
              <div className="progress" style={styles}>
                <span className="sr-only">{value}% Complete, days left {props.currentIterationDaysLeft},days passed {iter_days -props.currentIterationDaysLeft}</span>
              </div>
            </div>
          );}
        
            return(<div></div>);
        
    }
    const checkCurrentPI = (pi,i_number)=>{
        console.log((parseInt(currentPI) === pi.PI_number && props.currentIteration === i_number));
        return (parseInt(currentPI) === pi.PI_number && props.currentIteration === i_number);
    }
    const renderedObj = pis.map((pi) => {
        const toShowString = parseInt(currentPI) - pi.PI_number <= 4 && parseInt(currentPI) - pi.PI_number >= 0;
        const renderedBranches = toShowString ? "Branch " + branch[pi.PI_number].branch + " Status:" + branch[pi.PI_number].status : "";

        return (

            <tr>
                <th scope="row" className="col-md-1">{(parseInt(currentPI) === pi.PI_number) ? pi.PI_number + "(current)" : pi.PI_number} </th>
                <th scope="row" className="col-md-1">{renderedBranches} </th>

                <td className={(parseInt(currentPI) === pi.PI_number && currentIteration === 1) ? "col-md-2 padding-0 currentPi" : "col-md-2 padding-0"}>
                
                 {renderProgressbar(((10-props.currentIterationDaysLeft)/10*100),pi,1)}
                    
                
                
                    <table>

                        <tr>
                            <td className=" col-md-3"> {pi.iteration1_start_date.toDateString()}</td>
                            <td className="col-md-1"></td>
                            <td className="col-md-3">{pi.iteration1_end_date.toDateString()}</td>

                        </tr>

                    </table>



                </td>
                <td className={(parseInt(currentPI) === pi.PI_number && currentIteration === 2) ? "col-md-2 padding-0 currentPi" : "col-md-2 padding-0"}>
                {renderProgressbar(((10-props.currentIterationDaysLeft)/10*100),pi,2)}

                    <table>

                        <tr className={(parseInt(currentPI) === pi.PI_number && currentIteration === "2") ? "col-md-2 padding-0 currentPi" : "col-md-2 padding-0"}>

                            <td className=" col-md-3"> {pi.iteration2_start_date.toDateString()}</td>
                            <td className="col-md-1"></td>
                            <td className="col-md-3">{pi.iteration2_end_date.toDateString()}</td>

                        </tr>

                    </table>

                </td>
                <td className={(parseInt(currentPI) === pi.PI_number && currentIteration === "IP") ? "col-md-2 padding-0 currentPi" : "col-md-2 padding-0"}>
                {renderProgressbar(((5-props.currentIterationDaysLeft)/10*100),pi,"IP")}
                    <table>

                        <tr>
                            <td className=" col-md-3">  {pi.IP_start_date.toDateString()}</td>
                            <td className="col-md-1"></td>
                            <td className="col-md-3"> {pi.IP_end_date.toDateString()}</td>

                        </tr>

                    </table>


                </td>


            </tr>
        );
    });

    return (
        <div className="container mb-3 mt-3">
            <h1>Iteration List</h1>

            <table className="table table-responsive table-sm table-dark borders">
                <thead>
                    <tr>
                        <th scope="col">PI#</th>
                        <th scope="col">Branch</th>
                        <th scope="col" className="col-md-1 text_center iter1">{(currentIteration === "1") ? "iteration 1(current)" : "iteration 1"}

                        </th>
                        <th scope="col" className="iter2">{(currentIteration === 2) ? "iteration 2(current)" : "iteration 2"}
                            </th>
                        <th scope="col" className="iter3">IP week</th>
                    </tr>
                    <tr>
                        <th>
                            <td className="col-md-5"></td>
                        </th>
                        <th>
                            <td className="col-md-5"></td>
                        </th>

                        <th scope="col">
                            <td className="col-md-1 iter1">Start</td>
                            <td className="col-md-3"></td>
                            <td className="col-md-3 iter1">End</td>
                        </th>
                        <th scope="col">
                            <td className="col-md-1 iter2">Start</td>
                            <td className="col-md-3 "></td>
                            <td className="col-md-3 iter2">End</td>
                            <div>
                              
                                </div>
                        
                        </th>
                        <th scope="col">
                            <td className="col-md-1 iter3">Start</td>
                            <td className="col-md-3 iter3"></td>
                            <td className="col-md-3 iter3">End</td>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {renderedObj}
                </tbody>
            </table>
        </div>
    );


}

export default PisAhead;