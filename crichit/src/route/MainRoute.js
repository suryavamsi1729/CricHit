import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Provider } from "react-redux";
//store importing
import signUpStore from "store/AddUserStor";
/*pages importing*/
import Landingpage from "components/pages/Landingpage";
import Login from "components/pages/auth/Login";
import SignUp from "components/pages/auth/SignUp";
import HomePage from "components/pages/home/HomePage";
import States from "components/pages/statespage/States";
import Home from "components/pages/tourment/Home";
import Team from "components/pages/tourment/Teams";
import Matches from "components/pages/tourment/Matches";
import Live from "components/pages/tourment/Live";
import TourStates from "components/pages/tourment/TourStates";
export default function MainRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landingpage/>}/>
                <Route path="/login" element={<Provider store={signUpStore}><Login/></Provider>}/>
                <Route path="/signup" element={<Provider store={signUpStore}><SignUp/></Provider>}/>
                <Route path="/home" element={<Provider store={signUpStore}><HomePage/></Provider>}/>
                <Route path="/tourment" element={<Provider store={signUpStore}><Home/></Provider>}>
                    <Route path="teams" element={<Provider store={signUpStore}><Team/></Provider>}/>
                    <Route path="matches" element={<Provider store={signUpStore}><Matches/></Provider>}/>
                    <Route path="live" element={<Provider store={signUpStore}><Live/></Provider>}/>
                    <Route path="Stats" element={<Provider store={signUpStore}><TourStates/></Provider>}/>

                </Route>
                <Route path="/state" element={<Provider store={signUpStore}><States/></Provider>}/>
            </Routes>
        </BrowserRouter>
    )
}