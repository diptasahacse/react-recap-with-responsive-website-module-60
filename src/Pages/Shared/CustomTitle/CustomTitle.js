import React from 'react';
import { Helmet } from 'react-helmet-async';

const CustomTitle = ({ title }) => {
    return (
        <Helmet>
            <title>{title + " - Genious Car Service"}</title>
        </Helmet>
    );
};

export default CustomTitle;