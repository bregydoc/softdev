import {
    Box,
    Button,
    Center,
    Checkbox,
    Divider,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
} from "@chakra-ui/core";
import { NextPage } from "next";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

const PlatformPage: NextPage = () => {
    return (
        <Center>
            <Flex>
                <Box>
                    <Heading as="h4" size="md">
                        Books
                    </Heading>
                </Box>
                <Divider orientation="vertical" />
                <Box>
                    <Heading as="h4" size="md">
                        Autors
                    </Heading>
                </Box>
            </Flex>
        </Center>
    );
};

export default PlatformPage;
