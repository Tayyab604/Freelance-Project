import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import { styled } from 'styled-components'


const TermsOfUse = () => {
  return (
    <Container>

      <Dabba>
        <Box color="#570880"  >
          <Stack gap="30px" px="50px" >
            <Text fontSize="50px" fontWeight="bold" >
              Terms & Conditions
            </Text>
            <Text fontSize="30px" fontWeight="bold" >
              Effective Date: February 20, 2024
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              These Terms & Conditions ("Terms") govern your use of the Canfree platform ("Platform"). By accessing or using the Platform, you agree to be bound by these Terms.
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              Information We Collect         </Text>
            <Text fontSize="20px" fontWeight="bold" >
              We collect several types of information from and about you when you use the Platform:         </Text>
            <Text fontSize="20px" fontWeight="bold" >
              <li><span style={{ fontSize: "30px" }} >Personal Information:</span> This includes information that can be used to identify you, such as your name, email address, phone number, postal address, and profile picture.</li>
              <li><span style={{ fontSize: "30px" }} >Billing Information:</span> This includes information you provide for payment purposes, such as your credit card number or other payment information.</li>
              <li><span style={{ fontSize: "30px" }} >Usage Data:</span>This includes information about how you use the Platform, such as the pages you visit, the projects you browse, and the skills you search for.</li>
              <li><span style={{ fontSize: "30px" }} >Communications Data:</span>This includes information about your communications with other users on the Platform, such as messages and feedback.</li>
              <li><span style={{ fontSize: "30px" }} >Device Information:</span>This includes information about the device you use to access the Platform, such as your device type, operating system, IP address, and browser type.</li>
            </Text>
            <Text fontSize="30px" fontWeight="bold" >
              How We Use Your Information
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              <li>Provide and operate the Platform, including facilitating transactions between freelancers and clients.</li>
              <li>Verify your identity and account information.</li>
              <li>Send you important information about the Platform, such as changes to our terms or policies.</li>
              <li>Send you marketing communications, if you opt-in to receive them.</li>
              <li>Respond to your inquiries and requests.</li>
              <li>Improve the Platform and develop new features.</li>
              <li>Prevent fraud and protect the security of the Platform.</li>
            </Text>

            <Text fontSize="20px" fontWeight="bold" >
              Sharing Your Information
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              We may share your information with third-party service providers who help us operate the Platform, such as payment processors, data storage providers, and marketing agencies. These service providers are obligated to protect your information and use it only for the purposes we have authorized.
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              We may also share your information with other users of the Platform, such as the freelancer you hire or the client you work for. This information is necessary to facilitate the completion of projects and provide feedback.
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              We may disclose your information if we are required to do so by law or in the good faith belief that such disclosure is necessary to comply with legal processes, enforce our terms and conditions, protect the safety and security of our users, or prevent fraud.
            </Text>
            <Text fontSize="30px" fontWeight="bold" >
              Your Choices
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              <li>You can access and update your profile information at any time.</li>
              <li>You can opt out of receiving marketing communications from us by following the unsubscribe instructions in those communications.</li>
              <li>You can choose to delete your account by contacting us.</li>
            </Text>


            <Text fontSize="30px" fontWeight="bold" >
              Data Retention
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              We will retain your information for as long as your account is active or as needed to provide you with the services you have requested. We will also retain your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
            </Text>

            <Text fontSize="30px" fontWeight="bold" >
              Children's Privacy
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              The Platform is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us and we will take steps to remove the information from our systems.
            </Text>

            <Text fontSize="30px" fontWeight="bold" >
              Security
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet or electronic storage system is completely secure. We cannot guarantee the absolute security of your information.
            </Text>

            <Text fontSize="30px" fontWeight="bold" >
              International Transfers
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              Your information may be transferred to and processed in countries other than your own, which may have different data protection laws. By using the Platform, you consent to these transfers.
            </Text>
            <Text fontSize="30px" fontWeight="bold" >
              Changes to this Privacy Policy
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Platform. You are advised to review this Privacy Policy periodically for any changes.         </Text>

            <Text fontSize="30px" fontWeight="bold" >
              Contact Us
            </Text>
            <Text fontSize="20px" fontWeight="bold" >
              If you have any questions about this Privacy Policy, please contact us at:
              @Canfreeorg
            </Text>
          </Stack>



        </Box>


      </Dabba>

    </Container>
  )
}

export default TermsOfUse


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height:  100%;
    width: 100%;
    background-image: url("../Images/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `
const Dabba = styled.div`
    margin-top : 50px;
    box-shadow: 0 0 10px black;
    width: 1240px;
    height: 2900px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border:1px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    
    `
