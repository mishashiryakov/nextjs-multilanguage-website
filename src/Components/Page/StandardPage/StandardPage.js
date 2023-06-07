import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const StandardPage = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body
      ? blok.body.map((blok) => {
          return <StoryblokComponent blok={blok} key={blok._uid} />;
        })
      : null}
  </main>
);

export default StandardPage;
