import React from 'react';
import { Helmet } from 'react-helmet-async';
import myImage from '../../../src/Assets/Image/myImage.png'

const HelmetComponent = () => {
    return (
        <>
            <Helmet>
                <title>VIKAS H K | Front-end Developer | Web Developer | React Developer | NextJs Developer | JavaScript | Material Tailwind - Bangalore, India</title>
                <meta
                    name="description"
                    content="John Doe is a Creative Director and UI/UX Designer from Sydney, Australia. Specializing in web development and print media, he turns complex problems into simple, beautiful, and intuitive designs. Explore his portfolio of web designs for famous brand companies."
                />
                <meta
                    name="keywords"
                    content="Front-end Developer, Web Developer , Web Design, React Developer, NextJs Developer, Portfolio, Web Development, JavaScript, ES6, Material Tailwind, Tailwind CSS, Git, GitHub"
                />
                <meta property="og:title" content="VIKAS H K | Front-end Developer | Web Developer | React Developer | NextJs Developer | JavaScript | Material Tailwind - Bangalore, India" />
                <meta
                    property="og:description"
                    content="Explore the portfolio of Vikas h k, a Front-end Develope and React Developer based in Bangalore, India. See my work in web development and Web apps."
                />
                <meta property="og:image" content={`${myImage}`} />
                <meta property="og:url" content="https://vikas-hk-portfolio.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="VIKAS H K | Front-end Developer | Web Developer | React Developer | NextJs Developer | JavaScript | Material Tailwind - Bangalore, India<" />
                <meta
                    name="twitter:description"
                    content="Explore the portfolio of Vikas h k, a Front-end Develope and React Developer based in Bangalore, India. See my work in web development abd Web apps."
                />
                <meta name="twitter:image" content={`${myImage}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://vikas-hk-portfolio.vercel.app/" />
                <meta name="robots" content="index, follow" />
            </Helmet>
        </>
    );
};

export default HelmetComponent;
