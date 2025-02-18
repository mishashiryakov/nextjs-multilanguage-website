import Layout from "../Components/UI/Layout/Layout";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import { useRouter } from "next/router";

export default function Page({ story, locale, locales, defaultLocale }) {
  const router = useRouter();
  const hiddenSlugs = ["header", "global-settings"];

  const hasHiddenSlug = router?.query?.slug?.some((slug) =>
    hiddenSlugs.includes(slug)
  );

  story = useStoryblokState(story, {
    resolveRelations: ["featured-posts.posts"],
    language: locale,
  });

  return (
    <Layout locale={locale} locales={locales} defaultLocale={defaultLocale}>
      {hasHiddenSlug ? (
        <p>Page not found</p>
      ) : (
        <StoryblokComponent blok={story.content} />
      )}
    </Layout>
  );
}

export async function getStaticProps({
  locale,
  locales,
  defaultLocale,
  params,
}) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft",
    resolve_relations: ["featured-posts.posts"],
    language: locale,
  };

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      locale,
      locales,
      defaultLocale,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths({ locales }) {
  let { data } = await getStoryblokApi().get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
    if (slug === "home") splittedSlug = false;

    // create additional languages
    for (const locale of locales) {
      paths.push({ params: { slug: splittedSlug }, locale });
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
}
