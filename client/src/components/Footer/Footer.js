import './Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
//import PinterestIcon from '@mui/icons-material/Pinterest';
//import {Link} from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__items__container">
                    <div className="footer__help__container">
                        <div className="footer__help__header">
                            <h1>Help</h1>
                        </div>
                        <ul className="fotter__help__links">
                            <li className="help__link">
                                <a href="/"> Shipping</a>
                            </li>
                            <li className="help__link">
                                <a href="/">Refund</a>
                            </li>
                            <li className="help__link">
                                <a href="/">FAQ</a>
                            </li>
                            <li className="help__link">
                                <a href="/">Accessiblity</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__contact__container">
                        <div className="footer__contact__header">
                            <h1>Contact Us</h1>
                        </div>
                        <ul className="footer__contacts">
                            <li className="footer__contact">
                                <LocalPhoneIcon /> <span>+216 58021904</span>
                            </li>
                            <li className="footer__contact">
                                <a href='mailto: ahmedder@live.fr'>
                                    <EmailIcon />
                                    <span>ahmedder@live.fr</span>
                                </a>
                            </li>
                            <li className="footer__contact">
                                <LocationOnIcon /> <span>Ben Arous, Tunisia</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__social__link__container">
                        <div className="footer__social__link__header">
                            <h1>Stay Connected</h1>
                        </div>
                        <ul className="footer__social__links">
                            <li className="social__link">
                                <a href='https://www.linkedin.com/in/ahmed-derbali/' target="_blank">
                                    <LinkedInIcon />
                                </a>
                            </li>
                            <li className="social__link">
                                <a href='https://www.instagram.com/ahmd6724/' target="_blank">
                                    <InstagramIcon />
                                </a>
                            </li>
                            <li className="social__link">
                                <a href='https://github.com/DerbaliA' target="_blank">
                                    <GitHubIcon />
                                </a>

                            </li>
                            <li className="social__link">
                                <a href='https://www.facebook.com/ahmed.tun.731' target="_blank">
                                    <FacebookIcon />
                                </a>
                            </li>
                            {/*<li className="social__link">
                                <PinterestIcon />
                            </li>*/}
                        </ul>
                    </div>
                </div>
                <div className="fotter__copyright__container">
                    <ul className='nav'>
                        <li className="footer__copyright">©2023 Merning Team . |</li>
                        <li className="footer__terms__condition"> | Terms & Condition |</li>
                        <li className="footer__privacy__policy">| Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;