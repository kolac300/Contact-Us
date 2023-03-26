import React from 'react'
import { ContactInfWrapper } from './ContactInf.styled'
import { ReactComponent as PhoneSVG } from './images/phone.svg';
import { ReactComponent as EmailSVG } from './images/email.svg';
import { ReactComponent as LocationSVG } from './images/location.svg';
import { ReactComponent as InstagramSVG } from './images/instagram.svg';
import { ReactComponent as DiscordSVG } from './images/discord.svg';
import { ReactComponent as TwitterSVG } from './images/twitter.svg';
export default function ContactInf() {
    return (
        <ContactInfWrapper>
            <h2>Contact Information</h2>
            <p>Say something to start a live chat!</p>
            <ul>
                <li><PhoneSVG /> <a href="tel:+1012 3456 789">+1012 3456 789</a></li>
                <li><EmailSVG /> <a href="mailto:demo@gmail.com">demo@gmail.com</a></li>
                <li><LocationSVG />
                    <a href="https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@42.3467604,-71.0761182,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x5b2af19970952585!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11c1zptc6r">
                        132 Dartmouth Street Boston,<br />
                        Massachusetts 02156 United States</a></li>
            </ul>
            <ol>
                <li> <a href="https://www.instagram.com/"><InstagramSVG /></a></li>
                <li> <a href="https://discord.com/"><DiscordSVG /></a></li>
                <li> <a href="https://twitter.com/"><TwitterSVG /></a></li>
            </ol>


        </ContactInfWrapper>
    )
}
