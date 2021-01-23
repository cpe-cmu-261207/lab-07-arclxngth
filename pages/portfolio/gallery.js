import Link from "next/link";

const gallery = () => {

    return (
      <>
        <div className="header">
          <h1 className="header-txt">GALLERY</h1>
        </div>
        <div className="gallery-table">
            <div>
                <img src="picture/basketball.jpg"/>
            </div>
            <div>
                <img src="picture/beach.jpg"/>
            </div>
            <div>
                <img src="picture/book.jpg"/>
            </div>
        </div>
        <div className="profile-zone">
        </div>
        
      </>
    );
};

export default gallery;
