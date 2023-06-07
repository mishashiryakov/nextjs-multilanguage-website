import Storyblok from "./storyblok";

export async function fetchHeaderData() {
  const { data } = await Storyblok.get("cdn/stories/header");

  return data.story;
}

export async function fetchGlobalSettings() {
  const { data } = await Storyblok.get("cdn/stories/global-settings");

  return data.story.content;
}
