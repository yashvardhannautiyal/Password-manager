function Footer() {
  return (
    <>
    <footer>
      <div className="p-4 flex items-center justify-center text-sm sm:text-normal">
        <p className="flex gap-1.5 items-center font-medium">
          Made with
          <lord-icon
            className="h-5"
            src="https://cdn.lordicon.com/nvsfzbop.json"
            trigger="hover"
            colors="primary:#e8308c,secondary:#121331"
          ></lord-icon>
          by Yash Vardhan Nautiyal.
        </p>
      </div>
      </footer>
    </>
  );
}
export default Footer;
