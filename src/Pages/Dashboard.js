import React, {useEffect, useState} from "react";
import "./Dashboard.css";
import {Link} from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import piechart from "../Assets/piechart.png";
import app from '../Firebase/config';

function Dashboard() {
    const userRef = app.firestore().collection('users');
    const [data, setData] = useState([]);
    const allData = [];
    const getData = () => {
        userRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
            allData.push({id: doc.id, ...doc.data()})
        })
        console.log(allData)
        setData(allData);
        })
    }
    useEffect(getData,[])
    console.log(data);

  return (
    <div className="dashboard-root">
       <Sidebar/>
       <div className="dashboard-root-right">
        <div className="dashboard-root-number-overview">
            <div className="dashboard-root-number-overview-1">
                <div className="number-big">7</div>
                <div className="data-moreinfo">
                    <div className="data-moreinfo-name">Site Location</div>
                    <div className="data-moreinfo-more">More Info</div>
                </div>
            </div>
            <div className="dashboard-root-number-overview-2">
                <div className="number-big">200</div>
                    <div className="data-moreinfo">
                        <div className="data-moreinfo-name">Payroll Employees</div>
                        <div className="data-moreinfo-more">More Info</div>
                    </div>
            </div>
            <div className="dashboard-root-number-overview-3">
                <div className="number-big">40</div>
                <div className="data-moreinfo">
                    <div className="data-moreinfo-name">Sub Contractor Employees</div>
                    <div className="data-moreinfo-more">More Info</div>
                </div>
            </div>
            <div className="dashboard-root-number-overview-4">
                <div className="number-big">59</div>
                <div className="data-moreinfo">
                    <div className="data-moreinfo-name">Monopoly Contractor Employees</div>
                    <div className="data-moreinfo-more">More Info</div>
                </div>
            </div>
            <div className="dashboard-root-number-overview-5">
                <div className="number-big">7</div>
                <div className="data-moreinfo">
                    <div className="data-moreinfo-name">Site Location</div>
                    <div className="data-moreinfo-more">More Info</div>
                </div>
            </div>
        </div>
        <div className="dashboard-root-info">
            <div className="dashboard-root-info-side">
                <div>DASHBOARD</div>
                <div className="dashboard-root-info-side-detail">
                    <img src={piechart} alt="piechart" className="piechart"></img>
                    <div className="dashboard-root-info-side-detail-type">
                        <div>Monopoly Contractor Employee</div>
                        <div>Sub Contractor Employee</div>
                        <div>Pay Roll Employee</div>
                        <div>See More </div>
                    </div>
                </div>
                <div className="dashboard-root-info-side-cost">
                    <div>WAGE COST IN ROUND</div>
                    <div className="cost">XX,XXX,XXX Baht</div>
                    <div>ปรอท</div>
                    <div>วันที่</div>
                </div>
            </div>
            <div className="dashboard-root-info-employ-daily">
                <div>
                    <div>Attend Employees</div>
                    <div className="dashboard-root-info-employ-daily-number">
                        <div>
                            <div>200/200</div>
                            <div>Pay Roll</div>
                        </div>
                        <div>
                            <div>40/40</div>
                            <div>Sub Contractor</div>
                        </div>
                        <div>
                            <div>59/59</div>
                            <div>Monopoly Contractor</div>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <div>Absent Employees</div>
                    <div className="dashboard-root-info-employ-daily-number">
                        <div>
                            <div>200/200</div>
                            <div>Pay Roll</div>
                        </div>
                        <div>
                            <div>40/40</div>
                            <div>Sub Contractor</div>
                        </div>
                        <div>
                            <div>59/59</div>
                            <div>Monopoly Contractor</div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-root-info-employ-daily-optional">
                    <div>
                        <div className="optional-XX">XX</div>
                        <div>Optional 1</div>
                    </div>
                    <div>
                        <div className="optional-XX">XX</div>
                        <div>Optional 2</div>
                    </div>
                    <div>
                        <div className="optional-XX">XX</div>
                        <div>Optional 3</div>
                    </div>
                    <div>
                        <div className="optional-XX">XX</div>
                        <div>Optional 4</div>
                    </div>
                    <div>
                        <div className="optional-XX">XX</div>
                        <div>Optional 5</div>
                    </div>
                </div>
                <div className="time-counting">
                    <div>
                        <div>250:00:00</div>
                        <div>Planned Working Hours</div>
                    </div>
                    <div>
                        <div>120:00:00</div>
                        <div>Actual Working Hours</div>
                    </div>
                </div>
                
            </div>
        </div>
       </div>
    </div>
  );
}

export default Dashboard;
