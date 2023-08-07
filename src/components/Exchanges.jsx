import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';
import { server } from '../index';
import {
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

const Exchanges = () => {
  const [coins, setCoins] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fecthExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fecthExchanges();
  }, []);

  if (error)
    return <ErrorComponent message={'Error while Fetching Exchanges'} />;

  return (
    <Container maxW={'container.xl'}>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {coins.map(i => (
              <ExchangeCard
                name={i.name}
                image={i.image}
                url={i.url}
                rank={i.trust_score_rank}
                key={i.id}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, image, rank, url }) => (
  <a href={url} target={'blank'}>
    <VStack
      w={'52'}
      shadow={'lg'}
      borderRadius={'lg'}
      p={'8'}
      transition={'all 0.3s'}
      m={'4'}
      css={{ '&:hover': { transform: 'scale(1.1)' } }}
    >
      <Image
        src={image}
        w={'10'}
        h={'10'}
        objectFit={'contain'}
        alt="Exchange"
      />
      <Heading size={'md'} noOfLines={'1'}>
        {rank}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;
