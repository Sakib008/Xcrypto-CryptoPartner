import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import btcSrc from '../assets/btc.png';

const Footer = () => {
  return (
    <Box
      color={'whiteAlpha.700'}
      minH={'48'}
      bgColor={'blackAlpha.900'}
      px={'16'}
      py={['16', '8']}
    >
      <Stack direction={['column', 'row']} alignItems={'center'} h={'full'}>
        <VStack w={'full'} alignItems={['center', 'flex-start']}>
          <Text fontWeight={'bold'}>About Us</Text>
          <Text
            fontWeight={'sm'}
            letterSpacing={'widest'}
            textAlign={['center', 'left']}
          >
            We are the best crypto trading app in India and South-Africa,We
            provide our guidence at a very real price.
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={'28'} mt={['4', '0']} src={btcSrc} />
          <Text>Our Founder </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
