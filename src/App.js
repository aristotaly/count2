import PiCounter from "./PiCounter";
import PisAhead from "./PisAhead";
import branches from './pi_branch'
import {calculatePIs,currentPIandIteration,getPisAhead,PIsToArray} from './Helper';
const PIs = calculatePIs();
const list =PIsToArray(branches);
const calculatedPIandIteration = currentPIandIteration(PIs);
const currentPI = calculatedPIandIteration.currentPI;
const currentIteration = calculatedPIandIteration.currentIteration;
const daystotheendoftheiteration = calculatedPIandIteration.daystotheendoftheiteration;
const PI_before= 4;
const pis_after=9;


function App() {
  console.log(list);
  return (
    <div className="App">
     
     <PisAhead currentPI={currentPI} after={pis_after} before={PI_before} currentIterationDaysLeft={daystotheendoftheiteration} currentIteration={currentIteration} PisAhead={getPisAhead}/>
    </div>
  );
}

export default App;
