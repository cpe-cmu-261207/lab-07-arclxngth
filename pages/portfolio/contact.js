import Link from "next/link";

const contact = () => {

    return (
      <>
        <div className="header">
          <h1 className="header-txt">CONTACT</h1>
        </div>
        <div className="contact">
            <div>
                <h1>TOH HONG LENG</h1>
                <p>E-MAIL : hongleng_t@cmu.ac.th</p>
            </div>
            <div className="contact-form">
                <div>
                    <label>NAME : </label>
                    <input placeholder="name here"></input><br/>
                </div>
                <div>
                    <label>TEL : </label>
                    <input placeholder="telephone number here"></input><br/>
                </div>
                <div>
                    <label>E-MAIL : </label>
                    <input placeholder="E-Mail here"></input><br/>
                </div>
                <label>MESSAGE : </label><br/>
                <textarea placeholder="message here"></textarea>
            </div>
        </div>
        <div className="page-link-template">
              <Link href={`/portfolio`}><p className="R">RESUME</p></Link>
              <Link href={`/portfolio/gallery`}><p className="G">GALLERY</p></Link>
              <Link href={`/portfolio/contact`}><p className="C">CONTACT</p></Link>
        </div>
      </>
    );
};

export default contact;
