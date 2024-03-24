import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import RichText from "@/components/RichText";

/**
 * Props for `EventsSlice`.
 */
export type EventsSliceProps = SliceComponentProps<Content.EventsSliceSlice>;

/**
 * Component for "EventsSlice" Slices.
 */
const EventsSlice = ({ slice }: EventsSliceProps): JSX.Element => {
  return (


    <section>
      {/* Title and Description */}
      <Container maxW="container.lg">
        <Text fontSize="3xl" fontWeight="bold" mb="4">
          {slice.primary.title}
        </Text>

        <RichText field={slice.primary.description} className='text-white' />
      </Container>


      <Flex flexWrap="wrap" justifyContent="space-between" px="4">
        {slice.items.map((item, i) => (
          
          <Box key={i} w={['100%', 'calc(50% - 20px)', 'calc(33.33% - 20px)']} mb="8">

            <Box mb="4">

              <div className='absolute inset-0'>
                <PrismicNextImage field={item.eventimage}/>
                <div className='absolute inset-0 bg-black bg-opacity-75  mix-blend-multiply' />
              </div>
            </Box>
            


            <Flex justifyContent="space-between" alignItems="center" mb="4">
              <Text fontWeight="bold">{item.eventname}</Text>
              <Text>{item.eventdate}</Text>
            </Flex>


            <RichText field={slice.primary.description} className='text-white' />
          </Box>
        ))}
      </Flex>
    </section>

  );
};

export default EventsSlice;
