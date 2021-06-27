import React from "react";
import EmployeeDashboard from "../EmployeeLayouts/EmployeeDashboard";
import CandidateRegisterPage from "../pages/Register/CandidateRegisterPage";
import HomePage from "../pages/Home/HomePage";
import JobAdvertisementPage from "../pages/JobAdvertisement/JobAdvertisementPage";
import Footer from "./Footer";
import { Route } from "react-router";
import Navi from "./Navi";
import EmployerRegisterPage from "../pages/Register/EmployerRegisterPage";
import Resume from "../pages/Resume/Resume";
import JobPostingsPage from "../pages/JobPostingsAdd/JobPostingsPage";
import JobAdvertisementDetailPage from "../pages/JobAdvertisement/JobAdvertisementDetailPage";
import ResumeViewPage from "../pages/Resume/ResumeViewPage";
export default function Dashboard() {
  
document.body.style.backgroundColor="#dddddd"
  return (
    <div>
      
      {/* <Navi></Navi>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/anasayfa" component={HomePage}/>
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/jobadvertisement" component={JobAdvertisementPage}/>
      <Route path="/registercandidate" component={CandidateRegisterPage}/>
      <Route path="/registeremployer" component={EmployerRegisterPage}/>
      <Route path="/jobPostingsAdd" component={JobPostingsPage}/>
      <Route path="/jobadvertisement/:id" component={JobAdvertisementDetailPage}/>
      <Route path="/resumeView" component={ResumeViewPage }/> 

    
  
     
      <Footer></Footer> */}



       <EmployeeDashboard></EmployeeDashboard>  
    </div>
  );
}
