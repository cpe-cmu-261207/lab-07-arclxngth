import Link from "next/link";

const gallery = () => {

    return (
      <>
        <div className="header">
          <h1 className="header-txt">GALLERY</h1>
        </div>
        <div className="gallery">
            <div>
                <img src="../picture/basketball.jpg"/>
                <h1>BASKETBALL</h1>
                <p>sport</p>
            </div>
            <div>
                <img src="../picture/beach.jpg"/>
                <h1>BEACH</h1>
                <p>tourist attraction</p>
            </div>
            <div>
                <img src="../picture/book.jpg"/>
                <h1>BOOK</h1>
                <p>just a book</p>
            </div>
            <div>
                <img src="../picture/Warren.jpg"/>
                <h1>WARREN BUFFET</h1>
                <p>one of the best value invester</p>
            </div>
            <div>
                <img src="../picture/kyrie.jpg"/>
                <h1>KYRIE IRVING</h1>
                <p>NBA player</p>
            </div>
            <div>
                <img src="../picture/messi.jpeg"/>
                <h1>LIONEL MESSI</h1>
                <p>football player</p>
            </div>
            <div>
                <img src="../picture/capoo.jpg"/>
                <h1>CAPOO</h1>
                <p>cartoon character</p>
            </div>
            <div>
                <img src="../picture/conan.png"/>
                <h1>EDOGAWA CONAN</h1>
                <p>cartoon character</p>
            </div>
            <div>
                <img src="../picture/netflix.jpg"/>
                <h1>NETFLIX</h1>
                <p>application</p>
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

export default gallery;
