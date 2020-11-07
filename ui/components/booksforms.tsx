import React from "react";
import {
    Box,
    Button,
    Center,
    Checkbox,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";

export interface NewBookPayload {
    name: string;
    available: boolean;
    isbn: string;
    score: number;
}

const CreateBookForm = () => {
    const { register, handleSubmit, watch, errors } = useForm<NewBookPayload>();
    const onSubmit = (data) => console.log(data);

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={!!errors.name}>
                    <FormLabel htmlFor="name">First name</FormLabel>
                    <Input name="name" placeholder="Book name" ref={register({ required: true })} />
                    <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.available} mt={2}>
                    <FormLabel htmlFor="available">Availability</FormLabel>
                    <Checkbox defaultIsChecked ref={register({ required: true })}>
                        Is Available?
                    </Checkbox>
                    <FormErrorMessage>{errors.available && errors.available.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.isbn} mt={2}>
                    <FormLabel htmlFor="isbn">ISBN</FormLabel>
                    <Input name="isbn" placeholder="ISBN Book" ref={register({ required: true })} />
                    <FormErrorMessage>{errors.isbn && errors.isbn.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.score} mt={2}>
                    <FormLabel htmlFor="isbn">Score</FormLabel>
                    <Select name="score" placeholder="Select your book score" ref={register({ required: true })}>
                        <option value="s1">1</option>
                        <option value="s2">2</option>
                        <option value="s3">3</option>
                        <option value="s4">4</option>
                        <option value="s5">5</option>
                    </Select>
                    <FormErrorMessage>{errors.score && errors.score.message}</FormErrorMessage>
                </FormControl>

                <Button mt={4} type="submit">
                    Submit
                </Button>
                {/* <input type="submit" /> */}
            </form>
        </Box>
    );
};

export default CreateBookForm;
