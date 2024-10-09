import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaCat } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

function ReactHook() {
    const [theme, setTheme] = useState<string>(() => {
        return localStorage.getItem('theme') || 'cupcake';
    });
    const navigate = useNavigate();

    const Goback = () => {
        window.scrollTo(0, 0);
        navigate('/GetStart');
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

            <p className='text-3xl font-bold px-8 pb-5'>React Hooks</p>
            <p className='mx-14 mb-5'>Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>

            <p className='text-2xl font-bold px-8 pb-5'>React useState Hook</p>
            <p className='mx-14 mb-5'>To use the useState Hook, we first need to import it into our component.</p>

            <div className="mockup-code mx-20">
                <pre>
                    <code>
                        import {'{useState}'} from "react";
                    </code>
                </pre>
            </div>

            <p className='text-2xl font-bold px-8 pb-5'>Initialize useState</p>
            <p className='mx-14 mb-5'>
                <strong>useState</strong> accepts an initial state and returns two values:
            </p>
            <ul className="list-disc mx-20 mb-5">
                <li>The current state.</li>
                <li>A function that updates the state.</li>
            </ul>

            <div className="mockup-code mx-20 mt-5">
                <pre data-prefix="1">
                    <code>import {'{ useState }'} from "react";</code>
                </pre>
                <pre data-prefix="2">
                    <code>function FavoriteColor() {'{'}</code>
                </pre>
                <pre data-prefix="3">
                    <code>  const [color, setColor] = useState("");</code>
                </pre>
                <pre data-prefix="4">
                    <code>  return (</code>
                </pre>
                <pre data-prefix="5">
                    <code>    &lt;div&gt;My favorite color is {'{color}'}&lt;/div&gt;;</code>
                </pre>
                <pre data-prefix="6">
                    <code>  );</code>
                </pre>
                <pre data-prefix="7">
                    <code>{'}'}</code>
                </pre>
            </div>

            <p className='text-2xl font-bold px-8 pb-5'>React useEffect Hooks</p>
            <p className='mx-14 mb-5'>The <strong>useEffect</strong>  Hook allows you to perform side effects in your components.</p>
            <p className='mx-14 mb-5'>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>

            <div className="mockup-code mx-20">
                <pre data-prefix="1"><code>import {'{ useState, useEffect }'} from "react";</code></pre>
                <pre data-prefix="2"><code>import ReactDOM from "react-dom/client";</code></pre>
                <pre data-prefix="3"><code>function Timer() {'{'}</code></pre>
                <pre data-prefix="4"><code> const [count, setCount] = useState(0);</code></pre>
                <pre data-prefix="5"><code> {'useEffect(() => {'}</code></pre>
                <pre data-prefix="6"><code>  {'setTimeout(() => {'}</code></pre>
                <pre data-prefix="7"><code>   {'setCount((count) => count + 1);'}</code></pre>
                <pre data-prefix="8"><code>   {', 1000);'}</code></pre>
                <pre data-prefix="9"><code>  {'}, []);'}</code></pre>
                <pre data-prefix="10"><code> return &lt;h1&gt;I've rendered {'{count}'} times!&lt;/h1&gt;;</code></pre>
                <pre data-prefix="11"><code>{'}'}</code></pre>
                <pre data-prefix="12"><code>const root = ReactDOM.createRoot(document.getElementById('root'));</code></pre>
                <pre data-prefix="13"><code>root.render(&lt;Timer /&gt;);</code></pre>
            </div>
            <div className="flex justify-start items-start pb-5 pl-5">
                <button className="btn btn-primary px-3 flex items-center gap-2" onClick={Goback}>
                    <IoIosArrowBack className="h-6 w-6" />
                    Back
                </button>
            </div>
        </div>
    );
}

export default ReactHook;
