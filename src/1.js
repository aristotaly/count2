    
    const START_DATE ="10-Oct-22";
    
   const  calculatePIs =(number_of_pi)=>{
      let PIs ={};  
      let start_PI=64;
      let start_date = new Date(START_DATE);
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

      for (let i = 0; i < number_of_pi; i++) {
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
            IP_end_date: IP_end_date

    };
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




const currentPIandIteration = () => {
    let PIs = calculatePIs(100);
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



currentPIandIteration();