import '../css/css.css'
import logo from '../imgfooter/Logo.png'
import sot1 from '../imgfooter/Icon_1.png'
import sot2 from '../imgfooter/Icon_2.png'
import sot3 from '../imgfooter/Icon_3.png'
import sot4 from '../imgfooter/Icon_4.png'
import bot from '../assets/Button.png'

export default function Footer() {
    return(
        <>
            <footer>
                <hr />
                <div className='top'>
                    <div className='left'>
                        <img src={logo} alt="" />
                        <a href="">itsupportgroup@gmail.com</a>
                        <div>
                            <img src={sot1} alt="" />
                            <img src={sot2} alt="" />
                            <img src={sot3} alt="" />
                            <img src={sot4} alt="" />
                        </div>
                        <button type="button">
                            <p>Contact us</p>
                            <img src={bot} alt="" />
                        </button>
                    </div>
                    <div className='mid'>
                        <p>Our offices</p>
                        <div>
                            <h1>In Minsk</h1>
                            <p>+ 375 (29) 675-12-22</p>
                            <p>44 Karl Liebknecht Street, floor 5, office 522</p>
                        </div>
                        <div>
                            <h1>In Vilnius</h1>
                            <p>+370 (52) 654-280-28</p>
                            <p>44 Karl Liebknecht Street, floor 5, office 522</p>
                        </div>
                    </div>
                    <div className='right'>
                        <p>services</p>
                        <div>
                            <p>Technical Support</p>
                            <p>Frontend Development</p>
                            <p>Backend Development</p>
                            <p>Mobile app development</p>
                            <p>UI/UX Design</p>
                            <p>Software Development</p>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <hr />
                    <div>
                        <p>Development by IT Support Group.</p>
                        <p>Data Privacy.</p>
                        <p>© 2023 IT Support Group</p>
                    </div>
                </div>
            </footer>
        </>
    )
}