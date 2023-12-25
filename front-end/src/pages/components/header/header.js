

export const Header = () => {
    return (
        <div className='header w-100'>
          <div className='content-header d-flex justify-content-between align-items-center p-3 m-auto'>
            <div className='app-name'>Mua Thông Minh</div>
            <div className='search'>
                <input type='text' placeholder='Dán link hoặc tìm sản phẩm'></input>
            </div>
            <div className='category d-flex'>
              <div className='mx-3'>DANH MỤC</div>
              <div className=''>BLOG</div>
            </div>
          </div>
        </div>
    );
}