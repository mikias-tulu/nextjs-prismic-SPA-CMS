import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { Box, Container, Text, VStack } from '@chakra-ui/react';
import RichText from "@/components/RichText";

/**
 * Props for `HowItWorks`.
 */
export type HowItWorksProps = SliceComponentProps<Content.HowItWorksSlice>;

/**
 * Component for "HowItWorks" Slices.
 */
const HowItWorks = ({ slice }: HowItWorksProps): JSX.Element => {
  return (


    <section>
 
      <Container maxW="container.lg">
        <Text fontSize="3xl" fontWeight="bold" mb="4">
          {slice.primary.title}
        </Text>

        <RichText field={slice.primary.description} className='text-white' />
      </Container>

  
      <VStack spacing="6" align="start">
        {slice.items.map((item, i) => (
          <Box key={i} w="100%">
            <Container maxW="container.lg">
              <PrismicRichText field={item.lists} />
            </Container>
          </Box>
        ))}
      </VStack>
    </section>

  );
};

export default HowItWorks;
