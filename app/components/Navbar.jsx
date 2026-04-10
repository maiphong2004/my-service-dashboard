export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Phong Dev</h1>

      <div className="flex gap-6 text-sm">
        <a href="#services">Dịch vụ</a>
        <a href="#pricing">Bảng giá</a>
        <a href="#contact">Liên hệ</a>
      </div>
    </nav>
  );
}