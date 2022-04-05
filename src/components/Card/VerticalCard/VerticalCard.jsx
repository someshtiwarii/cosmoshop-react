import "./VerticalCard.css";

const VerticalCard =({product})=>{

    const {title, price, image ,discount, discountPrice, rating} = product;

    return(

        <div className="product-card product-card-1">
                    <div className="card">
                        <div className="card-header">
                            <img src={image} alt="product photo" className="card-img" />
                        </div>
                        <div className="card-body">
                            <div className="card-info">{title}</div>
                                <div class="stars">
                                {[...Array(5)].map((item, i) =>
                                    i + 1 > rating ? (
                                      <i class="far fa-star"></i>
                                    ) : (
                                      <i class="fas fa-star checked"></i>
                                    )
                                  )}
                                </div>
                            <div className="price-info">
                                <div className="new-price">
                                    ₹{discountPrice}
                                </div>
                                <div className="old-price">
                                    {price}
                                </div>
                            </div>
                            <div className="discount-info">
                                Flat <strong>{discount}%</strong> OFF
                            </div>
                        </div>
                        <div className="card-btn">
                            <button className="btn btn-primary">Add to Cart</button>
                            <button className="btn btn-primary-outline">Add to Wishlist</button>
                        </div>
                    </div>
                </div>

    );
};

export {VerticalCard};