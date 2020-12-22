import React from "react";
import "./Userlist.css";
import Sidebar from '../Components/Sidebar';
import {Link} from 'react-router-dom';

function TimeAttendance() {
  return (
    <div className="timeattendance-root">
      <Sidebar/>
      <div className="timeattendance-root-right">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Type</th>
                <th scope="col">Site Location</th>
                <th scope="col">Time-In</th>
                <th scope="col">Time-Out</th>
                <th scope="col">Late Count</th>
                <th scope="col">Leave</th>
                <th scope="col">OTx1</th>
                <th scope="col">OTx1.5</th>
                <th scope="col">OTx3</th>
                <th scope="col">Wage Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>AAA</td>
                <td>Payroll</td>
                <td>xxx</td>
                <td>7.49 AM</td>
                <td>17:00 PM</td>
                <td>-</td>
                <td>4</td>
                <td>3</td>
                <td>2</td>
                <td>3</td>
                <td>XXXX</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>BBB</td>
                <td>SubContractor</td>
                <td>xxx</td>
                <td>7.49 AM</td>
                <td>17:00 PM</td>
                <td>-</td>
                <td>4</td>
                <td>3</td>
                <td>2</td>
                <td>3</td>
                <td>XXXX</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>CCC</td>
                <td>Monopoly Contractor</td>
                <td>xxx</td>
                <td>7.49 AM</td>
                <td>17:00 PM</td>
                <td>-</td>
                <td>4</td>
                <td>3</td>
                <td>2</td>
                <td>3</td>
                <td>XXXX</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
  );
}

export default TimeAttendance;
