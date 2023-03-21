import PisAhead from "./PisAhead";

export const  calculatePIs =()=>{
    const START_DATE ="1-Aug-22";
    let PIs ={};  
    let start_PI=62;
    var start_date = new Date(START_DATE);
    let iteration1_start_date = new Date(START_DATE);
    let iteration1_end_date = new Date(START_DATE);
    let iteration2_start_date = new Date(START_DATE);
    let iteration2_end_date = new Date(START_DATE);
    let IP_start_date = new Date(START_DATE);
    let IP_end_date = new Date(START_DATE);
    let IP_week = 6;
    let iteration1_days = 13;
    let iteration2_days = 13;
    let iteration1_week = 6;
    let iteration2_week = 6;
    let PI_number = 0;
    let PI_start_date = new Date(START_DATE);
    let PI_end_date = new Date(START_DATE);

    for (let i = 0; i < 100; i++) {
      PI_number = start_PI+i;
      //calculate iteration1 start date
          iteration1_start_date = new Date(start_date);
      //calculate iteration1 end date
      iteration1_days = 13;
      iteration1_end_date = new Date(iteration1_start_date);
      iteration1_end_date.setDate(iteration1_start_date.getDate() + iteration1_days);
      //calculate iteration2 start date
      iteration2_start_date = new Date(iteration1_end_date);
      iteration2_start_date.setDate(iteration2_start_date.getDate() + 1);
      //calculate iteration2 end date
      iteration2_days = 13;
      iteration2_end_date = new Date(iteration2_start_date);
      iteration2_end_date.setDate(iteration2_start_date.getDate() + iteration2_days);
      //calculate IP start date
      IP_start_date = new Date(iteration2_end_date);
      IP_start_date.setDate(IP_start_date.getDate() + 1);
      //calculate IP end date
      IP_week = 6;
      IP_end_date = new Date(IP_start_date);
      IP_end_date.setDate(IP_start_date.getDate() + IP_week);
      //calculate PI start date
      PI_start_date = new Date(iteration1_start_date);
      //calculate PI end date
      PI_end_date = new Date(IP_end_date);
      //create PI object
      PIs[PI_number] = {
        PI_number: PI_number,
        iteration1_start_date: iteration1_start_date,
        iteration1_end_date: iteration1_end_date,
          iteration2_start_date: iteration2_start_date,
          iteration2_end_date: iteration2_end_date,
          IP_start_date: IP_start_date,
          IP_end_date: IP_end_date,
          PI_end_date: IP_end_date,

  };
   start_date = new Date(IP_end_date);
   start_date.setDate(start_date.getDate() + 1);


}
return PIs;
}
//this function will use your local date and time and  will return an object continging the folloiwing properties
//currentPI : the current PI number
//currentIteration : the current iteration number
//currentIterationStartDate : the start date of the current iteration
// currentIterationEndDate : the end date of the current iteration
//currentIterationDays : the number of days in the current iteration
//currentIterationWeek : the number of weeks in the current iteration
//daystotheendoftheiteration : the number of days to the end of the current iteration
//weekstotheendoftheiteration : the number of weeks to the end of the current iteration
//dayshoursminutesandseconds : the number of days, hours, minutes and seconds to the end of the current iteration




