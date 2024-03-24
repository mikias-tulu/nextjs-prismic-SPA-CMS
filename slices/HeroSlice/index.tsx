'use client'

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import {
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdPersonAdd } from "react-icons/md";
import CustomButton from "@/components/CustomButton";

/**
 * Props for `HeroSlice`.
 */
export type HeroSliceProps = SliceComponentProps<Content.HeroSliceSlice>;

/**
 * Component for "HeroSlice" Slices.
 */
const HeroSlice = ({ slice }: HeroSliceProps): JSX.Element => {
  return (
    <Stack
    px={8}
    py={24}
    mx="auto"
    w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
    spacing={{ base: "4", lg: "8" }}
  >
    <Heading
      mb={6}
      fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
      fontWeight="bold"
      lineHeight="none"
      letterSpacing={{ base: "normal", md: "tight" }}
      color="gray.900"
      _dark={{
        color: "gray.100",
      }}
    >
      Hey there,{" "}
      <Text
        display="inline"
        w="full"
        bgClip="text"
        bgGradient="linear(to-r, green.400,purple.500)"
        fontWeight="extrabold"
      >
        <>{slice.primary.title}</>
      </Text>{" "}
     ...
    </Heading>

    <chakra.p
      mb={6}
      fontSize={{ base: "lg", md: "xl" }}
      color="gray.600"
      _dark={{
        color: "gray.300",
      }}
      maxW="container.md"
    >
      <PrismicRichText field={slice.primary.description} />
    </chakra.p>

    <Flex
      flexDirection={{ base: "column", sm: "row" }}
      mb={{ base: 4, md: 8 }}
      gap={4}
      sx={{
        "[data-cta]": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          w: { base: "full", sm: "auto", lg: "205px" },
          h: { lg: "64px" },
          mb: { base: 2, sm: 0 },
          fontSize: { lg: "xl" },
          cursor: "pointer",
        },
      }}
    >
     
        <div>
          {
            slice.items.map((item, i) => (
              <CustomButton key={i} link={item.cta_link} text={item.cta_text} colorScheme="gray"/>
            
            ))
          }
        </div>
     
      <Button
        as="a"
        colorScheme="gray"
        size="lg"
        target="_blank"
        href={""}
        data-cta
      >
        Register
            <Icon boxSize={4} ml={2} as={MdPersonAdd } />
      </Button>
    </Flex>
  </Stack>
    // <section className="section">
    //   <div className="container">
    //     {/* <pre> {JSON.stringify(slice, null, 2)} </pre> */}
    //     <>{slice.primary.title}</>
    //     <PrismicRichText field={slice.primary.description} />
    //     {/* <PrismicNextLink field={item.cta_link}><>{item.cta_text}</></PrismicNextLink> */}
    //   </div>

      
    // </section>

  );
};

export default HeroSlice;
