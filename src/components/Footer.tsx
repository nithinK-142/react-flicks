const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <h2 className="mt-2 text-base font-thin tracking-wider text-center opacity-50 ">
      React Flicks {year} All Rights Reserved.
    </h2>
  );
};

export default Footer;
