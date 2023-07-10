import React from "react";
import {useState} from "react";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css'

function ReactDatePicker () {
    const[selectedDate, setSelectedDate] = useState(null)
    return(
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy" 
                minDate={new Date()
                }
            />
        </div>

    )
}

export default ReactDatePicker;
