import React, { useEffect, useState } from 'react';
import './Home.css';
import { Chart } from "react-google-charts";

function Home() {

    const [statistics, setStatistics] = useState(null);
    const [average, setAverage] = useState(null);
 const [enshw,setEnshw]=useState(null);
 const [ensh,setEnsh]=useState(null);
 const [ensprog,setEnsprog]=useState(null);
 const [cadhw,setCadhw]=useState(null);
    const [cadprog,setCadprog]=useState(null);
    const [cadh,setCadh]=useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/Etudiant/statistic')
            .then(response => response.json())
            .then(data => setStatistics(data))
            .catch(error => setError(error));

        fetch('http://localhost:8080/Etudiant/average')
            .then(response => response.json())
            .then(data => setAverage(data))
            .catch(error => setError(error));

        fetch('http://localhost:8080/Enseignant/statistics')
            .then(response => response.json())
            .then(data => {setEnshw(data.totalNbHeuresWorked)
                setEnsh(data.totalNbTotalHeures)
                setEnsprog((data.totalNbHeuresWorked/data.totalNbTotalHeures)*100)})
            .catch(error => console.log(error));

        fetch('http://localhost:8080/Cadre/statistics')
            .then(response => response.json())
            .then(data => {setCadhw(data.totalNbHeuresWorked)
                setCadh(data.totalNbTotalHeures)
                setCadprog((data.totalNbHeuresWorked/data.totalNbTotalHeures)*100)})
            .catch(error => console.log(error));
    }, []);

    const options = {
        title: "Students success rate",
        colors: ["green", "red"],
        is3D: true,
    };
    
    const progressStyle = {
        width: `90%`,
        height: '20px',
        backgroundColor: 'grey',
        borderRadius: '10px',
        position: 'relative',
    };
    const progressFillStyle = {
        width: `${cadprog}%`,
        height: '100%',
        backgroundColor: 'green',
        borderRadius: '10px',
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'width 1s ease-in-out', 
    };
 

    if (error) {
        console.log(error);
    } else if (statistics && average) {
        console.log(statistics);
       
        const data = [
            ["success rate", "number of students"],
            ["successful students", statistics.totalNumberOfStudents
            - statistics.numberOfStudentsWithAverageLessThanTen],
            ["Repeaters", statistics.numberOfStudentsWithAverageLessThanTen],
        ];
        return (
            <div className="window">
                <div className="pane"> 
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"280px"}
                    />
                </div>
                <div className="pane">
                    <h1>Student Average: </h1><h1 style={{color:"blue"}}>{average}</h1>
                </div>
                <div className="pane">
                    <div style={progressStyle}>
                        <div style={{...progressFillStyle, width: `${ensprog}%`}}></div> 
                    </div>
                    <p>Hours worked by teachers: {enshw}/{ensh}</p>
                </div>
                <div className="pane">
                    <div style={progressStyle}>
                        <div style={{...progressFillStyle, backgroundColor: 'blue'}}></div>
                    </div>
                    
                    <p>Hours worked by staff: {cadhw}/{cadh}</p>
                    
                </div>
            </div>
        );
    }

    return null;
}

export default Home;