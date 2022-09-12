import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

export const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={profile} />
        <Route exact path="/Projetos" component={projects} />
        <Route exact path="/Contato" component={contact} />
    </BrowserRouter>
);