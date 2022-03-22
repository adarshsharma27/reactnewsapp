import React from "react";
const Cards = ({urlToImage, author ,title ,description,publishedAt,url}) => {
    return (
        <>
            <div
                className="col-xl-3 col-md-3 col-sm-12"
            >
                <div className="product-card text-start">
                    <img className="img-responsive" src={(urlToImage!==null)?(urlToImage):("../images/image.png")} alt={author} />
                    <div className="product-image-caption">
                        <div className="product-image-txt">
                            <h2>{title.slice(0,50)}...</h2>
                            <h3>{author}</h3>
                            <h4>{new Date(publishedAt).toLocaleString()}</h4>
                            <p className="decription-1">{
                                (description) ? 
                                (description.slice(0,80))
                                :("")

                            }</p>
                            <a className="btn btn-primary  my-3" href={url}>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
