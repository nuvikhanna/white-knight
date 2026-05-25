import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "wpx6tq8y",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export const urlFor = (source: SanityImageSource) => builder.image(source);

export type HomepageContent = {
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: SanityImageSource;
  aboutHeading?: string;
  aboutSubheading?: string;
  aboutBody?: unknown[];
};

export const homepageQuery = `*[_type == "homepage"][0]{
  heroTitle, heroSubtitle, heroImage, aboutHeading, aboutSubheading, aboutBody
}`;
