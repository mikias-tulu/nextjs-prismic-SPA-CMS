import { BlogRichText } from "@/components/BlogRichText";
import { Box, Container, Text } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogSlice`.
 */
export type BlogSliceProps = SliceComponentProps<Content.BlogSliceSlice>;

/**
 * Component for "BlogSlice" Slices.
 */
const BlogSlice = ({ slice }: BlogSliceProps): JSX.Element => {
  return (
    <section>
      <Container maxW="container.lg">
        <Text fontSize="3xl" fontWeight="bold" mb="4">
          {slice.primary.title}
        </Text>

        <BlogRichText field={slice.primary.description}/>
      </Container>  
    </section>
    
  );
};

export default BlogSlice;
