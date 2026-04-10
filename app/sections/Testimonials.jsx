// const reviews = [
//       {
//             name: "Khách A",
//             content: "Dịch vụ nhanh, rất đẹp!",
//       },
//       {
//             name: "Khách B",
//             content: "Netflix dùng ổn định 👍",
//       },
// ];

// export default function Testimonials() {
//       return (
//             <section className="py-20 px-6 bg-gray-950">
//                   <h2 className="text-2xl font-bold text-center mb-10">
//                         Đánh giá khách hàng
//                   </h2>

//                   <div className="grid md:grid-cols-2 gap-6">
//                         {reviews.map((r, i) => (
//                               <div
//                                     key={i}
//                                     className="bg-gray-900 p-6 rounded-2xl"
//                               >
//                                     <p className="mb-4 text-gray-300">"{r.content}"</p>
//                                     <h4 className="font-semibold">{r.name}</h4>
//                               </div>
//                         ))}
//                   </div>
//             </section>
//       );
// }