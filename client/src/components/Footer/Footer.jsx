import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'


const Footer = () => {

  return (
        <div className="right_footer">
                <div className="footer_content">
                        <div className="footer_child">
                                <Link className="logo-box" href={"/"} >
                                        <div  className={"logo"} >
                                                <Image src="/logodocs/svg/right_logo.svg" alt="site logo" width={30} height={30} />
                                        </div>

                                        <h1>Rightbuilder</h1>
                                </Link>

                                <div className="nation">
                                        <div  className={"logo"} >
                                                <Image src="/siteImgs/nig_flag.svg" alt="site logo" width={30} height={30} />
                                        </div>

                                        <p className="b2">Nigeria</p>

                                </div>

                        </div>
                        <div className="footer_child">
                                <p className="b2">
                                        Product
                                </p>

                                <Link className="b2" href={"/homeowners"}>For Homeowners</Link>
                                <Link className="b2" href={"/artisans"}>For Artisans</Link>
                        </div>
                        <div className="footer_child">
                                <p className="b2">
                                        Company
                                </p>

                                <Link className="b2" href={"/about"}>About</Link>
                                <Link className="b2" href={"/faq"}>FAQs</Link>
                        </div>
                        <div className="footer_child">
                                <p className="b2">
                                        Legal
                                </p>

                                <Link className="b2" href={""}>Terms of service</Link>
                                <Link className="b2" href={""}>Privacy policy</Link>
                        </div>
                        <div className="footer_child">
                                <p className="b2">
                                        Contact
                                </p>

                                <Link className="b2" href={"mailto:info@rightbuilder.africa"}>info@rightbuilder.africa</Link>
                                <Link className="b2" href={"tel:+234 913 446 8874"}>+234 913 446 8874</Link>

                                <div className="socials">
                                        <Link href="https://www.facebook.com/rightbuilder_africa" target="_blank" rel="noopener noreferrer" ><FaFacebookF aria-label='Rightbuilder facebook'/></Link>
                                        <Link href="https://www.tiktok.com/@rightbuilder_africa" target="_blank" rel="noopener noreferrer" ><FaTiktok aria-label='Rightbuilder tictok'/></Link>
                                        <Link href={`https://www.instagram.com/rightbuilder_africa`} target='_blank' rel="noopener noreferrer"><AiFillInstagram aria-label='Rightbuilder instagram'/></Link>
                                        <Link href="http://wa.me/87898789889098" target="_blank" rel="noopener noreferrer"  ><FaLinkedinIn aria-label='Rightbuilder whatsapp'/></Link>
                                </div>
                        </div>
                </div>
                <hr style={{opacity:1}} />
                <p className='b2 copy_reserved'>© 2023 Rightbuilder Inc. All rights reserved.</p>
        </div>
  )
}

export default Footer