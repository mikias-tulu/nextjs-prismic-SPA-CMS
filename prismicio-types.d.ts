// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogDocumentDataSlicesSlice = BlogSliceSlice;

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Blog*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * FeaturedImage field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.featuredimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featuredimage: prismic.ImageField<never>;

  /**
   * BlogDate field in *Blog*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.blogdate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  blogdate: prismic.DateField;

  /**
   * Slice Zone field in *Blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice> /**
   * Meta Description field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

type HomepageDocumentDataSlicesSlice =
  | HowItWorksSlice
  | EventsSliceSlice
  | HeroSliceSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes = BlogDocument | HomepageDocument;

/**
 * Primary content in *BlogSlice → Primary*
 */
export interface BlogSliceSliceDefaultPrimary {
  /**
   * Title field in *BlogSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *BlogSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_slice.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for BlogSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BlogSlice*
 */
type BlogSliceSliceVariation = BlogSliceSliceDefault;

/**
 * BlogSlice Shared Slice
 *
 * - **API ID**: `blog_slice`
 * - **Description**: BlogSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogSliceSlice = prismic.SharedSlice<
  "blog_slice",
  BlogSliceSliceVariation
>;

/**
 * Primary content in *EventsSlice → Primary*
 */
export interface EventsSliceSliceDefaultPrimary {
  /**
   * Title field in *EventsSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *EventsSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_slice.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *EventsSlice → Items*
 */
export interface EventsSliceSliceDefaultItem {
  /**
   * EventImage field in *EventsSlice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: events_slice.items[].eventimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  eventimage: prismic.ImageField<never>;

  /**
   * EventName field in *EventsSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_slice.items[].eventname
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eventname: prismic.KeyTextField;

  /**
   * EventDescription field in *EventsSlice → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_slice.items[].eventdescription
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  eventdescription: prismic.RichTextField;

  /**
   * EventDate field in *EventsSlice → Items*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: events_slice.items[].eventdate
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  eventdate: prismic.DateField;
}

/**
 * Default variation for EventsSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EventsSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EventsSliceSliceDefaultPrimary>,
  Simplify<EventsSliceSliceDefaultItem>
>;

/**
 * Slice variation for *EventsSlice*
 */
type EventsSliceSliceVariation = EventsSliceSliceDefault;

/**
 * EventsSlice Shared Slice
 *
 * - **API ID**: `events_slice`
 * - **Description**: EventsSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EventsSliceSlice = prismic.SharedSlice<
  "events_slice",
  EventsSliceSliceVariation
>;

/**
 * Primary content in *HeroSlice → Primary*
 */
export interface HeroSliceSliceDefaultPrimary {
  /**
   * Title field in *HeroSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *HeroSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *HeroSlice → Items*
 */
export interface HeroSliceSliceDefaultItem {
  /**
   * CTA Link field in *HeroSlice → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.items[].cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * CTA Text field in *HeroSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.items[].cta_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_text: prismic.KeyTextField;
}

/**
 * Default variation for HeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceSliceDefaultPrimary>,
  Simplify<HeroSliceSliceDefaultItem>
>;

/**
 * Slice variation for *HeroSlice*
 */
type HeroSliceSliceVariation = HeroSliceSliceDefault;

/**
 * HeroSlice Shared Slice
 *
 * - **API ID**: `hero_slice`
 * - **Description**: HeroSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSlice = prismic.SharedSlice<
  "hero_slice",
  HeroSliceSliceVariation
>;

/**
 * Primary content in *HowItWorks → Primary*
 */
export interface HowItWorksSliceDefaultPrimary {
  /**
   * Title field in *HowItWorks → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: how_it_works.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *HowItWorks → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: how_it_works.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *HowItWorks → Items*
 */
export interface HowItWorksSliceDefaultItem {
  /**
   * Lists field in *HowItWorks → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: how_it_works.items[].lists
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  lists: prismic.RichTextField;
}

/**
 * Default variation for HowItWorks Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HowItWorksSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HowItWorksSliceDefaultPrimary>,
  Simplify<HowItWorksSliceDefaultItem>
>;

/**
 * Slice variation for *HowItWorks*
 */
type HowItWorksSliceVariation = HowItWorksSliceDefault;

/**
 * HowItWorks Shared Slice
 *
 * - **API ID**: `how_it_works`
 * - **Description**: HowItWorks
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HowItWorksSlice = prismic.SharedSlice<
  "how_it_works",
  HowItWorksSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BlogSliceSlice,
      BlogSliceSliceDefaultPrimary,
      BlogSliceSliceVariation,
      BlogSliceSliceDefault,
      EventsSliceSlice,
      EventsSliceSliceDefaultPrimary,
      EventsSliceSliceDefaultItem,
      EventsSliceSliceVariation,
      EventsSliceSliceDefault,
      HeroSliceSlice,
      HeroSliceSliceDefaultPrimary,
      HeroSliceSliceDefaultItem,
      HeroSliceSliceVariation,
      HeroSliceSliceDefault,
      HowItWorksSlice,
      HowItWorksSliceDefaultPrimary,
      HowItWorksSliceDefaultItem,
      HowItWorksSliceVariation,
      HowItWorksSliceDefault,
    };
  }
}