export const currentPIandIteration = (piObj) => {
  
 let PIs;
 if(piObj){
    PIs = piObj;
 }
 else{
    PIs = calculatePIs();
 }
  let current_date = new Date();
  let currentPI = 0;
  let currentIteration = 0;
  let currentIterationStartDate = new Date();
  let currentIterationEndDate = new Date();
  let currentIterationDays = 0;
  let currentIterationWeek = 0;
  let daystotheendoftheiteration = 0;
  let weekstotheendoftheiteration = 0;
  let dayshoursminutesandseconds = 0;
  let currentPIandIteration = {};
  let currentPIandIterationKeys = Object.keys(PIs);
  let currentPIandIterationValues = Object.values(PIs);
  for (let i = 0; i < currentPIandIterationKeys.length; i++) {
      if (
          current_date >= currentPIandIterationValues[i].iteration1_start_date &&
          current_date <= currentPIandIterationValues[i].iteration1_end_date
      ) {
          currentPI = currentPIandIterationKeys[i];
          currentIteration = 1;
          currentIterationStartDate = currentPIandIterationValues[i].iteration1_start_date;
          currentIterationEndDate = currentPIandIterationValues[i].iteration1_end_date;
          currentIterationDays = 13;
          currentIterationWeek = 2;
          daystotheendoftheiteration = Math.floor(
          (currentIterationEndDate - current_date) / (1000 * 60 * 60 * 24)
          );
          weekstotheendoftheiteration = Math.floor(daystotheendoftheiteration / 7);
          dayshoursminutesandseconds = Math.floor(
          (currentIterationEndDate - current_date) / (1000 * 60 * 60)
          );
          currentPIandIteration = {
          currentPI: currentPI,
          currentIteration: currentIteration,
          currentIterationStartDate: currentIterationStartDate,
          currentIterationEndDate: currentIterationEndDate,
          currentIterationDays: currentIterationDays,
          currentIterationWeek: currentIterationWeek,
          daystotheendoftheiteration: daystotheendoftheiteration,
          weekstotheendoftheiteration: weekstotheendoftheiteration,
          dayshoursminutesandseconds: dayshoursminutesandseconds
          };
          return currentPIandIteration;
      } else if (
          current_date >= currentPIandIterationValues[i].iteration2_start_date &&
          current_date <= currentPIandIterationValues[i].iteration2_end_date
      ) {
          currentPI = currentPIandIterationKeys[i];
          currentIteration = 2;
          currentIterationStartDate = currentPIandIterationValues[i].iteration2_start_date;
          currentIterationEndDate = currentPIandIterationValues[i].iteration2_end_date;
          currentIterationDays = 13;
          currentIterationWeek = 2;
          daystotheendoftheiteration = Math.floor(
          (currentIterationEndDate - current_date) / (1000 * 60 * 60 * 24)
          );
          weekstotheendoftheiteration = Math.floor(daystotheendoftheiteration / 7);
          dayshoursminutesandseconds = Math.floor(currentIterationEndDate - current_date / (1000 * 60 * 60));
          currentPIandIteration = {
          currentPI: currentPI,
          currentIteration: currentIteration,
          currentIterationStartDate: currentIterationStartDate,
          currentIterationEndDate: currentIterationEndDate,
          currentIterationDays: currentIterationDays,
          currentIterationWeek: currentIterationWeek,
          daystotheendoftheiteration: daystotheendoftheiteration,
          weekstotheendoftheiteration: weekstotheendoftheiteration,
          dayshoursminutesandseconds: dayshoursminutesandseconds
          };
          return currentPIandIteration;
      } else if ( current_date >= currentPIandIterationValues[i].IP_start_date && current_date <= currentPIandIterationValues[i].IP_end_date) {
          currentPI = currentPIandIterationKeys[i];
          currentIteration = "IP";
          currentIterationStartDate = currentPIandIterationValues[i].IP_start_date;
          currentIterationEndDate = currentPIandIterationValues[i].IP_end_date;
          currentIterationDays = 6;
          currentIterationWeek = 1;
          daystotheendoftheiteration = Math.floor(
          (currentIterationEndDate - current_date) / (1000 * 60 * 60 * 24)
          );
          weekstotheendoftheiteration = Math.floor(daystotheendoftheiteration / 7);
          dayshoursminutesandseconds = Math.floor(currentIterationEndDate - current_date / (1000 * 60 * 60));
          currentPIandIteration = {
          currentPI: currentPI,
          currentIteration: currentIteration,
          currentIterationStartDate: currentIterationStartDate,
          currentIterationEndDate: currentIterationEndDate,
          currentIterationDays: currentIterationDays,
          currentIterationWeek: currentIterationWeek,
          daystotheendoftheiteration: daystotheendoftheiteration,
          weekstotheendoftheiteration: weekstotheendoftheiteration,
          dayshoursminutesandseconds: dayshoursminutesandseconds
          };
          return currentPIandIteration;
      }



  }


  
}

