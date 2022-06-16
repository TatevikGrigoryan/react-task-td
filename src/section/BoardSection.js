import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { boardRoutes } from '../router';
import BoardHeader from '../components/board/BoardHeader';

import '../assets/scss/section/boardSection.scss'
import BoardSidebar from "../components/board/sidebar/BoardSidebar";
import MessageUs from '../components/board/MessageUs'

function BoardSection() {
    const user = {
        name: 'Kevin',
        surname: 'Doe'
    }

    return (
        <div className='boardSection'>
            <BoardHeader
                title='TolaData'
                user={user}
            />

            <div className='boardSection__content'>
                <BoardSidebar />

                <Routes>
                    {boardRoutes.map(route =>
                        <Route
                            path={route.path}
                            exact
                            element={route.component}
                            key={route.path}
                        />
                    )}
                </Routes>
              <MessageUs />
            </div>
        </div>
    )
}

export default BoardSection;