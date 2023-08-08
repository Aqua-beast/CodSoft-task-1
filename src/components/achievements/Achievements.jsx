import React from 'react'
import './achievements.css'

function Achievements() {
    return (
        <div className='bg'>
            <h1 id='Achievements' className='tit'>Achievements</h1>
            <div className='case'>
                <div className='left'>
                    <div className="box1">1995: Co-founded Viaweb</div>
                    <div className="box3">2001: Publishes "Hackers & Painters"</div>
                    <div className="box5">2006: Launches Hacker News</div>
                    <div className="box7">2011: Publishes "On Lisp"</div>
                </div>
                <div className='line'>
                    <div className="dot"></div>
                </div>
                <div className='right'>
                    <div className="box2">1998: Viaweb Acquired by Yahoo! </div>
                    <div className="box4">2005: Co-founded Y Combinator </div>
                    <div className="box6">2009: "The Venture Capital Squeeze" Essay</div>
                    <div className="box8">2014: "Do Things that Don't Scale" Essay</div>
                </div>
            </div>
        </div>
    )
}

export default Achievements
