import React, {useEffect, useState} from "react";
import "./Dashboard.css";
import {Link} from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import piechart from "../Assets/piechart.png";
import app from '../Firebase/config';
import { PieChart } from 'react-minimal-pie-chart';

function Dashboard() {
    const userRef = app.firestore().collection('users');
    const countRef = app.firestore().collection('count');
    const [data, setData] = useState([]);
    const [count, setCount] = useState([]);
    const allData = [];
    const countData =[];

    const getData = () => {
        userRef.get().then((snapshot) => {
            snapshot.forEach((doc) => {
                allData.push({id: doc.id, ...doc.data()})
            })
            setData(allData);
        countRef.get().then((snapshot) => {
            snapshot.forEach((doc) => {
                countData.push({id:doc.id, ...doc.data()})
            })
            setCount(countData);
        })
        // console.log(countData)
        
        })
    }
    useEffect(getData,[])

    // console.log(data);
    // console.log(interest.financial)
    console.log(count[0].agile);
    // count.forEach(el => console.log(el))
  return (
    <div className="dashboard-root">
       {/* <Sidebar/>
       <div className="dashboard-root-right">
        <div className="dashboard-topic">Dashboard</div>
        <div className="dashboard-root-info">
            <div className="dashboard-root-info-side">
                อุตสาหกรรมประเภทใด or Industry
                <div className="dashboard-root-info-side-detail">
                    <PieChart className="pieClass"
                        data={[
                            { title: 'Smart farm/ Agriculture', value: count[1].smartFarmAgriculture, color: '#E38627' },
                            { title: 'Food and beverage', value: count[1].foodAndBeverage, color: '#C13C37' },
                            { title: 'Consumer product', value: count[1].consumerProduct, color: '#6A2135' },
                            { title: 'Financial', value: count[1].financial, color: '#000000' },
                            { title: 'Property and Construction', value: count[1].propertyAndConstruction, color: '#C9DAF1' },
                            { title: 'Resource', value: count[1].resource, color: '#82BC95' },
                            { title: 'Communication', value: count[1].communication, color: '#DADADA' },
                            { title: 'System Integrator', value: count[1].systemIntegrator, color: '#485C7A' },
                            { title: 'Mobility', value: count[1].mobility, color: '#FFF2C3' },
                            { title: 'Services', value: count[1].services, color: '#EDC10C' },
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
                สนใจอุตสาหกรรมประเภทไหน or interst
                <div className="dashboard-root-info-side-detail">
                    <PieChart className="pieClass"
                        data={[
                            { title: 'Edutech Workshop', value: count[2].eduTechWorkshop, color: '#E38627' },
                            { title: 'Energy Management', value: count[2].energyManagement, color: '#C13C37' },
                            { title: 'PCB/PCBA', value: count[2].pcbAndpcba, color: '#6A2135' },
                            { title: 'Robotics', value: count[2].robotics, color: '#000000' },
                            { title: 'Smart Building', value: count[2].smartBuilding, color: '#C9DAF1' },
                            { title: 'Smart Environment', value: count[2].smartEnvironment, color: '#82BC95' },
                            { title: 'Smart Health Products', value: count[2].smartHealthProducts, color: '#DADADA' },
                            { title: 'Smart Juristic Platform', value: count[2].smartJuristicPlatform, color: '#485C7A' },
                            { title: 'Smart Lighting System', value: count[2].smartLightingSystem, color: '#FFF2C3' },
                            { title: 'Water Monitoring System', value: count[2].waterMonitoringSystem, color: '#EDC10C' },
                        ]}
                    />
                </div>
                <div className="dashboard-root-info-side-detail">
                     <div className="dashboard-root-info-side-detail-type">
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Edutech Workshop</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Energy Management</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>PCB/PCBA</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Robotics</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Smart Building</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Smart Environment</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Smart Health Products</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Smart Juristic Platform</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Smart Lighting System</div>
                        </div>
                        <div className="dashboard-root-info-side-detail-type-sub">
                            <div className="point"></div>
                            <div>Water Monitoring System</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-root-info-side">
                อยากพัฒนาด้านใดเพิ่มเติม or improve
                <div className="dashboard-root-info-side-detail">
                    <PieChart className="pieClass"
                        data={[
                            { title: 'Creativity', value: count[0].creativity, color: '#E38627' },
                            { title: 'Leadership Ability', value: count[0].leadershipAbility, color: '#C13C37' },
                            { title: 'Design Thinking', value: count[0].designThinking, color: '#6A2135' },
                            { title: 'Agile', value: count[0].agile, color: '#000000' },
                            { title: 'Pitching Skill', value: count[0].pitchingShill, color: '#C9DAF1' },
                            { title: 'Coding', value: count[0].coding, color: '#82BC95' },
                            { title: 'Data Science', value: count[0].dataScience, color: '#DADADA' },
                            { title: 'Digital Marketing', value: count[0].digitalMarketing, color: '#485C7A' },
                            { title: 'Marketing Communication', value: count[0].marketingCommunication, color: '#FFF2C3' },
                            { title: 'Branding', value: count[0].branding, color: '#EDC10C' },
                            { title: 'Business Model', value: count[0].businessModel, color: '#EDC10C' },
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
        
       </div> */}
    </div>
  );
}

export default Dashboard;
