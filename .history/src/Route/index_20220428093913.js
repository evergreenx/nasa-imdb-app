import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home 


import React from 'react'

export function index() {
    render(
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route>
      </Routes>
    );
}
