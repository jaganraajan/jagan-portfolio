import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-16 bg-gray-900 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Jagan Raajan. All rights reserved.</p>
                <ul className="flex space-x-4 mt-4 md:mt-0">
                    <li>
                        <a
                            href="https://github.com/jaganraajan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/jaganraajan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:jaganraajan@gmail.com"
                            className="hover:text-gray-400 transition-colors"
                        >
                            Email
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;