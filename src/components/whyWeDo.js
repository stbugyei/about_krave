import React from 'react'
import YouTube from 'react-youtube';
import img1 from "./images/whywedo_img1.jpg";
import img2 from "./images/whywedo_img2.jpg";
import img3 from "./images/whywedo_img3.png";


function whyWeDo() {

    const opts = {
        height: '275',
        width: '510',
    };
    return (
        <div className='whywedo_wrapper'>
            <div className='whywedo_firstsection'>
                <h1 className='whywedo_title'>It's time to #PressReset</h1>
                <p className='whywedo_firstsection-subtitle'>Have you ever felt lost with skincare?
             </p>
                <p className='whywedo_firstsection-text'>
                    There is so much information to digest and so much to apply - literally. You’re constantly being told to buy this new miracle cream or to try that new all-in-one mask. You just don’t know what to do, or where to even start.
             </p>
                <p className='whywedo_firstsection-subtitle'>
                    We feel you.
             </p>
                <p className='whywedo_firstsection-text'>

                    What happened to the days when skincare was a fun way to practice self-care, when skincare was catered to <span className='whywedo_firstsection-italictext'>your</span> skin and <span className='whywedo_firstsection-italictext'>your</span> lifestyle, when skincare was simple.
             </p>
                <p className='whywedo_firstsection-text'>
                    That’s where we come in. We’re here to help you press reset on your skincare routine and make the industry a more transparent place.
             </p>
                <p className='whywedo_firstsection-img'>
                    <img className='whywedo_img1' src={img1} alt=' ' />
                </p>
            </div>
            <div className='whywedo_secondsection'>
                <h1 className='whywedo_secondsection_title'>
                    Hi! We're KraveBeauty
                 </h1>
                <p className='whywedo_secondsection-text'>
                    We’re a skincare company that sells a cleanser while telling you to cleanse less. WHAT? I know, how ironic, right? Are we non-profit? No. We have bills to pay. We just believe that being transparent wouldn’t compromise the company’s growth.
             </p>
                <p className='whywedo_secondsection-text'>
                    We’re good people, with good intention, a nerdy friend who’s looking out for you--starting from your skin.
             </p>
                <p className='whywedo_secondsection-text'>
                    A bit more about us? Our brand was founded by beauty influencer, Liah Yoo, to fight the ineffective yet conventional skincare routine that has trained you to apply more than what your skin actually needs.
             </p>
                <p className='whywedo_secondsection-text'>
                    It’s simple. We tell the truth to make your skin to its top notch shape, and we create skincare products that work with your skin, not against it.
             </p>
                <p className='whywedo_secondsection-text'>
                    <a className="text-link"
                        href='https://www.instagram.com/kravebeauty/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        #PressReset @kravebeauty
                     </a>
                </p>
                <p className='whywedo_secondsection-img'>
                    <img className='whywedo_img2' src={img2} alt=' ' />
                </p>
                <p className='whywedo_secondsection-imgtext'>
                    Meet our founder, Liah Yoo
             </p>
                <p className='whywedo_firstsection-italictext'>
                    Liah Yoo is a beauty influencer known for sharing skincare tips that empower her viewers with knowledge coupled with the experience she gained while working at Korea's largest beauty company, AmorePacific. She has an international social media reach of over 700,000 followers and built her credibility by helping hundreds of people achieve clearer and healthier skin by sharing her unconventional acne-fighting tips based on her own skincare journey.
             </p>
                <YouTube videoId="nRWY-ZQWOP8" opts={opts} />
                <p className='whywedo_secondsection-subtitle'>
                    Heyo, it's Liah!
             </p>
                <p className='whywedo_secondsection-text'>
                    The struggle is real. Since the start of my YouTube channel, I've realized so many of us had become overwhelmed by the world of skincare. When did something that should be so simple become so stressful? We’ve been trained to apply more and ignore what our skin is saying, what it is craving. I was a victim once too, shoving products onto my face that my skin didn't want
             </p>
                <p className='whywedo_secondsection-text'>
                    I created KraveBeauty to help you #PressReset on your skincare routine and all the noise from the beauty industry. You’ll find KraveBeauty different from other brands in many ways. We believe everything we do can eventually turn the flawed beauty industry into a more transparent place. A place that really cares about our skin instead of just profits. We can’t create the change without you, so please join us on the #PressReset journey!
             </p>
                <p className='whywedo_secondsection-text'>
                    xoxo,
             </p>
                <p className='whywedo_secondsection-text'>
                    <a className="text-link"
                        href='https://www.youtube.com/liahyoo'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Liah
                     </a>
                </p>
                <YouTube videoId="ybF8vMnivK4" opts={opts} />
            </div>
            <div className='whywedo_thirdsection'>
                <h1 className='whywedo_thirdsection_title'>
                    Three reasons to join the
                    #PressReset movement
                 </h1>
                <p className='whywedo_thirdsection-subtitle'>
                    1. Because you’ve tried everything
             </p>
                <p className='whywedo_thirdsection-text'>
                    And it’s left you feeling helpless. It’s time for you to #PressReset, simplify your routine, and tune into what your skin is craving. Don’t worry, we’re here for you every step of the way.
             </p>
                <p className='whywedo_thirdsection-subtitle'>
                    2. Because you know less is really more
             </p>
                <p className='whywedo_thirdsection-text'>
                    Your skin is incredibly smart. It knows how to regenerate new skin when you get a papercut, how to produce oil to moisturize the skin when it’s dehydrated. Mindblown? Your skin is a rockstar, so stop fighting it! Skincare products should act as a supplement to replenish what your skin lacks and keep it protected.
             </p>
                <p className='whywedo_thirdsection-subtitle'>
                    3. Because you know we have your back
             </p>
                <p className='whywedo_thirdsection-text'>
                    Many brands create products that sell rather than products that consider your skin’s health, but that’s not in our DNA. We will always prioritize simplicity and purpose within our product range and in helping equip yourself with skincare knowledge that empowers rather than paralyzes you.
             </p>
                <p className='whywedo_thirdsection-img'>
                    <img className='whywedo_img3' src={img3} alt=' ' />
                </p>
                <p className='whywedo_thirdsection-subtitle1'>
                    Press reset.
             </p>
                <p className='whywedo_thirdsection-text1'>
                    Skincare should be easy,
                    Skincare should be a stress-free zone,
                    Skincare should be a supplement to our lifestyle.
                    And most of all, skincare basics should be, basic.
             </p>
                <p className='whywedo_thirdsection-text1'>
                    It’s time to #pressreset.
             </p>
            </div>
        </div>


    )
}

export default whyWeDo
