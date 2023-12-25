import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LogoAppBeeCostImg from '../../../images/logoAppBeeCost.png';


export const Footer = () => {
    return (
        <div className='footer my-5 pt-5'>
          <div className='content-footer d-flex justify-content-between m-auto pb-3'>
            <div className='column'>
              <img src={LogoAppBeeCostImg}></img>
              <div>Mua Thông Minh là website, ứng dụng tìm kiếm và đánh giá hàng hóa sản phẩm online. Giúp bạn né Sale ảo, mua giá tốt, tin cậy và trở thành người tiêu dùng thông thái.</div>
              <div className='font-weight-bold'>MuaThongMinh.vn không bán hàng!</div>
              <br />
              <div>KẾT NỐI VỚI CHÚNG TÔI</div>
              <FontAwesomeIcon className='social-icon ml-2 mt-2' icon={faFacebook} />
              <FontAwesomeIcon className='social-icon ml-2 mt-2' icon={faInstagram} />
              <FontAwesomeIcon className='social-icon ml-2 mt-2' icon={faGithub} />
            </div>
            <div className='column'>
              <div className='font-weight-bold'>VỀ MUA THÔNG MINH</div>
              <div className='my-2'>Blog</div>
              <div className='my-2'>Giới thiệu</div>
              <div className='my-2'>Chính sách bảo mật</div>
              <div className='my-2'>Điều khoản sử dụng</div>
              <div className='my-2'>Metric</div>
              <div className='my-2'>Điểm thi</div>
            </div>
            <div className='column'>
              <div className='font-weight-bold'>LIÊN HỆ</div>
              <div className='font-weight-bold mt-3'>Công ty Cổ phần Khoa học Dữ liệu</div>
              <div className='my-1'>Số ĐKKD: 0108677693</div>
              <div>Địa chỉ: Tầng 6 toà nhà AZ Lâm Viên, 107A Nguyễn Phong Sắc, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam.</div>
              <div className='mt-1'>Email: info@beecost.com</div>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-3 mb-5'>
            <div>Quốc gia & Khu vực: </div>
            <div className='mx-2'>Việt Nam</div>
            <div className='mx-2'>Singapore</div>
            <div className='mx-2'>Philipines</div>
            <div className='mx-2'>Malaysia</div>
            <div className='mx-2'>Indonesia</div>
            <div className='mx-2'>Đài Loan</div>
            <div className='mx-2'>Mexico</div>
            <div className='mx-2'>Brazil</div>
            <div className='mx-2'>Thái Lan</div>
          </div>
        </div>
    )
}