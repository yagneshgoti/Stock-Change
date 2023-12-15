import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    Text,
    Tag,
  } from "@chakra-ui/react";
  const TransactionTable = () => {
    const tableData = [
      {
        id: "HD82NC2H",
        date: "2023-06-20",
        time: "07:00 AM",
        type: {
          name: "INR Deposit",
          tag: "E-Transfer",
        },
        amount: "+₹12,125",
        status: "pending",
      },
      {
        id: "HD82NC4H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "INR Widthdraw",
          tag: "Wire Transfer",
        },
        amount: "-₹5,213",
        status: "processing",
      },
      {
        id: "HD82NS5H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "Buy",
          tag: "MFF",
        },
        amount: "12.055 MRF",
        status: "cancelled",
      },
      {
        id: "HD82NS6H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "Sell",
          tag: "MRF",
        },
        amount: "-2.055 MRF",
        status: "completed",
      },
      {
        id: "HD82NF7H",
        date: "2023-06-20",
        time: "07:00 AM",
        type: {
          name: "MRF Deposit",
        },
        amount: "+15.500",
        status: "pending",
      },
      {
        id: "HD82NF8H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "MRF Widthdraw",
        },
        amount: "-5.055",
        status: "completed",
      },
    ];
  
    const statusColor = {
      pending: "#797E82",
      processing: "#F5A50B",
      completed: "#059669",
      cancelled: "#DC2626",
    };
  
    return (
      <TableContainer>
        <Table variant="simple" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Date & Time</Th>
              <Th>Type</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody color="p.black">
            {tableData.map((data) => (
              <Tr key={data.id}>
                <Td fontSize="sm" fontWeight="medium">
                  {data.id}
                </Td>
                <Td>
                  <Stack spacing={0}>
                    <Text fontSize="sm" fontWeight="medium">
                      {data.date}
                    </Text>
                    <Text fontSize="xs" color="black.60">
                      {data.time}
                    </Text>
                  </Stack>
                </Td>
                <Td>
                  {" "}
                  <Stack spacing={0}>
                    <Text fontSize="sm" fontWeight="medium">
                      {data.type.name}
                    </Text>
                    <Text fontSize="xs" color="black.60">
                      {data.type?.tag}
                    </Text>
                  </Stack>
                </Td>
                <Td fontSize="sm" fontWeight="medium">
                  {data.amount}
                </Td>
                <Td fontSize="sm" fontWeight="medium">
                  <Tag
                    bg={statusColor[data.status]}
                    color="white"
                    borderRadius="full"
                  >
                    {data.status}
                  </Tag>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  };
  
  export default TransactionTable;