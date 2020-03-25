import React from 'react'
import img1 from "./images/careers_img1.jpg";


function careers() {

    return (
        <div className='careers_wrapper'>
            <div className='careers'>
                <h1 className='careers_title'>KraveBeauty Careers #TeamKraveBeauty</h1>
                <p className='careers-img'>
                    <img className='careers_img1' src={img1} alt=' ' />
                </p>
                <p className='careers-text1'><span>
                    Dear misfits, troublemakers, the ones who see things differently:</span> <span className='careers-text1_bold'>We crave you.</span>
                
             </p>
                <p className='careers-subtitle'>
                    Dare to be different
             </p>
                <p className='careers-text'>
                    Making a difference doesn’t come from following rules. Just as Steve Jobs described, the misfits, the rebels, the troublemakers, the round pegs in the square holes, the one who see things differently are the ones who change the paradigm. At KraveBeauty, we couldn’t care less about the degree or the grade you graduated with. Just show us that you care enough to make a difference in the broken industry.
             </p>

                <p className='careers-subtitle'>
                    Action, not words
             </p>

                <p className='careers-text'>
                    We’re not interested in your great plans if you’re not going to act on it. What pushes the business forward are the doers. Trust us, life is far more fun when you take those small steps of execution and act on your crazy ideas. Small incremental steps of action can compound to a bigger change at the end. So… JUST DO IT!
             </p>


                <p className='careers-subtitle'>
                    Critical Design Thinking
             </p>

                <p className='careers-text'>
                    At KraveBeauty, we appreciate people who embedded critical design thinking skills. And no, you don’t need to be a designer in order to have this mindset. Design Thinking is a problem-solving process that deeply empathizes with the user experience in order to come up with an innovative solution. Design Thinking encourages us to focus on the people we’re doing the business for and leads to human-centered products. Because we’re not here to just make products for the sake of it.
             </p>

                <p className='careers-text2'>
                    Sounds like you? That's awesome. We're currently hiring the positions below!
                     </p>

                <p className='careers-text'>
                    <a className="text-link"
                        href='https://www.youtube.com/liahyoo'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Sustainability Specialist
                     </a>
                </p>
                <p className='careers-text'>
                    <a className="text-link"
                        href='https://www.youtube.com/liahyoo'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Sustainability Summer Internship - Education (New York, NY)
                     </a>
                </p>
                <p className='careers-text'>
                    <a className="text-link"
                        href='https://www.youtube.com/liahyoo'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Sustainability Summer Internship - Supply Chain & Operations (New York, NY)
                     </a>
                </p>

            </div>
        </div>


    )
}

export default careers
