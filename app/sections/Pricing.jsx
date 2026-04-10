"use client";

export default function Pricing() {
      return (
            <section id="pricing" className="py-20 px-4 flex justify-center">
                  <div className="w-full max-w-6xl">

                        <h2 className="text-2xl font-bold text-center mb-12">
                              Bảng giá dịch vụ
                        </h2>

                        {/* ================= THIỆP ================= */}
                        <div className="mb-16">
                              <h3 className="text-xl font-semibold mb-6 text-center">
                                    Thiệp mời online
                              </h3>
                              <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto">
                                    Thiết kế thiệp cưới, sinh nhật, sự kiện online đẹp mắt – chỉnh sửa nhanh theo yêu cầu, giao ngay trong ngày.
                              </p>

                              <div className="overflow-hidden rounded-2xl border border-gray-800">
                                    <table className="w-full text-center table-fixed">

                                          <thead className="bg-gray-900">
                                                <tr>
                                                      <th className="p-4">Gói</th>
                                                      <th className="p-4">Cơ bản </th>
                                                      <th className="p-4 bg-purple-600">Cao cấp </th>
                                                      <th className="p-4">Các thiệp khác </th>
                                                </tr>
                                          </thead>

                                          <tbody className="bg-black">

                                                <tr className="border-t border-gray-800">
                                                      <td className="p-4 font-semibold">Giá</td>
                                                      <td className="p-4">100K - 150K </td>
                                                      <td className="p-4 text-purple-400 font-bold">250K - 300K </td>
                                                      <td className="p-4">Liên hệ</td>
                                                </tr>

                                                <tr className="border-t border-gray-800">
                                                      <td className="p-4 font-semibold">Thiết kế</td>
                                                      <td className="p-4">Tạo thiệp theo từng tên khách mời </td>
                                                      <td className="p-4">Tạo website tương tác </td>
                                                      <td className="p-4">Đang update </td>
                                                </tr>

                                                {/* <tr className="border-t border-gray-800">
                                                      <td className="p-4 font-semibold">Thời gian</td>
                                                      <td className="p-4">30 phút</td>
                                                      <td className="p-4">15 phút</td>
                                                      <td className="p-4">5-10 phút</td>
                                                </tr> */}

                                                {/* <tr className="border-t border-gray-800">
                                                      <td></td>

                                                      <td className="p-4">
                                                            <a href="#contact" className="bg-gray-700 px-4 py-2 rounded-lg">
                                                                  Chọn
                                                            </a>
                                                      </td>

                                                      <td className="p-4">
                                                            <a href="#contact" className="bg-purple-600 px-6 py-2 rounded-lg hover:scale-105 inline-block">
                                                                  Chọn 🔥
                                                            </a>
                                                      </td>

                                                      <td className="p-4">
                                                            <a href="#contact" className="bg-gray-700 px-4 py-2 rounded-lg">
                                                                  Liên hệ
                                                            </a>
                                                      </td>

                                                </tr> */}

                                          </tbody>
                                    </table>
                              </div>
                        </div>

                        {/* ================= NETFLIX ================= */}
                        <div>
                              <h3 className="text-xl font-semibold mb-6 text-center">
                                    Netflix Account VIP
                              </h3>

                              <div className="overflow-hidden rounded-2xl border border-gray-800">
                                    <table className="w-full text-center table-fixed">

                                          <thead className="bg-gray-900">
                                                <tr>
                                                      <th className="p-4">Gói</th>
                                                      <th className="p-4">1 ngày</th>
                                                      <th className="p-4 bg-purple-600">1 tuần </th>
                                                      <th className="p-4">1 tháng </th>
                                                </tr>
                                          </thead>

                                          <tbody className="bg-black">

                                                <tr className="border-t border-gray-800">
                                                      <td className="p-4 font-semibold">Giá</td>
                                                      <td className="p-4">20K </td>
                                                      <td className="p-4 text-purple-400 font-bold">50K </td>
                                                      <td className="p-4">110K </td>
                                                </tr>

                                                {/* <tr className="border-t border-gray-800">
                                                      <td className="p-4 font-semibold">Thiết bị</td>
                                                      <td className="p-4">1 thiết bị</td>
                                                      <td className="p-4">2 thiết bị</td>
                                                      <td className="p-4">Toàn quyền</td>
                                                </tr> */}

                                                <tr className="border-t border-gray-800">
                                                      <td className="p-4 font-semibold">Chất lượng</td>
                                                      <td className="p-4">HD, FULL HD, 4K </td>
                                                      <td className="p-4">HD, FULL HD, 4K </td>
                                                      <td className="p-4">HD, FULL HD, 4K </td>
                                                </tr>

                                                {/* <tr className="border-t border-gray-800">
                                                      <td></td>

                                                      <td className="p-4">
                                                            <a href="#contact" className="bg-gray-700 px-4 py-2 rounded-lg">
                                                                  Chọn
                                                            </a>
                                                      </td>

                                                      <td className="p-4">
                                                            <a href="#contact" className="bg-purple-600 px-6 py-2 rounded-lg hover:scale-105 inline-block">
                                                                  Chọn 🔥
                                                            </a>
                                                      </td>

                                                      <td className="p-4">
                                                            <a href="#contact" className="bg-gray-700 px-4 py-2 rounded-lg">
                                                                  Chọn
                                                            </a>
                                                      </td>

                                                </tr> */}

                                          </tbody>
                                    </table>
                              </div>
                        </div>

                  </div>
            </section>
      );
}