"use client";

export default function Services() {
      return (
            <section id="services" className="py-20 px-4 flex justify-center">
                  <div className="w-full max-w-5xl">

                        <h2 className="text-2xl font-bold text-center mb-10">
                              Dịch vụ của tôi
                        </h2>

                        <div className="overflow-hidden rounded-2xl border border-gray-800">
                              <table className="w-full text-center border-collapse">

                                    {/* HEADER */}
                                    <thead className="bg-gray-900">
                                          <tr>
                                                <th className="p-4 text-lg">Thiệp mời online</th>
                                                <th className="p-4 text-lg">Netflix</th>
                                          </tr>
                                    </thead>

                                    {/* BODY */}
                                    <tbody className="bg-black">

                                          {/* Mô tả */}
                                          <tr className="border-t border-gray-800">
                                                <td className="p-6">
                                                      Thiết kế thiệp đẹp, chỉnh sửa nhanh theo yêu cầu
                                                </td>
                                                <td className="p-6">
                                                      Tài khoản Netflix giá rẻ, ổn định, dùng riêng
                                                </td>
                                          </tr>

                                          {/* Ưu điểm */}
                                          <tr className="border-t border-gray-800">
                                                <td className="p-6">
                                                      ✔ Giao nhanh <br />
                                                      ✔ Thiết kế theo ý <br />
                                                      ✔ Hỗ trợ 24/7
                                                </td>
                                                <td className="p-6">
                                                      ✔ Không lỗi <br />
                                                      ✔ Xem mượt <br />
                                                      ✔ Bảo hành
                                                </td>
                                          </tr>

                                          {/* CTA */}
                                          <tr className="border-t border-gray-800">
                                                <td className="p-6">
                                                      <a
                                                            href="#contact"
                                                            className="bg-purple-600 px-6 py-2 rounded-lg hover:scale-105 inline-block"
                                                      >
                                                            Liên hệ
                                                      </a>
                                                </td>
                                                <td className="p-6">
                                                      <a
                                                            href="#contact"
                                                            className="bg-purple-600 px-6 py-2 rounded-lg hover:scale-105 inline-block"
                                                      >
                                                            Liên hệ
                                                      </a>
                                                </td>
                                          </tr>

                                    </tbody>
                              </table>
                        </div>

                  </div>
            </section>
      );
}