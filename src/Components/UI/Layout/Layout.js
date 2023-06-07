import Head from "../Head/Head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children, locale, locales, defaultLocale }) => {
  return (
    <div className="bg-gray-300">
      <Head />
      <Header locale={locale} locales={locales} defaultLocale={defaultLocale} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
