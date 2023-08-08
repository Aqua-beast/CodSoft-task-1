import React from 'react'
import './profile.css'
import img2 from '../../images/1200x0.jpg'
import img3 from '../../images/c5f212b79d9a8113005311b19cda5c2d5b-22-paul-graham-ycombinator.rsquare.w700.webp'

function Profile() {
    return (
        <div id='Profile' className='container'>
            <div className='content-boxs'>
                <div className='content-box-1'>
                    <div>
                        <h1 style={{fontFamily: 'Libre Baskerville'}}>Biography</h1>
                        <p>Paul Graham is an influential entrepreneur, venture capitalist, and essayist known for his significant contributions to the startup ecosystem. </p>
                        <h3>Early Life and Education:</h3>
                        <p>Paul Graham was born on November 13, 1964, in Weymouth, England. He showed an early interest in computers and programming during his teenage years. He attended the prestigious Phillips Exeter Academy in the United States and later pursued a degree in philosophy at Cornell University. <br />
                        After graduating from Cornell, Paul Graham obtained a master's degree in computer science from Harvard University. During his time at Harvard, he developed and released one of the first web-based applications called "Viaweb" (originally known as "E-commerce") in 1995. Viaweb was acquired by Yahoo! in 1998, making it one of the earliest e-commerce platforms.</p>
                    </div>
                    <div className="pic-box">
                        <img src={img2} alt="Paul Graham being interviewed by a reporter" />
                    </div>
                </div>
                <div className='content-box-2'>
                    <div className="pic-box">
                        <img src={img3} alt="Paul Graham being interviewed by a reporter" />
                    </div>
                    <div>
                        <h3>Co-Founding Y Combinator:</h3>
                        <p>In 2005, Paul Graham co-founded Y Combinator (YC) with Jessica Livingston, Robert Morris, and Trevor Blackwell. Y Combinator offers seed funding, mentorship, and resources to early-stage startups, helping them grow and succeed. Over the years, Y Combinator has nurtured and funded numerous successful startups, becoming one of the most influential startup incubators in the world.</p>
                        <h3>Influence as an Essayist:</h3>
                        <p>Paul Graham is also well-known for his thought-provoking essays on startups, technology, and entrepreneurship. He has been writing essays since the early 2000s, sharing his insights and experiences as an entrepreneur and investor. His essays cover a wide range of topics, from fundraising and product development to the psychology of entrepreneurship.</p>
                        <h3>Venture Capital Career:</h3>
                        <p>Apart from his work with Y Combinator, Paul Graham is a successful venture capitalist through his involvement with Y Combinator's startup investments. He has invested in and advised numerous successful startups, helping them navigate the challenges of early-stage growth. His expertise in technology, business, and entrepreneurship has made him a sought-after mentor and advisor for startups worldwide. <br />
                        Paul Graham's journey from a computer science student to a successful entrepreneur, venture capitalist, and essayist exemplifies the transformative power of innovative ideas and a passion for technology. His influence on startups and entrepreneurship continues to inspire and shape the future of the tech industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
