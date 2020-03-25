import React from 'react'
import YouTube from 'react-youtube';
import img1 from "./images/whatwedo_img1.jpg";


function whatWeDo() {

    const opts = {
        height: '275',
        width: '510',
    };
    return (
        <div className='whatwedo_wrapper'>
            <div className='whywedo_firstsection'>
                <h1 className='whywedo_title'>KraveBeauty Products</h1>

                <YouTube videoId="d-48HYvt27M" opts={opts} />

                <p className='whatwedo-subtitle_italic'>
                    "We’re here to press reset on the conventional skincare routine, should do’s, supposed to do’s and all the skincare rules."
             </p>
                <p className='whatwedo-subtitle'>
                    Core Series
             </p>

                <p className='whatwedo-subtitle1'>
                    <span>
                        <a className="text-link"
                            href='https://kravebeauty.com/products/matcha-hemp-hydrating-cleanser'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Cleanse
                     </a></span>, <span>Moisturize</span> <span>and</span> <span>
                        <a className="text-link"
                            href='https://kravebeauty.com/collections/core-series/products/the-beet-shield'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Protect (SPF)
                     </a></span>
                </p>
                <p className='whatwedo-text'>
                    Press reset and strip down to the basics. Our Core Series is a basic yet purposeful range of products to protect your skin’s health. Nothing fancier than that. They’re here to help your skin to function at its best.
             </p>
                <p className='whatwedo-subtitle3'>
                    Supplement Series
             </p>

                <p className='whatwedo-subtitle1'>
                    Functional (not conventional) targeted solutions.
             </p>
                <p className='whatwedo-text'>
                    Our Supplement Series replenishes what your skin lacks while restoring your skin’s balance. Addressing different types of skincare concerns, it delivers results without compromising your skin’s natural functionality, microbiome, and epidermal barrier function.
             </p>

                <p className='whatwedo-subtitle_italic1'>
                    *All KraveBeauty products are vegan-friendly, cruelty-free, and formulated without fragrance, essential oil, colorant, and potential allergic sensitizers.
             </p>
                <p className='whywedo_firstsection-img'>
                    <img className='whatwedo_img1' src={img1} alt=' ' />
                </p>
                <p className='whatwedo-subtitle'>
                    Skin-Respecting Formula
             </p>

                <p className='whatwedo-text1'>
                    We create skincare that works with your skin, not against it. We respect the skin's natural functionality and that's why our products are based on non-irritating, non-sensitizing and fragrance-free formulas blended with “skin Krave-able” antioxidants and nutrients. They are presented in their best forms with skin-respecting concentrations of proven actives that provide your skin with what it needs to perform at its best.
             </p>

                <p className='whatwedo-subtitle'>
                    (REALLY) Truthful Guidance
             </p>

                <p className='whatwedo-text1'>
                    You deserve to know exactly what you’re getting and how often you really need it. We don’t pretend all ingredients have equal levels of scientific evidence or proven history. We don’t only highlight the good sides of an ingredient or carelessly recommend you to apply more.
             </p>
                <p className='whatwedo-text'>
                    <span>
                        Truthful guidance is what we’re here for. We'll guide you to how to converse with your skin, get to know it and pay attention to how it responds to what you’re giving it.
                    </span> <span>
                        <a className="text-link"
                            href='https://kravebeauty.com/blogs/news'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Check out our blog.
                     </a>
                    </span>


                </p>
                <p className='whatwedo-subtitle'>
                    Your Voice
             </p>
                <p className='whatwedo-text'>
                We didn’t start KraveBeauty to just add another product to your skincare routine, but to create what would serve a true purpose on your vanity. We have your skin’s health in our best interest and our team will be there for you every step of the way through our social channels. 
             </p>
                <p className='whatwedo-text'>
                    <span>That’s why we need to chat with you—anytime, day and night! Let’s make this together, exactly the way we want it. Speak up on our Instagram</span> <span>
                        <a className="text-link1"
                        href='https://www.instagram.com/kravebeauty/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                            @kravebeauty
                     </a> and let's #pressreset.
                     </span>
                    
                   
             </p>
            </div>

        </div>


    )
}

export default whatWeDo
