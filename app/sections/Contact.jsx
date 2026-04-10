export default function Contact() {
      return (
            <section className="py-24 text-center">
                  <h2 className="text-3xl font-bold mb-4">Liên hệ</h2>
                  <p className="text-gray-400 mb-10">
                        Liên hệ nhanh để nhận tư vấn và báo giá tốt nhất 
                  </p>

                  <div className="flex flex-col md:flex-row gap-6 justify-center items-center">

                        {/* Zalo */}
                        {/* <a
                              href="https://zalo.me/your-id"
                              target="_blank"
                              className="w-72 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 
                 hover:scale-105 transition shadow-lg"
                        >
                              <h3 className="text-xl font-semibold mb-2">Zalo</h3>
                              <p className="text-sm opacity-90">Nhắn tin nhanh - phản hồi ngay</p>
                        </a> */}

                        {/* Facebook */}
                        <a
                              href="https://www.facebook.com/phonghaydev/"
                              target="_blank"
                              className="w-72 p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-500 
                 hover:scale-105 transition shadow-lg"
                        >
                              <h3 className="text-xl font-semibold mb-2">Facebook</h3>
                              {/* <p className="text-sm opacity-90">Xem thêm sản phẩm & feedback</p> */}
                        </a>

                  </div>

                  <p className="mt-10 text-gray-400 text-sm">
                         Thường phản hồi trong vòng 5 - 10 phút
                  </p>
            </section>

      );
}