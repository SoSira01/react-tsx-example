import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaCat } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
function GetStart() {
    const [theme, setTheme] = useState<string>(() => {
        return localStorage.getItem('theme') || 'cupcake';
    });
    const navigate = useNavigate();

    const Goback = () => {
        navigate('/');
    };

    const GoNext = () => {
        window.scrollTo(0, 0);
        navigate('/ReactHook');
    };

    const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(event.target.checked ? 'coffee' : 'cupcake');
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme); // Apply the theme to the document root
    }, [theme]);
    
    return (
        <div data-theme={theme}>
            <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-2">
                    <div className="tooltip tooltip-right" data-tip="Cat (: Click to download React-Icon">
                        <a href='https://react-icons.github.io/react-icons' className='px-10'><FaCat className="h-10 w-10" /> </a>
                    </div>
                    <h1 className="text-4xl font-bold">Vite + React: A Beginner’s Guide</h1>
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-5" onClick={Goback}><IoHomeOutline className="h-6 w-6" /></button>

                    <label className="swap swap-rotate ">
                        <input
                            type="checkbox"
                            onChange={toggleTheme}
                            checked={theme === 'coffee'} // Check if the theme is 'coffee'
                        />
                        <input type="checkbox" onChange={toggleTheme} />
                        <FiSun className="swap-off h-6 w-6 fill-current" />
                        <FiMoon className="swap-on h-6 w-6 fill-current" />
                    </label>
                </div>
            </div>

            <p className='text-3xl font-bold px-8 pb-5'>What is React?</p>
            <p className='mx-14 mb-5'>
                React is a front-end development open-source JavaScript library used to create user interface (UI) components. Its component-based and declarative characteristics allow developers to create interactive and complex user interfaces.
            </p>

            <p className='text-2xl font-bold px-8 pb-5'>Why Install Node.js First?</p>
            <p className='mx-14 mb-5'>
                Before starting any React project, you need to have <strong>Node.js</strong> installed on your system. This is because:
            </p>
            <ul className="list-disc mx-20 mb-5">
                <li><strong>Node.js</strong> provides the JavaScript runtime environment necessary to execute JavaScript code outside a browser. Tools like Vite, React, and modern web development frameworks rely on Node.js to function.</li>
                <li><strong>npm</strong> comes bundled with Node.js. npm (Node Package Manager) manages your project's dependencies—such as React, Tailwind CSS, and DaisyUI—and ensures everything works together smoothly.</li>
            </ul>
            <div className='flex justify-center items-center pb-5'>
                <a href='https://nodejs.org/en/download/prebuilt-installer' className='tooltip tooltip-bottom' data-tip="Click to download Node.js">
                    <FaNode className="h-10 w-10 mr-2 text-green-700" />
                </a>
            </div>

            <p className='text-2xl font-bold px-8 pb-5'>Creating A New Project</p>
            <p className='mx-14 mb-5'>
                To start creating your web application, React is only one of the many options you can use as a framework in Vite. After entering the above command, you will be prompted to enter a project name, followed by a list of “Frameworks” and “Variants” to choose from.
            </p>
            <div className="mockup-code mx-20">
                <pre data-prefix="$"><code>npm create vite@latest</code></pre>
            </div>

            <div className="mockup-code mx-20 mt-5">
                <pre data-prefix="$"><code>user@Users-Laptop side-work % npm create vite@latest
                    ? Project name: › vite-project</code></pre>
            </div>

            <p className='text-2xl font-bold px-8 pb-5'>How npm install Works</p>
            <p className='mx-14 mb-5'>
                Once you've created the project using Vite, the next step is running <code>npm install</code>. This command:
            </p>
            <ul className="list-disc mx-20 mb-5">
                <li>Installs all dependencies specified in the <code>package.json</code> file (like React, Tailwind CSS, and DaisyUI).</li>
                <li>Sets up the necessary development environment, ensuring you have all the packages needed to start coding.</li>
            </ul>

            <div className="mockup-code mx-20 mt-5">
                <pre data-prefix="$"><code>user@Users-Laptop side-work % npm create vite@latest</code></pre>
                <pre data-prefix="✔"><code>Project name: … vite-project</code></pre>
                <pre data-prefix="?"><code>Select a framework: › - Use arrow-keys. Return to submit.</code></pre>
                <pre><code className='pl-8'>Vanilla</code></pre>
                <pre><code className='pl-8'>Vue</code></pre>
                <pre data-prefix="❯"><code>React</code></pre>
                <pre><code className='pl-8'>Preact</code></pre>
                <pre><code className='pl-8'>Lit</code></pre>
                <pre><code className='pl-8'>Svelte</code></pre>
                <pre><code className='pl-8'>Solid</code></pre>
                <pre><code className='pl-8'>Qwik</code></pre>
                <pre><code className='pl-8'>Others</code></pre>
            </div>

            <h3 className='text-2xl font-bold px-8 pb-5'>The Development Server</h3>
            <p className='mx-14 mb-5'>
                To start the development server, navigate to your project’s root directory and run the 3 commands where specified below:
            </p>
            <div className="mockup-code mx-20 mt-5">
                <pre data-prefix="$"><code>user@Users-Laptop side-work % npm create vite@latest</code></pre>
                <pre data-prefix="✔"><code>Project name: … vite-project</code></pre>
                <pre data-prefix="✔"><code>Select a framework: › React</code></pre>
                <pre data-prefix="✔"><code>TypeScript</code></pre>

                <pre><code></code></pre>
                <pre><code>Scaffolding project in /Users/user/Development/code/side-work/vite-project...</code></pre>
                <pre><code></code></pre>

                <pre><code>Done. Now run:</code></pre>

                <pre><code className='pl-8'>cd vite-project</code></pre>
                <pre><code className='pl-8'>npm install</code></pre>
                <pre><code className='pl-8'>npm run dev</code></pre>
            </div>

            <h3 className="text-2xl font-bold px-8 pb-5">The Project Structure</h3>
            <ol className="list-decimal pl-24">
                <li><strong>src/:</strong> This directory is where you'll place your application's React source code.</li>
                <li><strong>public/:</strong> Any static assets placed here will be served as-is.</li>
                <li><strong>package.json:</strong> This file contains your project's dependencies and scripts.</li>
                <li><strong>vite.config.js:</strong> It serves as the configuration file for your Vite project.</li>
            </ol>

            <p className="text-2xl font-bold px-8 pb-5">Follow the link to Install Tailwind CSS and daisyUI</p>
            <div className='flex justify-center items-center pb-5'>
                <a href='https://tailwindcss.com/docs/plugins' className='tooltip tooltip-top px-10' data-tip="Click to download TailwindCss"><RiTailwindCssFill className="h-10 w-10 text-blue-500 mr-2" /> </a>
                <a href='https://daisyui.com/docs/install/' className='tooltip tooltip-top' data-tip="Click to download DaisyUI"><SiDaisyui className="h-10 w-10 mr-2" />
                </a>
            </div>
            <div className='flex justify-end items-end pb-5 pr-5'>
                <button className="btn btn-primary px-3 flex items-center gap-2" onClick={GoNext}>
                    Next
                    <MdNavigateNext className="h-6 w-6" />
                </button>
            </div>

        </div>
    );
}

export default GetStart;
