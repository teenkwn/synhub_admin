import React, {useEffect, useState} from "react";
import "./Dashboard.css";
import {Link} from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import piechart from "../Assets/piechart.png";
import app from '../Firebase/config';
import { PieChart } from 'react-minimal-pie-chart';

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
        <div className="dashboard-topic">Dashboard</div>
        <div className="dashboard-root-info">
            <div className="dashboard-root-info-side">
                <div className="dashboard-root-info-side-detail">
                    <PieChart className="pieClass"
                        data={[
                            { title: 'Smart farm/ Agriculture', value: 10, color: '#E38627' },
                            { title: 'Food and beverage', value: 15, color: '#C13C37' },
                            { title: 'Consumer product', value: 20, color: '#6A2135' },
                            { title: 'Financial', value: 10, color: '#000000' },
                            { title: 'Property and Construction', value: 10, color: '#C9DAF1' },
                            { title: 'Resource', value: 10, color: '#82BC95' },
                            { title: 'Communication', value: 10, color: '#DADADA' },
                            { title: 'System Integrator', value: 10, color: '#485C7A' },
                            { title: 'Mobility', value: 10, color: '#FFF2C3' },
                            { title: 'Services', value: 10, color: '#EDC10C' },
                        ]}
                    />
                </div>
                <div className="dashboard-root-info-side-detail">
                     <div className="dashboard-root-info-side-detail-type">
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Smart farm/ Agriculture</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Food and beverage</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Consumer product</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Financial</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Property and Construction</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Resource</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Communication</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>System Integrator</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Mobility</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Services</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-root-info-side">
                <div className="dashboard-root-info-side-detail">
                    <PieChart className="pieClass"
                        data={[
                            { title: 'Smart farm/ Agriculture', value: 10, color: '#E38627' },
                            { title: 'Food and beverage', value: 15, color: '#C13C37' },
                            { title: 'Consumer product', value: 20, color: '#6A2135' },
                            { title: 'Financial', value: 10, color: '#000000' },
                            { title: 'Property and Construction', value: 10, color: '#C9DAF1' },
                            { title: 'Resource', value: 10, color: '#82BC95' },
                            { title: 'Communication', value: 10, color: '#DADADA' },
                            { title: 'System Integrator', value: 10, color: '#485C7A' },
                            { title: 'Mobility', value: 10, color: '#FFF2C3' },
                            { title: 'Services', value: 10, color: '#EDC10C' },
                        ]}
                    />
                </div>
                <div className="dashboard-root-info-side-detail">
                     <div className="dashboard-root-info-side-detail-type">
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Smart farm/ Agriculture</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Food and beverage</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Consumer product</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Financial</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Property and Construction</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Resource</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Communication</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>System Integrator</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Mobility</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Services</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-root-info-side">
                <div className="dashboard-root-info-side-detail">
                    <PieChart className="pieClass"
                        data={[
                            { title: 'Smart farm/ Agriculture', value: 10, color: '#E38627' },
                            { title: 'Food and beverage', value: 15, color: '#C13C37' },
                            { title: 'Consumer product', value: 20, color: '#6A2135' },
                            { title: 'Financial', value: 10, color: '#000000' },
                            { title: 'Property and Construction', value: 10, color: '#C9DAF1' },
                            { title: 'Resource', value: 10, color: '#82BC95' },
                            { title: 'Communication', value: 10, color: '#DADADA' },
                            { title: 'System Integrator', value: 10, color: '#485C7A' },
                            { title: 'Mobility', value: 10, color: '#FFF2C3' },
                            { title: 'Services', value: 10, color: '#EDC10C' },
                        ]}
                    />
                </div>
                <div className="dashboard-root-info-side-detail">
                     <div className="dashboard-root-info-side-detail-type">
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Creativity</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Leadership Ability</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Design Thinking</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Agile</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Pitching Skill</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Coding</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Data Science</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Digital Marketing</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Marketing Communication</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Branding</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Business Model</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       </div>
    </div>
  );
}

export default Dashboard;
