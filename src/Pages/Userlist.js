import React,{ useState, useEffect } from "react";
import "./Userlist.css";
import Sidebar from '../Components/Sidebar';
import app from '../Firebase/config';
import {Link} from 'react-router-dom';

function TimeAttendance() {
  const userRef = app.firestore().collection('users');
  const [data, setData] = useState([]);
  const allData = [];
  const getData = () => {
    userRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
            allData.push({id: doc.id, ...doc.data()})
        })
        setData(allData);
    }).catch(function(err) {
        console.log("error getting error")
    })
    // console.log(countData)
  }
  useEffect(getData,[])

  return (
    <div className="timeattendance-root">
      <Sidebar/>
      <div className="timeattendance-root-right">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Company Name</th>
                <th scope="col">Industry</th>
                <th scope="col">Improve</th>
                <th scope="col">Interest In</th>
                <th scope="col">Purpose Visit</th>
                <th scope="col">Frequency</th>
                </tr>
            </thead>
            <tbody>
              {data.map(items => {
                  return <tr>
                    <th scope="row">1</th>
                    <td>{items.FullName}</td>
                    <td>{items.CompanyName}</td>
                    <td>{items.Industry}</td>
                    <td>{items.Improve}</td>
                    <td>{items.interest}</td>
                    <td>{items.purposeVisit}</td>
                    <td>{items.frequency}</td>
                  </tr>
                })}
            </tbody>
            </table>
        </div>
    </div>
  );
}

export default TimeAttendance;
