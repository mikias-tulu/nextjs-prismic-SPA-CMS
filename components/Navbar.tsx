'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode
}

const Links = ['Home', 'Events', 'How it works']

const NavLink = (props: Props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
     

<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
  <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
    <IconButton
      size={'md'}
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      aria-label={'Open Menu'}
      display={{ md: 'none' }}
      onClick={isOpen ? onClose : onOpen}
    />
    <HStack spacing={8} alignItems={'center'}>
     
      <Image src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-event-vector-text-effects-with-transparent-background-png-image_5553598.jpg" alt="Logo" boxSize="40px" />
      <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
        {Links.map((link) => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </HStack>
    </HStack>
    <Flex alignItems={'center'}>
      <Button
        variant={'solid'}
        colorScheme={'teal'}
        size={'sm'}
        mr={4}
        leftIcon={<AddIcon />}
      >
        Events
      </Button>
    </Flex>
  </Flex>

  {isOpen ? (
    <Box pb={4} display={{ md: 'none' }}>
      <Stack as={'nav'} spacing={4}>
        {Links.map((link) => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </Stack>
    </Box>
  ) : null}
</Box>


     
    </>
  )
}