export function ProgressBar({ iterationDaysLeft }) {
    const value =(10-iterationDaysLeft)/10*100
    const daysPassed = 10-iterationDaysLeft;
    const styles = {
      width: `${value}%`,
      backgroundColor: value < 50 ? "red" : "green",
    };
  
    return (
      <div className="progress-bar">
        <div className="progress" style={styles}>
          <span className="sr-only">
            {value}% Complete, days left {iterationDaysLeft},days passed{" "}
            {10 - iterationDaysLeft}
          </span>
        </div>
      </div>
    );
  }

export const getPisAhead=(numberOfPIs,startPI)=>{
    
    const PIs = calculatePIs();
    const PisAhead ={};
    const currentPI= parseInt(currentPIandIteration().currentPI);
    const startFrom = startPI;
    for (let index =startFrom ; index < currentPI+numberOfPIs; index++) {
        PisAhead[index]=PIs[index];
        
    }
    
    return PisAhead;
}
// this function will turn the object of PIs into an array of objects
export const PIsToArray = (PIs) => {
    let PIsArray = [];
    let PIsKeys = Object.keys(PIs);
    let PIsValues = Object.values(PIs);
    for (let i = 0; i < PIsKeys.length; i++) {
        PIsArray.push({ PI: PIsKeys[i], ...PIsValues[i] });
    }
    return PIsArray;
    }



    
// // creating an epic object :

// let epic = {
//     epic_id: "USCC-1234",
//     days: 10

// }
// // creating a PI object :




// // helper funciton to calculate the total effort of all epic.
// //funciotn will take an array of epic objects and will return the total effort of all epic.
// export function calculateTotalEffort(epics) {
//     let total_effort = 0;
//     for (let i = 0; i < epics.length; i++) {
//         total_effort = total_effort + epics[i].days;
//     }
//     return total_effort;
// }

// //helper function to calculate the regression line.
// //function will take a PI object and an array of epic objects and will return an array of objects containing date and effort.
// function calculateRegressionLine(PI, epics) {
//     let regression_line = [];
//     let total_effort = calculateTotalEffort(epics);
//     let PI_days = Math.round(Math.abs((PI.PI_end_date - PI.PI_start_date) / (1000 * 60 * 60 * 24)));
//     let PI_start_date = PI.PI_start_date;
//     let PI_end_date = PI.PI_end_date;
//     let PI_start_date_effort = 0;
//     let PI_end_date_effort = total_effort;
//     let PI_effort_per_day = total_effort / PI_days;
//     let effort_consumed = 0;
//     let date = PI_start_date;
//     let effort = PI_start_date_effort;
//     let days = 0;
//     let regression_line_object = {
//         date: date,
//         effort: effort,
//         days: days
//     }
//     regression_line.push(regression_line_object);
//     for (let i = 0; i < PI_days; i++) {
//         date = new Date(date);
//         date.setDate(date.getDate() + 1);
//         effort_consumed = effort_consumed + PI_effort_per_day;
//         effort = effort_consumed;
//         days = i + 1;
//         regression_line_object = {
//             date: date,
//             effort: effort,
//             days: days
//         }
//         regression_line.push(regression_line_object);
//     }
//     return regression_line;
// }

// //helper function to calculate the regression line.
// //function will take a PI object

// //anotehr funciton to take the effort relvant to the current date and return the date and effort.
// //function will take a PI object and an array of epic objects and will return an array of objects containing date and effort.
// function getexpectedEffortFroToday(PI, epics) {
//     let regression_line = calculateRegressionLine(PI, epics);
//     let today = new Date();
//     let expected_effort = 0;
//     for (let i = 0; i < regression_line.length; i++) {
//         if (regression_line[i].date > today) {
//             expected_effort = regression_line[i].effort;
//             break;
//         }
//     }
//     return expected_effort;
// }


//calculate working days between two dates c