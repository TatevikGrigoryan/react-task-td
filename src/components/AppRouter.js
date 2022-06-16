import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
    const auth = true;

    return (
        auth
            ? (
                <Routes>
                    {privateRoutes.map(route =>
                        <Route path={route.path}
                               exact={route.exact}
                               element={route.component}
                               key={route.path}
                        />
                    )}
                </Routes>
            )

            : (
                <Routes>
                    {publicRoutes.map(route =>
                        <Route path={route.path}
                               exact={route.exact}
                               element={route.component}
                               key={route.path}
                        />
                    )}
                </Routes>
            )
    )
}