import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import { send } from 'emailjs-com';
import FullScreenSection from "./FullScreenSection";

const ContactMeSection = () => {

  const formik = useFormik({
    initialValues: {
      from_name: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log('values', values);
      try {
        send(
          'service_ak-projects',
          'template_me0gf7v',
          values,
          'agJWxeoZ_cB9hOqCK'
        )
        alert(`Thanks for your submission ${values.from_name}, we will get back to you shortly!`);
        formik.setSubmitting(false);
        formik.resetForm();
        console.log('email sent');
      } catch {
        alert(`Something went wrong, please try again later!`);
        formik.setSubmitting(false);
      }

    },

  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack maxW="724px" p={20} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="unset" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.from_name && formik.touched.from_name}>
                <FormLabel htmlFor="from_name">Name</FormLabel>
                <Input
                  id="from_name"
                  name="from_name"
                  {...formik.getFieldProps("from_name")}
                />
                <FormErrorMessage>{formik.errors.from_name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="hireMe">Project proposal</option>
                  <option value="hiringProposal">
                    Hiring proposal
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" disabled={formik.isSubmitting}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;