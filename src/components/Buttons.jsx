import React, { useRef, useState } from 'react'
import gsap from 'gsap';

const Buttons = ({ setCountry, setCategory }) => {
    const ref = useRef(null);
    const [btnLeft, setBtnLeft] = useState(false);
    const [btnRight, setBtnRight] = useState(false);

    const clickCountry = () => {
        if (!btnLeft) {
            if (btnRight) clickCategory();
            gsap.to('#menuLeft', {
                x: '50vw',
                duration: .2,
            })
            gsap.to('#bgMask', {
                opacity: .5,
                zIndex: 30,
                duration: .1,
            })
            setBtnLeft(true);
        }
        if (btnLeft) {
            gsap.to('#menuLeft', {
                x: 0,
                duration: .2,
            })
            gsap.to('#bgMask', {
                opacity: 0,
                zIndex: -30,
                duration: .1,
            })
            setBtnLeft(false);
        }
    }

    const clickCategory = () => {
        if (!btnRight) {
            if (btnLeft) clickCountry();
            gsap.to('#menuRight', {
                x: '-50vw',
                duration: .2,
            })
            gsap.to('#bgMask', {
                opacity: .5,
                zIndex: 30,
                duration: .1,
            })
            setBtnRight(true);
        }
        if (btnRight) {
            gsap.to('#menuRight', {
                x: 0,
                duration: .2,
            })
            gsap.to('#bgMask', {
                opacity: 0,
                zIndex: -30,
                duration: .1,
            })
            setBtnRight(false);
        }
    }

    return (
        <>
            <div id='bgMask' className='fixed top-0 left-0 w-screen h-screen bg-black opacity-0 -z-30'></div>

            <div className='group' ref={ref}>
                <button className="btn btn-outline btn-primary w-[20vw] mx-10 z-40 relative shadow rounded-full" onClick={clickCountry}>{btnLeft ? '關閉' : '國家'}</button>
                <ul id='menuLeft' className="menu bg-base-200 rounded-box absolute z-30 h-screen w-[50vw] top-0 left-[-50vw]
                flex-col padding-6 gap-2 items-center">
                    <li className='mt-8'><button onClick={() => setCountry('tw')}>台灣 TW</button></li>
                    <li><button onClick={() => setCountry('us')}>美國 US</button></li>
                    <li><button onClick={() => setCountry('jp')}>日本 JP</button></li>
                    <li><button onClick={() => setCountry('gb')}>英國 GB</button></li>
                    <li><button onClick={() => setCountry('fr')}>法國 FR</button></li>
                    <li><button onClick={() => setCountry('cn')}>中國 CN</button></li>
                    <li><button onClick={() => setCountry('gr')}>希臘 GR</button></li>
                    <li><button onClick={() => setCountry('de')}>德國 DE</button></li>
                    <li><button onClick={() => setCountry('it')}>義大利 IT</button></li>
                </ul>
            </div>

            <div className='group'>
                <button className="btn btn-outline btn-primary w-[20vw] mx-10 z-40 relative shadow rounded-full" onClick={clickCategory}>{btnRight ? '關閉' : '類別'}</button>
                <ul id='menuRight' className="menu bg-base-200 rounded-box absolute z-30 h-screen w-[50vw] top-0 right-[-50vw]
                flex-col padding-6 gap-2 items-center">
                    <li className='mt-24'><button onClick={() => setCategory('general')}>一般 General</button></li>
                    <li><button onClick={() => setCategory('business')}>商業 Business</button></li>
                    <li><button onClick={() => setCategory('technology')}>科技 Technology</button></li>
                    <li><button onClick={() => setCategory('entertainment')}>娛樂 Entertainment</button></li>
                    <li><button onClick={() => setCategory('sports')}>體育 Sports</button></li>
                    <li><button onClick={() => setCategory('science ')}>科學 Science </button></li>
                    <li><button onClick={() => setCategory('health')}>健康 Health</button></li>
                </ul>
            </div>
        </>
    )
}

export default Buttons
