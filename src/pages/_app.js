import "../styles/tailwind.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import BlogPostBlock from "../Components/Block/BlogPostBlock/BlogPostBlock";
import FeaturedPostsBlock from "../Components/Block/FeaturedPostsBlock/FeaturedPostsBlock";
import GridBlock from "../Components/Block/GridBlock/GridBlock";
import StandardPage from "../Components/Page/StandardPage/StandardPage";
import TeaserBlock from "../Components/Block/TeaserBlock/TeaserBlock";

const components = {
  "featured-posts": FeaturedPostsBlock,
  grid: GridBlock,
  "page-standard": StandardPage,
  post: BlogPostBlock,
  teaser: TeaserBlock,
};

storyblokInit({
  accessToken: "UUDr0Yg98xXF1PL0zxOMkwtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
