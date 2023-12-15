import {
    Box,
    Button,
    Divider,
    Flex,
    Grid,
    Icon,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { CustomCard } from "../../../chakra/CustomCard";
  import { Fragment } from "react";
  
  const Transactions = () => {
    const transactions = [
      {
        id: "1",
        text: "INR Deposit",
        amount: "+ ₹12,125.10",
        timestamp: "2022-06-09 7:06 PM",
      },
      {
        id: "2",
        text: "MRF  Sell",
        amount: "- 12.4851 MRF",
        timestamp: "2022-06-09 7:06 PM",
      },
      {
        id: "3",
        text: "INR Deposit",
        amount: "+ ₹12,125.10",
        timestamp: "2022-06-09 7:06 PM",
      },
    ];
  
    return (
      <CustomCard h="full">
        <Text mb="6" fontSize="sm" color="black.80">
          Recent Transactions
        </Text>
        <Stack spacing={4}>
          {transactions.map((transaction, i) => (
            <Fragment key={transaction.id}>
              {i !== 0 && <Divider />}
              <Flex gap="4">
                <Grid
                  placeItems="center"
                  bg="black.5"
                  boxSize={10}
                  borderRadius="full"
                >
                </Grid>
                <Flex justify="space-between" w="full">
                  <Stack spacing={0}>
                    <Text textStyle="h6">{transaction.text}</Text>
                    <Text fontSize="sm" color="black.40">
                      {transaction.timestamp}
                    </Text>
                  </Stack>
                  <Text textStyle="h6">{transaction.amount}</Text>
                </Flex>
              </Flex>
            </Fragment>
          ))}
        </Stack>
        <Button w="full" mt="6" colorScheme="gray">
          View All
        </Button>
      </CustomCard>
    );
  };
  
  export default Transactions;