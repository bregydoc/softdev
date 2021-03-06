import { Box, Button, Center, Flex, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/core";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { NextPage } from "next";
import React from "react";
import Link from "next/link";

const IndexPage: NextPage = () => {
    return (
        <Center height="100vh">
            <Box>
                <Heading>Software Development - UTEC 2020</Heading>
                <Text fontSize={"2xl"} my={4}>
                    Stack:
                </Text>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        Flask
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        SQLAlchemy
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        React
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        Chakra
                    </ListItem>
                </List>
                <Flex width="100%" mt={4}>
                    <Link href="/platform">
                        <Button>Open Solution</Button>
                    </Link>
                </Flex>
            </Box>
        </Center>
    );
};

export default IndexPage;
