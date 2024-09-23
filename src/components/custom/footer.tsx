const Footer = () => {
  return (
    <footer className="border-t mt-auto w-full bg-secondary p-2 md:p-4">
      <div className="w-full max-w-7xl mx-auto flex flex-wrap text-center items-center justify-center sm:justify-between gap-3 text-sm">
        <p>Copyright &copy; {new Date().getFullYear()} Sahil Andhare</p>
        <p>
          Made with ❤️ by{" "}
          <a
            href="www.sahilandhare.works"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-blue-500 transition-all"
          >
            Sahil Andhare
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
