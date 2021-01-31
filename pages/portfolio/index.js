import Link from "next/link";

const Portfolio = () => {

    return (
      <>
        <div className="header">
          <h1 className="header-txt">PORTFOLIO</h1>
        </div>
        <div className="profile-picture-zone">
            <div className="pic_template">
                <img src="picture/profile.jpg" className="profile_pic"/>
            </div>
            <div>
                <h1 className="profile-topic">ABOUT ME</h1>
                <p><span>NAME :</span> TOH HONG LENG</p>
                <p><span>NICKNAME :</span> Dragon</p>
                <p><span>AGE :</span> 20-year-old</p>
                <p><span>DOB :</span> 14 September 2000</p>
                <p><span>E-MAIL :</span> hongleng_t@cmu.ac.th</p>
                <div className="profile-social">
                    <Link href="https://www.facebook.com/LengKubs"><img src="picture/facebook.png"></img></Link>
                    <Link href="https://www.instagram.com/arclxngth/?fbclid=IwAR3v_HreBwgPV_sWkbKbTOoYm7ktCzCZCCzFTYSNVRWf_XhDsHIjF4gRyk0"><img src="picture/ig.png"></img></Link>
                </div>
            </div>
        </div>
        <div className="profile-zone">
            <div>
                <h1 className="profile-topic">EDUCATION HISTORY</h1>
                <p>April 2009 - 2012   Montfort College Primary School</p>
                <p>April 2012 - 2018   Montfort College Secondary School</p>
            </div>
            <div>
                <h1 className="profile-topic">HOBBY</h1>
                <p>Reading Books</p>
                <p>Play games</p>
            </div>
            <div>
                <h1 className="profile-topic">SKILLS</h1>
                <p>Chinese, Thai, English</p>
                <p>Basketball</p>
                <p>Running</p>
                <p>Little Coding</p>
            </div>
        </div>
        <div className="page-link-template">
                <Link href={`/portfolio`}><p className="R">RESUME</p></Link>
                <Link href={`/portfolio/gallery`}><p className="G">GALLERY</p></Link>
                <Link href={`/portfolio/contact`}><p className="C">CONTACT</p></Link>
        </div>
        <Link href={`http://localhost:3000/`}><span className="home_btn">HOME</span></Link>
 
      </>
    );
};

export default Portfolio;
