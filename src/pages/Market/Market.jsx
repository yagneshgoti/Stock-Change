import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import MarketTable from "./components/MarketTable";
import { BsSearch } from "react-icons/bs";

const Market = () => {
  return (
    <DashboardLayout title="Market">
      <Flex justify="end" mt="4" mb="2"></Flex>
      
      <Card borderRadius="1rem">
        <Tabs isFitted variant="enclosed">
          <TabList
            pt="4"
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <Tab>Indian Indics</Tab>
            <Tab>Global Indics</Tab>
            <InputGroup maxW="200px" >
                <InputLeftElement pointerEvents="none">
                  <Icon as={BsSearch} />
                </InputLeftElement>
                <Input type="tel" placeholder="Search..." />
              </InputGroup>
          </TabList>
          <TabPanels>
            <TabPanel>
              <MarketTable />
            </TabPanel>
            <TabPanel>
              <p>No Data Found!..</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Market;
