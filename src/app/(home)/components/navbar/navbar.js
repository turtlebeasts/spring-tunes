export default function Navbar() {
  return (
    <div className="absolute flex justify-between px-20 py-4 z-50 w-full text-white">
      <img src="logo.png" className="w-20" />
      <div className="flex gap-4 items-center">
        <h1>Home</h1>
        <h1>Artists</h1>
        <h1>Videos</h1>
        <h1>News</h1>
        <h1>Join us</h1>
      </div>
    </div>
  );
}
