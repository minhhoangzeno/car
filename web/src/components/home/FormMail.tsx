// const access_token = localStorage.getItem("token");
export default function FormMail() {
  return (
    <>
      <section className="section wrapper-home-newsletter">
        <div className="container-fluid">
          <div className="content-newsletter">
            <h2 style={{ color: "black" }}>Đăng ký</h2>
            <p style={{ color: "black" }}>
              Đăng ký nhận bản tin của XChange để cập nhật những sản phẩm mới,
              nhận thông tin ưu đãi đặc biệt và thông tin giảm giá khác.
            </p>
            <div className="form-newsletter">
              <form action="" accept-charset="UTF-8" className="">
                <div className="form-group">
                  <input type="hidden" id="contact_tags" />
                  <input
                    type="email"
                    
                    placeholder="Nhập email của bạn"
                    aria-label="Email Address"
                    className=""
                    style={{
                      border: "1px solid #797877",
                      backgroundColor: "#ececec",
                    }}
                  />
                  <button type="submit" className="">
                    <span>Gửi</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
