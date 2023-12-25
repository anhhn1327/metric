import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faArrowTrendDown, faArrowRight, faArrowLeft, faChevronDown, faCircleCheck, faHome } from '@fortawesome/free-solid-svg-icons';
import ShopeeLogoTextImg from '../images/shopee-logo-text.png';
import LightningImg from '../images/lightning.png';
import ImportantImg from '../images/important.png';
import MetricImg from '../images/metric.png';
import BannerImg from '../images/banner.png';
import { fetchPosts, fetchProductDetail, fetchRelatedProduct, fetchSuggestionProduct } from '../api';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

import '../App.css';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState(null);
  const [suggestionProduct, setSuggestionProduct] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProductDetail(productId);
        const relatedProductData = await fetchRelatedProduct(productId);
        const suggestionProductData = await fetchSuggestionProduct();
        const postsData = await fetchPosts();
        setProduct(productData);
        setRelatedProduct(relatedProductData);
        setSuggestionProduct(suggestionProductData);
        setPosts(postsData);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [productId]);

  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);

  const scroll = (containerRef, scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const images = [];

  for (let i = 0; i < 10; i++) {
    images.push(
      <img
        key={i}
        className='preview-image m-1'
        src={`/images/product/${product.image}`}
      />
    );
  }

  return (
    <div>
        <Header />
        <div className='breadcrumb m-auto d-flex align-items-center'>
          <FontAwesomeIcon className='mr-3' icon={faHome} />
          <FontAwesomeIcon icon={faChevronRight} />
          <div className='mx-3'>Máy tính & Labtop</div>
          <FontAwesomeIcon icon={faChevronRight} />
          <div className='mx-3'>Phụ Kiện Máy Tính</div>
          <FontAwesomeIcon icon={faChevronRight} />
          <div className='mx-3'>Bộ chia cổng USB & Đọc thẻ nhớ</div>
        </div>
        <div className='content m-auto'>
          <div className='product d-flex mb-2'>
            <div className='image-area mr-3 position-relative'>
              <img className='image' src={'/images/product/' + product.image} />
              <button onClick={() => scroll(containerRef3, -500)} className='scroll-image scroll-image-left d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faArrowLeft} /></button>
              <div className='preview-images d-flex overflow-hidden m-auto' ref={containerRef3}>
                {images.map((image, index) => (
                  <React.Fragment key={index}>{image}</React.Fragment>
                ))}
              </div>
              <button onClick={() => scroll(containerRef3, 500)} className='scroll-image scroll-image-right '><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
            <div className='description'>
              <div className='product-name my-3'>{product.name}</div>
              <div className='track-discounts my-3 d-flex justify-content-center align-items-center'>Theo dõi giảm giá</div>
              <div className='my-3 d-flex align-items-center'>
                <div className='mr-3'>Giá từ {product.place_of_sell.name}</div>
                <img src={'/images/place_of_sell/' + product.place_of_sell.image1}></img>
              </div>
              <div className='d-flex align-items-center'>
                <div className='price mr-5'> 
                  <div className='current'>{product.current_price}</div>
                  <div className='old'>{product.old_price}</div>
                </div>
                <div className='reduce d-flex justify-content-center align-items-center mx-3'><FontAwesomeIcon className='mr-2' icon={faArrowTrendDown} />{product.reduced_price}</div>
                <div className='go-to-sell-btn d-flex justify-content-center align-items-center ml-5'>Đến nơi bán<FontAwesomeIcon className='ml-2' icon={faArrowRight} /></div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <div className='d-flex align-items-center'>
                  <div className='vote mr-2'>{product.point_evaluation}</div>
                  <ul className="ratings">
                    <li className="star"></li>
                    <li className="star"></li>
                    <li className="star"></li>
                    <li className="star"></li>
                    <li className="star"></li>
                  </ul>
                </div>
                <div className='d-flex align-items-center mx-3'>{product.number_of_reviews} đánh giá</div>
                <div className='d-flex align-items-center'>{product.number_of_sells} lượt bán</div>
              </div>
            </div>
          </div>
          <div className='detail m-auto'>
            <div className='menu w-100 d-flex'>
              <div className='active p-3'>So sánh giá</div>
              <div className='p-3'>Lịch sử giá</div>
              <div className='p-3'>Mô tả sản phẩm</div>
              <div className='p-3'>Đánh giá từ người mua</div>
            </div>
            <div className='detail-area mb-3 pb-3'>
              <div className='font-weight-bold my-3 detail-name'>So sánh giá</div>
              <div className='my-2'>Tìm thấy <span className='font-weight-bold'>12</span> nơi bán khác, giá từ <span className='font-weight-bold'>511.688</span> - <span className='font-weight-bold'>559.500</span></div>
              <img src={ShopeeLogoTextImg}></img>
              <div>
                <div className='other-product d-flex justify-content-between align-items-center p-3 mb-4'>
                  <div className='d-flex align-items-center'>
                    <img src={'/images/product/' + product.image}></img>
                    <div className='product-name ml-3'>Bộ hub mở rộng 4 in 1/5 in 1 /6 in 1/8 in 1 baseus metal gleam series lvm001</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='price mr-3'>540.000</div>
                    <div className='go-to-sell-btn d-flex justify-content-center align-items-center'>Đến nơi bán<FontAwesomeIcon className='ml-2' icon={faArrowRight} /></div>
                  </div>
                </div>
                <div className='other-product d-flex justify-content-between align-items-center p-3 mb-4'>
                  <div className='d-flex align-items-center'>
                    <img src={'/images/product/' + product.image}></img>
                    <div className='product-name ml-3'>Bộ hub mở rộng 8 in 1 baseus metal gleam series lvm001</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='price mr-3'>540.000</div>
                    <div className='go-to-sell-btn d-flex justify-content-center align-items-center'>Đến nơi bán<FontAwesomeIcon className='ml-2' icon={faArrowRight} /></div>
                  </div>
                </div>
                <div className='other-product d-flex justify-content-between align-items-center p-3 mb-4'>
                  <div className='d-flex align-items-center'>
                    <img src={'/images/product/' + product.image}></img>
                    <div className='product-name ml-3'>Bộ hub mở rộng 4 in 1/5 in 1 /6 in 1/8 in 1 baseus metal gleam series lvm001</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='price mr-3'>540.000</div>
                    <div className='go-to-sell-btn d-flex justify-content-center align-items-center'>Đến nơi bán<FontAwesomeIcon className='ml-2' icon={faArrowRight} /></div>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center'>Xem thêm 4 nơi bán khác <FontAwesomeIcon className='ml-2' icon={faChevronDown} /></div>
            </div>
            <div className='detail-area mb-5 pb-3'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='font-weight-bold my-3 detail-name'>Lịch sử giá</div>
                <div className='track-discounts my-3 d-flex justify-content-center align-items-center'>Theo dõi giảm giá</div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='chart frame'>
                  <div className='chart-name m-4'>Biến động giá</div>
                </div>
                <div>
                  <div className='chart-detail frame mb-4 py-3 d-flex flex-column justify-content-between'>
                    <ul>
                      <li className=''>Tổng thời gian biến động giá: 8 tháng</li>
                      <li className=''>Số lần thay đổi giá: 17 lần</li>
                    </ul>
                    <div className='powered d-flex justify-content-end mr-3'>
                      <div>Cung cấp bởi</div>
                      <a href="#" className='ml-1'>Mua Thông Minh</a>
                    </div>
                  </div>
                  <div className='suggestion frame p-3 d-flex flex-column justify-content-between'>
                    <div className='font-weight-bold'>Gợi ý dành cho bạn</div>
                    <div>Tiện ích Mua Thông Minh giúp bạn xem tất cả các mức giá trong quá khứ của mọi sản phẩm (Shopee, Tiki, Lazada, Sendo). <span className='font-weight-bold'>Tiết kiệm gấp đôi</span></div>
                    <div className='suggestion-note d-flex justify-content-around align-items-center'>
                      <div>Video hướng dẫn</div>
                      <div className='btn'>Xem thêm chi tiết</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='font-weight-bold my-3'>Mô tả sản phẩm</div>
              <div className='detail-description'>
                <div><img src={LightningImg}></img> LƯU Ý QUAN TRỌNG:</div>
                {
                  product.descriptions.map(description => (
                    description.type === 'IMPORTANT' ? description.content.split(';').map(v => (
                      v ? <div><img src={ImportantImg}></img> {v}</div> : ''
                    )) : ''
                  ))
                }
                <a href='#'>Xem thêm</a>
              </div>
            </div>
            <div className='detail-area mb-5 pb-3 border-none'>
              <div className='font-weight-bold my-3 detail-name'>Đánh giá từ người mua</div>
              {
                product.reviews.map(review => (
                  <div className='review pb-3 mb-3'>
                    <div className='d-flex'>
                      <img className='avatar' src={'/images/avatar/' + review.user.avatar}></img>
                      <div className='mx-3'>
                        <div>{review.user.name}</div>
                        <ul className="ratings">
                          <li className="star"></li>
                          <li className="star"></li>
                          <li className="star"></li>
                          <li className="star"></li>
                          <li className="star"></li>
                        </ul>
                      </div>
                      <div className='place'><FontAwesomeIcon icon={faCircleCheck} /> Đã mua tại {review.place_of_sell.name}</div>
                    </div>
                    <div className='gray-color'>{review.comment}</div>
                    <div className='d-flex'>
                      {
                        review.image1 ? <img className='review-img' src={'/images/review/' + review.image1}></img> : ''
                      }
                      {
                        review.image2 ? <img className='review-img mx-3' src={'/images/review/' + review.image2}></img> : ''
                      }
                      {
                        review.image3 ? <img className='review-img mx-3' src={'/images/review/' + review.image3}></img> : ''
                      }
                      {
                        review.image4 ? <img className='review-img mx-3' src={'/images/review/' + review.image4}></img> : ''
                      }
                      {
                        review.image5 ? <img className='review-img mx-3' src={'/images/review/' + review.image5}></img> : ''
                      }
                    </div>
                    <div className='time gray-color mt-3'>2 năm trước</div>
                  </div>
                ))
              }
              <div className='d-flex justify-content-center '>
                <div className='see-more-btn d-flex justify-content-center align-items-center'>Xem thêm</div>
              </div>
            </div>
            <div className='detail-area mb-5 pb-3 position-relative'>
              <div className='font-weight-bold my-3 detail-name'>Sản phẩm liên quan</div>
              <button onClick={() => scroll(containerRef1, -500)} className='scroll-product scroll-left'><FontAwesomeIcon icon={faChevronLeft} /></button>
              <div className='d-flex overflow-hidden pb-3' ref={containerRef1}>
                {
                  relatedProduct.map(product => (
                    <div className='related-product mr-3 p-2'>
                      <img src={'/images/product/' + product.image}></img>
                      <div className='name font-weight-bold'>{product.name}</div>
                      <div className='reduce d-flex justify-content-center align-items-center my-3'>Có 1 nơi bán</div>
                      <div className='text-red-color font-weight-bold'>Giá từ {product.current_price}</div>
                    </div>
                  ))
                }
              </div>
              <button onClick={() => scroll(containerRef1, 500)} className='scroll-product scroll-right'><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <div className='detail-area mb-5 pb-3 position-relative'>
              <div className='font-weight-bold my-3 detail-name'>Gợi ý dành cho bạn</div>
              <button onClick={() => scroll(containerRef2, -500)} className='scroll-product scroll-left'><FontAwesomeIcon icon={faChevronLeft} /></button>
              <div ref={containerRef2} className='d-flex pb-3 overflow-x-clip'>
                {
                  suggestionProduct && suggestionProduct.map(product => (
                    <div>
                      <div className='suggest-product position-relative mr-3'>
                        <div className='position-absolute p-2'>
                          <img src={'/images/product/' + product.image}></img>
                          <div className='name font-weight-bold'>{product.name}</div>
                          <div className='text-red-color font-weight-bold mt-3 mb-5'>Giá từ {product.current_price}</div>
                          <div className='go-to-sell-btn m-auto'>Đến nơi bán<FontAwesomeIcon className='ml-2' icon={faArrowRight} /></div>
                        </div>
                      </div>  
                    </div>
                  ))
                }
              </div>
              <button onClick={() => scroll(containerRef2, 500)} className='scroll-product scroll-right'><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <div className='detail-area mb-5 pb-3 d-flex justify-content-between'>
              {
                posts.map(post => (
                  <div className='post'>
                    <img src={'/images/post/' + post.image}></img>
                    <div className='title font-weight-bold'>{post.title}</div>
                    <div className='mt-3 gray-color'>{post.content}</div>
                    <div className='see-more-btn d-flex justify-content-center align-items-center mt-3'>ĐỌC THÊM</div>
                  </div>
                ))
              }
            </div>
            <div className='detail-area mb-5 pb-3'>
              <div className='font-weight-bold my-3 detail-name'>Gợi ý hôm nay</div>
              <div className='d-flex flex-wrap'>
                {
                  suggestionProduct && suggestionProduct.map(product => (
                    <div>
                      <div className='suggest-product position-relative mr-3'>
                        <div className='position-absolute p-2'>
                          <img src={'/images/product/' + product.image}></img>
                          <div className='name font-weight-bold'>{product.name}</div>
                          <div className='text-red-color font-weight-bold mt-3 mb-5'>Giá từ {product.current_price}</div>
                          <div className='go-to-sell-btn m-auto'>Đến nơi bán<FontAwesomeIcon className='ml-2' icon={faArrowRight} /></div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='statistics p-2'>
              <div className='header d-flex justify-content-between align-items-center'>
                <div className='name text-orange-color'>Số liệu E-Commerce cho người bán/doanh nghiệp</div>
                <img src={MetricImg}></img>
              </div>
            </div>
            <div className='banner my-5 d-flex justify-content-around'>
              <div className='text p-5'>
                <div className='font-weight-bold title'>Bạn muốn xem tất cả lịch sử giá của <span className='text-orange-color'>Shopee</span>?!</div>
                <br />
                <div>Cài đặt ngay Mua Thông Minh Extension phát hiện sale ảo, sale xin nhé!</div>
                <br />
                <div>Chỉ tốn 3 giây mà siêu tiện, siêu hời!</div>
                <div className='add-ext-btn d-flex justify-content-center align-items-center font-weight-bold mt-3'>Thêm Mua Thông Minh vào Chrome/Cốc Cốc</div>
              </div>
              <img src={BannerImg}></img>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
};

export default ProductDetail;