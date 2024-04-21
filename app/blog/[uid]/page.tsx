

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { PostCard } from "@/components/PostCard";
import { BlogRichText } from "@/components/BlogRichText";
import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";



type Params = { uid: string };


export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blog", params.uid)
    .catch(() => notFound());

  return {
    title: prismic.asText(page.data.description),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();


  const page = await client
    .getByUID("blog", params.uid)
    .catch(() => notFound());


  const posts = await client.getAllByType("blog", {
    predicates: [prismic.filter.not("my.blog.uid", params.uid)],
    orderings: [
      { field: "my.blog.blog_date", direction: "desc" },
      { field: "document.first_blog_date", direction: "desc" },
    ],
    limit: 2,
  });


  const { slices, title, blogdate, description, featuredimage } =
    page.data;

  return (
    <Box className="flex flex-col gap-12 w-full max-w-3xl">
      <section className="flex flex-col gap-12">
        <Box textAlign="center">
          <Container maxW="container.lg">
            <Text fontSize="3xl" fontWeight="bold" mb="4">
              {title} 
            </Text>
            <Text fontSize="sm" color="gray.500" mb="2">
              {new Date(blogdate || "").toLocaleDateString()}
            </Text>
            <Box borderBottom="2px" borderColor="gray.200" mb="4" />
            <Box textAlign="left">
              <BlogRichText field={description} />
            </Box>
          </Container>
        </Box>
        <Flex justify="center"> 
          <PrismicNextImage
            field={featuredimage}
            sizes="100vw"
            className="rounded-xl object-cover"
            style={{ width: "400px", height: "400px" }}
          />
        </Flex>
       
      </section>

      <SliceZone slices={slices} components={components} />

      <Box mt="8">
        <Heading as="h2" fontWeight="bold" fontSize="3xl" mb="4">
          Recommended Posts
        </Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap="8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export async function generateStaticParams() {
  const client = createClient();


  const pages = await client.getAllByType("blog");


  return pages.map((page) => {
    return { uid: page.uid };
  });
}