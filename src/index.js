import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import 'index.css'

if (document.getElementById('root')) {
    ReactDOM.render(
        <Layout />,
        document.getElementById('root')
    );
}
