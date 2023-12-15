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
  Button,
} from "@chakra-ui/react";
import React from "react";

const MarketTable = () => {
  const tableData = [
    {
      company: "HDFC Bank",
      price: "1630.90",
      change: "-3.70",
      high:"1,658.95",
      low:"1,645.00",
      value: "2,903.53",
    },
    {
      company: "MRF",
      price: "452.37",
      change: "4.70",
      high:"119,550.05",
      low:"120,558.80",
      value: "589.04",
    },
    {
      company: "Indian Renew",
      price: "724.70	",
      change: "-0.08",
      high:"724.70	",
      low:"718.60",
      value: "2389.03",
    },
    {
      company: "HUDCO",
      price: "1630.90",
      change: "-3.70",
      high:"879.00	",
      low:"1.51",
      value: "153.18",
    },
    {
      company: "Infosys",
      price: "1630.90",
      change: "1.68",
      high:"799.95	",
      low:"785.50",
      value: "401.50",
    },
    {
      company: "Bajaj Finance",
      price: "1630.90",
      change: "1.92",
      high:"545.95",
      low:"537.25",
      value: "389.32",
    },
    {
      company: "SBI",
      price: "1630.90",
      change: "-3.70",
      high:"195.55",
      low:"191.15",
      value: "375.99",
    },
    {
      company: "Power Finance",
      price: "1,730.95",
      change: "2.75",
      high:"1,733.90",
      low:"1,698.00",
      value: "2389.03",
    },
  ];
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Company</Th>
            <Th>Price</Th>
            <Th>Change(%)</Th>
            <Th>High</Th>
            <Th>Low</Th>
            <Th>Val.(cr)</Th>
            
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <Tr key={data.company}>
              <Td fontSize="sm" fontWeight="medium">{data.company}</Td>
              <Td fontSize="sm" fontWeight="medium">{data.price}</Td>
              <Td fontSize="sm" fontWeight="medium">{data.change}</Td>
              <Td fontSize="sm" fontWeight="medium">{data.high}</Td>
              <Td fontSize="sm" fontWeight="medium">{data.low}</Td>
              <Td fontSize="sm" fontWeight="medium">{data.value}</Td>
            </Tr>
          ))}
          
        </Tbody>
        
      </Table>
      <Button w="full" mt="6" colorScheme="gray">
          View All
        </Button>
    </TableContainer>
  );
};

export default MarketTable;
