import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Home from "./Components/WithinDashboard/Home/Home";
import Jobs from "./Components/WithinDashboard/Jobs/Jobs";
import Resume from "./Components/WithinDashboard/Reumes/Resume";
import Editprofile from "./Components/WithinDashboard/Forums/EditProfile";
// import AcademicDetailsForm from "./Components/WithinDashboard/editprofile/Forms/AcademicDetailsForm";
// import GeneralDetailsForm from "./Components/WithinDashboard/editprofile/Forms/GeneralDetailsForm";
// import ExperienceDetailFrom from "./Components/WithinDashboard/editprofile/Forms/ExperienceDetailFrom";
// import ProjectDetialForm from "./Components/WithinDashboard/editprofile/Forms/ProjectDetailForm";
import Opportunites from "./Components/WithinDashboard/Jobs/JobCategories/Opportunites";
import Application from "./Components/WithinDashboard/Jobs/JobCategories/Application";
import Offers from "./Components/WithinDashboard/Jobs/JobCategories/Offers";
import JD from "./Components/WithinDashboard/Jobs/JobDescription/JD";
import AcademicDetailsForm from "./Components/WithinDashboard/Forums/Forms/AcademicDetailsForm";
import GeneralDetailsForm from "./Components/WithinDashboard/Forums/Forms/GeneralDetailsForm";
import ExperienceDetailFrom from "./Components/WithinDashboard/Forums/Forms/ExperienceDetailFrom";
import ProjectDetialForm from "./Components/WithinDashboard/Forums/Forms/ProjectDetailForm";
import GeneralDetailsForm1 from "./FormTesting/GeneralDetailsForm1";
import AdminLayout from "./Components/AdminDashboard/Layout/AdminLayout";
import JobPost from "./Components/AdminDashboard/JobPost/JobPost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Dashboard />}>
        <Route path="/" element={<Home />} />

        <Route path="/d/jobs" element={<Jobs />}>
          <Route path="" element={<Opportunites />} />
          <Route path="applications" element={<Application />} />
          <Route path="offers" element={<Offers />} />
          <Route path=":id" element={<JD />} />
          {/* this above one is job description */}
        </Route>

        <Route path="/d/resumes" element={<Resume />} />
        <Route path="/d/editprofile" element={<Editprofile />}>
          <Route path="" element={<GeneralDetailsForm />} />
          {/* <Route path="*" element={<GeneralDetailsForm />} /> */}
          <Route path="academic" element={<AcademicDetailsForm />} />
          <Route path="experience" element={<ExperienceDetailFrom />} />
          <Route path="projects" element={<ProjectDetialForm />} />
        </Route>
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<JobPost />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <GeneralDetailsForm1/> */}
    </>
  );
}

export default App;
