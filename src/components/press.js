import React from 'react'
import img1 from "./images/press_img1.jpg";
import pur from "./images/press_pur.jpg";
import newb from "./images/press_newb.jpg";
import glam from "./images/press_glam.jpg";
import alur from "./images/press_allure.jpg";
import fashion from "./images/press_fashion.jpg";
import wood from "./images/press_wood.jpg";
import wgsn from "./images/press_wgsn.jpg";
import byrdie from "./images/press_byrdie.jpg";
import lsn from "./images/press_lsn.jpg";
import wwd from "./images/press_wwd.jpg";



function press() {

    return (
        <div className='press_wrapper'>
            <div className='press_firstsection'>
                <div className='press_firstsection-text'>
                    <p className='press_title'>"We’re here to press reset
                    on the conventional skincare routine,
                    should do’s, supposed to do’s
and all the skincare rules."</p>
                </div>
                <div className='press_firstsection-img'>
                    <img className='press_img1' src={img1} alt=' ' />
                </div>
            </div>
            <div className='press_secondsection'>
                <p>
                    Featured in
                </p>
            </div>
            <div className='press_thirdsection'>
                <a className="text-link2"
                    href='https://twentynothing.me/interviews/liah-yoo'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='press_thirdsection_nested'>
                        <img className='press_img2' src={pur} alt=' ' />
                        <p className='press-img2_text'>Dec 2018</p>
                    </div>
                </a>
                <a className="text-link2"
                    href='https://www.newbeauty.com/blog/dailybeauty/12579-ph-levels-beauty-products-michelle-wong/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='press_thirdsection_nested'>
                        <img className='press_img2' src={newb} alt=' ' />
                        <p className='press-img2_text'>Nov 2018</p>
                    </div>
                </a>
                <a className="text-link2"
                    href='https://www.glamourmagazine.co.uk/article/korean-cotton-pads-k-beauty-skin'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='press_thirdsection_nested'>
                        <img className='press_img2' src={glam} alt=' ' />
                        <p className='press-img2_text'>Oct 2018</p>
                    </div>
                </a>
                <a className="text-link2"
                    href='https://www.allure.com/story/korean-skin-care-diet-minimalist-beauty-routine'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='press_thirdsection_nested'>
                        <img className='press_img2' src={alur} alt=' ' />
                        <p className='press-img2_text'>Sep 2018</p>
                    </div>
                </a>
                <a className="text-link2"
                    href='https://fashionista.com/2018/09/accutane-must-have-products-dry-skin-relief'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='press_thirdsection_nested'>
                        <img className='press_img2' src={fashion} alt=' ' />
                        <p className='press-img2_text'>Sep 2018</p>
                    </div>
                </a>
                <a className="text-link2"
                    href='https://issuu.com/woodburymagazine/docs/spring_2018?e=5329773%2F58743001'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='press_thirdsection_nested'>
                        <img className='press_img2' src={wood} alt=' ' />
                        <p className='press-img2_text'>Mar 2018</p>
                    </div>
                </a>
                <a className="text-link2"
                    href='https://cdn.shopify.com/s/files/1/2090/8057/files/WGSN_Jan2018_-_Back-to-Basics_Beauty_Brands.pdf?17005145328717'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='press_thirdsection_nested'>
                        <img className='press_img2' src={wgsn} alt=' ' />
                        <p className='press-img2_text'>Jan 2018</p>
                    </div>
                </a>
                <a className="text-link2"
                    href='https://www.byrdie.com/makeup-face-4628400'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='press_thirdsection_nested'>
                        <img className='press_img2' src={byrdie} alt=' ' />
                        <p className='press-img2_text'>Jan 2018</p>
                    </div>
                </a>
                <a className="text-link2"
                    href='https://www.lsnglobal.com/news/article/21969/need-to-know-02-01-18'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='press_thirdsection_nested'>
                        <img className='press_img2' src={lsn} alt=' ' />
                        <p className='press-img2_text'>Dec 2018</p>
                    </div>
                </a>
                <a className="text-link2"
                    href='https://wwd.com/beauty-industry-news/beauty-features/influence-peddler-vlogger-liah-yoo-to-launch-skin-care-brand-krave-11059068/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='press_thirdsection_nested'>
                        <img className='press_img2' src={wwd} alt=' ' />
                        <p className='press-img2_text'>Nov 2018</p>
                    </div>
                </a>

            </div>
            <div className='press_fourthsection'>
                <div className='press_fourthsection-about'>
                    <span className='press_fourthsection-title'>
                        “I want to write about YOU.”
                        </span>
                    <p>
                        Want to interview us or
                        showcase our products?
                        For press related questions
                        email alexandra@kravebeauty.com
                        Get in touch!
                    </p>
                </div>
                <div className='press_fourthsection-myself'>
                    <span className='press_fourthsection-title'>“I’ll figure it out myself.”</span>
                    <span style= {{marginBottom:'10px'}}>Download assets</span>

                    <a className="text-link2"
                        href='https://cdn.shopify.com/s/files/1/2090/8057/files/Download_Logo.zip?6906221989979267300'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='press_fourthsection-download'> DOWNLOAD LOGO</div>
                    </a>

                    <a className="text-link2"
                        href='https://drive.google.com/file/d/1Xhx9Rt_sm-6FsyHuF54R5vCwsiobvMCg/view'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='press_fourthsection-download'> DOWNLOAD PHOTOGRAPHY</div>
                    </a>
                    <a className="text-link2"
                        href='https://cdn.shopify.com/s/files/1/2090/8057/files/KraveBeauty_by_Liah_Yoo.pdf?3118671305376575567'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='press_fourthsection-download'>DOWNLOAD FOUNDER'S BIO
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default press
