import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouterViews from "@/router";
/**
 * Name: App
 */
const App = () => {
    return (
        <Router>
            <>
                <Header />
                <main className="app__main flex-grow">
                    <RouterViews />
                </main>
                <Footer />
            </>
        </Router>
    );
};

export default React.memo(App);
