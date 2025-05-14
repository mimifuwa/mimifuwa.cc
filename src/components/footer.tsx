export default function Footer() {
  return (
    <footer className="flex w-full justify-between items-center p-4 pt-8 px-5 mb-4 max-w-7xl mx-auto">
      <p className="text-md text-slate-600 mx-auto">
        &copy; {new Date().getFullYear()} mimifuwa.cc
      </p>
    </footer>
  );
}
