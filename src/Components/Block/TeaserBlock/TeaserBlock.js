import { storyblokEditable } from "@storyblok/react";

const TeaserBlock = ({ blok }) => {
  return (
    <>
      <h1>Teaser</h1>
      <div {...storyblokEditable(blok)} className="bg-white-half">
        <div className="pb-6 pt-16 container mx-auto">
          <h2 className="text-6xl font-bold font-serif text-primary mb-4">
            {blok.headline}
          </h2>
          <img
            src={blok.image.filename}
            alt={blok.image.alt}
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default TeaserBlock;
