import React from "react";
import CandidateRegisterPage from "../pages/Register/CandidateRegisterPage";
import HomePage from "../pages/Home/HomePage";
import JobAdvertisementPage from "../pages/JobAdvertisement/JobAdvertisementPage";
import Footer from "./Footer";
import { Route } from "react-router";
import Navi from "./Navi";
import EmployerRegisterPage from "../pages/Register/EmployerRegisterPage";
import JobPostingsPage from "../pages/JobPostingsAdd/JobPostingsPage";
import JobAdvertisementDetailPage from "../pages/JobAdvertisement/JobAdvertisementDetailPage";
import ResumeViewPage from "../pages/Resume/ResumeViewPage";
import ProfilPage from "../pages/Profil/ProfilPage";


export default function Dashboard() {
  document.body.style.backgroundColor = "#dddddd";
  return (
    <div>
      <Navi></Navi>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/anasayfa" component={HomePage} />
      <Route exact path="/profil" component={ProfilPage} />
      <Route exact path="/jobadvertisement" component={JobAdvertisementPage} />
      <Route path="/registercandidate" component={CandidateRegisterPage} />
      <Route path="/registeremployer" component={EmployerRegisterPage} />
      <Route path="/jobPostingsAdd" component={JobPostingsPage} />
      <Route
        path="/jobadvertisement/:id"
        component={JobAdvertisementDetailPage}
      />
      <Route path="/resumeView" component={ResumeViewPage} />
    
      <Footer></Footer>
    </div>
  );
}
