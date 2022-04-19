import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithTitle = ({path,element}) => {
    return (
        <Route path={path} element={element}></Route>
    );
};

export default RouteWithTitle;