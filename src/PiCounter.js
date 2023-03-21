import React from "react";


class PiCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPI: props.currentPI

        };
    }
    //finctioin to render theselected PI and iteration
    renderCurrentPIandIteration = () => {
        let currentPIandIteration = this.props.currentPI;
        let currentPI = currentPIandIteration.currentPI;
        let currentIteration = currentPIandIteration.currentIteration;
        let currentIterationStartDate = currentPIandIteration.currentIterationStartDate;
        let currentIterationEndDate = currentPIandIteration.currentIterationEndDate;
        let currentIterationDays = currentPIandIteration.currentIterationDays;
        let currentIterationWeek = currentPIandIteration.currentIterationWeek;
        let daystotheendoftheiteration = currentPIandIteration.daystotheendoftheiteration;
        let weekstotheendoftheiteration = currentPIandIteration.weekstotheendoftheiteration;
        let dayshoursminutesandseconds = currentPIandIteration.dayshoursminutesandseconds;
        let arr = [];

        arr.push((
            <div className="ui card">
                <div className="content">

                    <div className="header">Current PI: {currentPI}</div>
                    <div className="header">Current Iteration: {currentIteration}</div>
                    <div>
                        <p>
                            <ul>
                                <li>End date for this  PI: {this.props.PIs[this.props.currentPI.currentPI].IP_end_date.toDateString()}</li>
                                <li>
                                    Days to the end of the iteration: {daystotheendoftheiteration}
                                </li>
                            </ul>
                        </p>
                    </div>
                    
                </div>



            </div>
        ));
        return arr;
    }

    render() {
        return (
            <div>

                {this.renderCurrentPIandIteration()}

            </div>
        );
    }
}




export default PiCounter;