import React from "react";
import html from "../assets/5847f5c3cef1014c0b5e489d.png";
import css from "../assets/output-onlinepngtools.png";
import java from "../assets/javascript-39404.png";
import react from "../assets/React.png";

const SkillSection = () => {
  return (
    <section className="py-4">
      <div className="flex justify-center text-4xl font-bold">My Skills</div>
      <div className="container-xl lg:container m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg">
          <div className="bg-gray-400 p-4 rounded-xl">
            <div className="flex flex-row h-10 gap-4">
              <img src={html} alt="html" />
              <h2 className="text-2xl font-black ">HTML</h2>
            </div>
            <p className="mt-2 mb-4">
              HTML is the standard markup language for creating and structuring
              content on the web. It defines the structure of web pages using
              elements like headings, paragraphs, images, and links. HTML is the
              foundation of web development and is essential for building web
              pages.
            </p>
          </div>
          <div className="bg-gray-400 p-4 rounded-xl">
            <div className="flex flex-row h-10 gap-4">
              <img src={css} alt="html" />
              <h2 className="text-2xl font-black ">CSS</h2>
            </div>
            <p className="mt-2 mb-4">
              CSS is a stylesheet language used to describe the presentation and
              layout of a document written in HTML or XML. It allows developers
              to style web pages by specifying colors, fonts, spacing, and
              overall design. CSS provides a powerful way to create visually
              appealing and responsive designs.
            </p>
          </div>
          <div className="bg-gray-400 p-4 rounded-xl">
            <div className="flex flex-row h-10 gap-4">
              <img src={java} alt="html" />
              <h2 className="text-2xl font-black ">JAVASCRIPT</h2>
            </div>
            <p className="mt-2 mb-4">
              JavaScript is a versatile scripting language used to create
              dynamic and interactive web applications. It enables developers to
              manipulate the content, behavior, and appearance of web pages in
              real-time. JavaScript is an essential tool for adding
              interactivity, such as animations, form validations, and user
              interactions.
            </p>
          </div>
          <div className="bg-gray-400 p-4 rounded-xl">
            <div className="flex flex-row h-10 gap-4">
              <img src={react} alt="html" />
              <h2 className="text-2xl font-black ">REACT</h2>
            </div>
            <p className="mt-2 mb-4">
              React is a popular JavaScript library for building user
              interfaces, particularly for single-page applications. It allows
              developers to create reusable UI components and manage the state
              of the application efficiently. React's virtual DOM and
              component-based architecture make it powerful for building fast
              and scalable web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
