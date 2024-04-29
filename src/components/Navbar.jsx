import React, { useState, useEffect } from 'react';

const Navbar = () => {

    const [theme, setTheme] = useState('winter'); // 初始主題設為 'winter'

    useEffect(() => {
        // 當主題改變時，更新 <html> 的 data-theme 屬性
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]); // 當 theme 變化時觸發這個效果


    return (
        <>
            <div className="navbar bg-base-100 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>Contact :</li>
                            <li>yimingliao.official@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a href='.navbar' className="btn btn-ghost text-xl">Top Ten News !</a>
                </div>
                <div className="navbar-end">

                    <details className="dropdown">
                        <summary className="m-1 btn btn-outline btn-neutral rounded-full shadow z-50">Theme</summary>
                        <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-24 z-50">
                            <li><button onClick={() => setTheme('light')}>明亮</button></li>
                            <li><button onClick={() => setTheme('dark')}>暗色</button></li>
                            <li><button onClick={() => setTheme('winter')}>冬天</button></li>
                            <li><button onClick={() => setTheme('autumn')}>秋天</button></li>
                            <li><button onClick={() => setTheme('aqua')}>海洋</button></li>
                            <li><button onClick={() => setTheme('forest')}>森林</button></li>
                        </ul>
                    </details>

                </div>
            </div>
        </>
    )
}

export default Navbar
