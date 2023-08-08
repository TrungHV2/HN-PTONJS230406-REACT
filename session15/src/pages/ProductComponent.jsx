import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartAct } from '../redux/slice/cartSlice';

export default function ProductComponent() {
  const {data: products} = useSelector(s => s.products);
  const dispatch = useDispatch();
  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    dispatch({ type: "PRODUCT_FECTH" });
  }, [])

  const handleBuy = (pro) => {
    dispatch(cartAct.addToCart(pro))
  }

  return (
    <>
      {/* Start page content */}
      <div className="page-content section">
        {/* Start breadcume area */}
        <div className="breadcume-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb">
                  <a title="Return to Home" href="index.html" className="home">
                    <i className="fa fa-home" />
                  </a>
                  <span className="navigation-pipe">&gt;</span>
                  Electronics
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End breadcume area */}
        {/* Start shop area */}
        <div className="shop-area">
          <div className="container">
            <div className="row">
              {/* Start shop categori area */}
              <div className="col-md-4 col-lg-3 order-lg-1 order-2">
                <div className="shop-categori-area">
                  <div className="sidebar-menu-title">
                    <h2>
                      <i className="fa fa-th-list" />
                      Catalog
                    </h2>
                  </div>
                  <div className="shop-categori">
                    <div className="shop-categori-inner">
                      {/* Start Categori */}
                      <div className="categoris categori-border">
                        <span className="cat-title">Categories</span>
                        <ul>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                category 1<span> (17)</span>
                              </a>
                            </label>
                          </li>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                category 2<span> (17)</span>
                              </a>
                            </label>
                          </li>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                category 3<span> (17)</span>
                              </a>
                            </label>
                          </li>
                        </ul>
                      </div>
                      {/* End Categori */}
                      {/* Start Categori */}
                      <div className="categoris categori-border">
                        <span className="cat-title">Availability</span>
                        <ul>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                In stock<span> (17)</span>
                              </a>
                            </label>
                          </li>
                        </ul>
                      </div>
                      {/* End Categori */}
                      {/* Start Categori */}
                      <div className="categoris categori-border">
                        <span className="cat-title">Condition</span>
                        <ul>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                New<span> (17)</span>
                              </a>
                            </label>
                          </li>
                        </ul>
                      </div>
                      {/* End Categori */}
                      {/* Start Categori */}
                      <div className="categoris categori-border">
                        <span className="cat-title">Manufacturer</span>
                        <ul>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                Fashion Manufacturer<span> (17)</span>
                              </a>
                            </label>
                          </li>
                        </ul>
                      </div>
                      {/* End Categori */}
                      {/* Start Categori */}
                      <div className="categoris categori-border">
                        <span className="cat-title">Price</span>
                        <ul>
                          <li className="price-range">
                            <label htmlFor="amount">
                              Range:{" "}
                              <input
                                type="text"
                                id="amount"
                                readOnly=""
                                style={{
                                  border: 0,
                                  color: "#f6931f",
                                  fontWeight: "bold"
                                }}
                              />
                            </label>
                            <div id="slider-range" />
                          </li>
                        </ul>
                      </div>
                      {/* End Categori */}
                      {/* Start Categori */}
                      <div className="categoris categori-border">
                        <span className="cat-title">Size</span>
                        <ul>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                S<span> (17)</span>
                              </a>
                            </label>
                          </li>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                M<span> (17)</span>
                              </a>
                            </label>
                          </li>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                L<span> (17)</span>
                              </a>
                            </label>
                          </li>
                        </ul>
                      </div>
                      {/* End Categori */}
                      {/* Start Categori */}
                      <div className="categoris categori-border">
                        <span className="cat-title">Compositions</span>
                        <ul>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                Cotton<span> (3)</span>
                              </a>
                            </label>
                          </li>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                Polyester<span> (12)</span>
                              </a>
                            </label>
                          </li>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                Viscose<span> (2)</span>
                              </a>
                            </label>
                          </li>
                        </ul>
                      </div>
                      {/* End Categori */}
                      {/* Start Categori */}
                      <div className="categoris categori-border">
                        <span className="cat-title">Styles</span>
                        <ul>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                Casual<span> (3)</span>
                              </a>
                            </label>
                          </li>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                Dressy<span> (1)</span>
                              </a>
                            </label>
                          </li>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                Girly<span> (13)</span>
                              </a>
                            </label>
                          </li>
                        </ul>
                      </div>
                      {/* End Categori */}
                      {/* Start Categori */}
                      <div className="categoris categori-border">
                        <span className="cat-title">Properties</span>
                        <ul>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                Colorful Dress<span> (1)</span>
                              </a>
                            </label>
                          </li>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                Maxi Dress<span> (1)</span>
                              </a>
                            </label>
                          </li>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                Midi Dress<span> (11)</span>
                              </a>
                            </label>
                          </li>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                Short Dress<span> (2)</span>
                              </a>
                            </label>
                          </li>
                          <li>
                            <span>
                              <input type="checkbox" className="checkbox" />
                            </span>
                            <label>
                              <a href="">
                                Short Sleeve<span> (2)</span>
                              </a>
                            </label>
                          </li>
                        </ul>
                      </div>
                      {/* End Categori */}
                    </div>
                  </div>
                  <div className="tag-area">
                    <h2 className="tag-title">Tags</h2>
                    <div className="tags">
                      <a href="#">camera</a>
                      <a href="#">mobile</a>
                      <a href="#">electronic</a>
                      <a href="#">destop</a>
                      <a href="#">tablet</a>
                      <a href="#">accessories</a>
                      <a href="#">camcorder</a>
                      <a href="#">laptop</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End shop categori area */}
              {/* Start categori content */}
              <div className="col-md-8 col-lg-9 order-lg-2 order-1">
                <div id="content-shop" className="categori-content">
                  <div className="categori-baner">
                    <img src="img/shop/sports-outdoors.jpg" alt="" />
                  </div>
                  <h1 className="page-heading product-listing">
                    <span className="cat-name">Electronics</span>
                    <span className="heading-counter">There are 17 products.</span>
                  </h1>
                  {/* Start catagori short */}
                  <div className="catagori-short">
                    <ul id="gridlist" className="nav nav-tabs" data-tabs="tabs">
                      <li>
                        <a className="active" href="#" onClick={e => {e.preventDefault();setIsGrid(true);}}>
                          <i className="fa fa-th-large" />
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={e => {e.preventDefault();setIsGrid(false);}}>
                          <i className="fa fa-th-list" />
                        </a>
                      </li>
                    </ul>
                    <div className="chose-box">
                      <p className="selector1 hidden-xs">
                        <label>Sort by</label>
                        <select
                          className="selectProductSort form-control"
                          id="selectProductSort1"
                        >
                          <option selected="selected" value="position:asc">
                            --
                          </option>
                          <option value="price:asc">Price: Lowest first</option>
                          <option value="price:desc">Price: Highest first</option>
                          <option value="name:asc">Product Name: A to Z</option>
                          <option value="name:desc">Product Name: Z to A</option>
                          <option value="quantity:desc">In stock</option>
                          <option value="reference:asc">
                            Reference: Lowest first
                          </option>
                          <option value="reference:desc">
                            Reference: Highest first
                          </option>
                        </select>
                      </p>
                      <p className="selector1 selector2">
                        <label>Show</label>
                        <select
                          className="selectProductSort form-control"
                          id="selectProductSort2"
                        >
                          <option selected="selected" value="position:asc">
                            12
                          </option>
                          <option value="price:asc">24</option>
                        </select>
                      </p>
                    </div>
                  </div>
                  {/* End catagori short */}
                  <div id="my-tab-content" className="tab-content">
                    {/* Start categori grid view */}
                    {isGrid && <div
                      id="grid"
                      className="tab-pane categoti-grid-view row active show"
                    >
                      {products.map(p => <div className="col-md-6 col-lg-4" key={p.id}>
                        <div className="featured-inner">
                          <div className="featured-image">
                            <a href="single-product.html">
                              <img
                                src={p.image}
                                alt=""
                              />
                            </a>
                            <span className="price-percent-reduction">-20%</span>
                          </div>
                          <div className="featured-info">
                            <a href="single-product.html">{p.name}</a>
                            <p className="reating">
                              <span className="rate">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </span>
                            </p>
                            <span className="price">{p.price}</span>
                            <div className="featured-button">
                              <a href="wishlists.html" className="wishlist">
                                <i className="fa fa-heart" />
                              </a>
                              <a href="#" className="fetu-comment">
                                <i className="fa fa-signal" />
                              </a>
                              <a href="cart.html" className="add-to-card" onClick={e => {e.preventDefault();handleBuy(p)}}>
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>)}
                    </div>}
                    {/* End categori grid view */}
                    {!isGrid && <div
                      id="list"
                      className="tab-pane categori-list-view row active show"
                    >
                      {products.map(p => <div className="col-lg-12" key={p.id}>
                      <div className="featured-inner">
                          <div className="featured-image">
                            <a href="single-product.html">
                              <img
                                src={p.image}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="featured-info">
                            <a href="single-product.html">
                              {p.name}
                            </a>
                            <p className="reating">
                              <span className="rate">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </span>
                            </p>
                            <p className="product-text">
                              Faded short sleeves t-shirt with high neckline. Soft
                              and stretchy material for a comfortable fit.
                              Accessorize with a straw hat and you're ready for
                              summer!{" "}
                            </p>
                            <span className="price">{p.price}</span>
                            <div className="featured-button">
                              <a href="wishlists.html" className="wishlist">
                                <i className="fa fa-heart" />
                              </a>
                              <a href="#" className="fetu-comment">
                                <i className="fa fa-signal" />
                              </a>
                              <a href="cart.html" className="add-to-card">
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>)}
                    </div>}
                  </div>
                  {/* Start categori show item */}
                  <div className="categori-show-item">
                    <div className="cat-show-item">
                      <p>Showing 1 - 8 of 8 items</p>
                    </div>
                    <div className="cat-show-button">
                      <a className="cat-button" href="#">
                        <span>
                          Compare(0)
                          <i className="fa fa-angle-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                  {/* End categori show item */}
                </div>
              </div>
              {/* Start categori content */}
            </div>
          </div>
        </div>
        {/* End shop area */}
      </div>
      {/* End page content */}
      {/* Start brand and client */}
      <div className="brand-and-client section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="area-title">
                <h3>BRAND &amp; CLIENTS</h3>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="brand-logo featured-product-area">
                <div className="clients">
                  <a href="#">
                    <img src="img/brand-logo/1.jpg" alt="" />
                  </a>
                </div>
                <div className="clients">
                  <a href="#">
                    <img src="img/brand-logo/2.jpg" alt="" />
                  </a>
                </div>
                <div className="clients">
                  <a href="#">
                    <img src="img/brand-logo/3.jpg" alt="" />
                  </a>
                </div>
                <div className="clients">
                  <a href="#">
                    <img src="img/brand-logo/4.jpg" alt="" />
                  </a>
                </div>
                <div className="clients">
                  <a href="#">
                    <img src="img/brand-logo/5.jpg" alt="" />
                  </a>
                </div>
                <div className="clients">
                  <a href="#">
                    <img src="img/brand-logo/6.jpg" alt="" />
                  </a>
                </div>
                <div className="clients">
                  <a href="#">
                    <img src="img/brand-logo/1.jpg" alt="" />
                  </a>
                </div>
                <div className="clients">
                  <a href="#">
                    <img src="img/brand-logo/3.jpg" alt="" />
                  </a>
                </div>
                <div className="clients">
                  <a href="#">
                    <img src="img/brand-logo/4.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End brand and client */}
      {/* Start blog area */}
      <div className="blog-area section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="area-title">
                <h3>The Blog</h3>
              </div>
            </div>
            <div className="blog-box featured-product-area">
              <div className="col-lg-12">
                <a href="single-blog.html">
                  <img src="img/blog/4-home-default.jpg" alt="" />
                </a>
                <span className="blog-date">2019-08-12 04:40:21</span>
                <div className="blog-info">
                  <h3>
                    <a href="single-blog.html">Share the Love for PrestaShop 1.6</a>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been...
                  </p>
                  <a href="single-blog.html" className="readmore">
                    Read more
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-12">
                <a href="single-blog.html">
                  <img src="img/blog/3-home-default.jpg" alt="" />
                </a>
                <span className="blog-date">2019-08-12 04:40:21</span>
                <div className="blog-info">
                  <h3>
                    <a href="single-blog.html">
                      Answers to your Questions about PrestaShop
                    </a>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been...
                  </p>
                  <a href="single-blog.html" className="readmore">
                    Read more
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-12">
                <a href="single-blog.html">
                  <img src="img/blog/2-home-default.jpg" alt="" />
                </a>
                <span className="blog-date">2019-08-12 04:40:21</span>
                <div className="blog-info">
                  <h3>
                    <a href="single-blog.html">
                      What is Bootstrap? – The History and the Hype
                    </a>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been...
                  </p>
                  <a href="single-blog.html" className="readmore">
                    Read more
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-12">
                <a href="single-blog.html">
                  <img src="img/blog/1-home-default.jpg" alt="" />
                </a>
                <span className="blog-date">2019-08-12 04:40:21</span>
                <div className="blog-info">
                  <h3>
                    <a href="single-blog.html">
                      From Now we are certified web agency
                    </a>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been...
                  </p>
                  <a href="single-blog.html" className="readmore">
                    Read more
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End blog area */}
    </>
  )
}
