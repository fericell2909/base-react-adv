import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import {routes} from './routes';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Cargando . . .</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo" />
                        <ul>
                            {/* TODO: crear navlink dinámico */}
                            {
                                routes.map((r) => {
                                    return (<li><NavLink key={r.name} to={r.to} className={ ({ isActive }) => isActive ? 'nav-active' : '' } >{r.name}</NavLink></li>)
                                })
                            }
                        </ul>
                    </nav>


                    <Routes>
                        {
                            routes.map((r) => {
                                return (<Route key={r.name} path={r.path} element={ <r.Component />} />)
                            })
                        }
                        
                        <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
