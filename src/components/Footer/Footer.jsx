import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-6 px-8">
            <div className="max-w-6xl mx-auto text-center">
                <hr className="border-gray-600 my-4"/>

                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Diyaa Daifi-(d4d). All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
