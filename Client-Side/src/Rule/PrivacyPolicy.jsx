import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import { styled } from 'styled-components'


const PrivacyPolicy = () => {
  return (
    <Container>
    
        <Dabba>
          <Box color="#570880"  >
       <Stack gap="30px" px="50px" >
       <Text fontSize="50px"  fontWeight="bold" >
         Privacy Policy
         </Text>
         <Text fontSize="30px"  fontWeight="bold" >
         Effective Date: February 20, 2024
         </Text>
         <Text fontSize="20px"  fontWeight="bold" >
         This Privacy Policy describes how Canfree ("we," "us," or "our") collects, uses, and discloses your information when you use our platform (the "Platform"). It also describes the choices you have about your information and how you can access and update it.         </Text>
         <Text fontSize="30px"  fontWeight="bold" >
          1.Eligibility
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         You must be at least 18 years old and have the legal capacity to enter into contracts to use the Platform.
         </Text>
         <Text fontSize="30px"  fontWeight="bold" >
          2. Accounts
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         You are responsible for creating and maintaining a secure account on the Platform. You are also responsible for all activities that occur under your account, including any unauthorized use.
         </Text>
         <Text fontSize="30px"  fontWeight="bold" >
         3. Use of the Platform
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         You agree to use the Platform in accordance with all applicable laws and regulations. You will not use the Platform for any illegal or unauthorized purpose, including:
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         <li>Posting or transmitting any unlawful, harmful, threatening, abusive, defamatory, obscene, infringing, hateful, or racially or ethnically offensive content.</li>
         <li>Infringing on the intellectual property rights of others.</li>
         <li>Interfering with the operation of the Platform or any other user's use of the Platform.</li>
         <li>Attempting to gain unauthorized access to the Platform or any other user's account.</li>
         </Text>
          <Text fontSize="30px"  fontWeight="bold" >
          4. Freelancers
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         <li>Freelancers are responsible for accurately representing their skills and experience on their profiles.</li>
         <li>Freelancers are responsible for completing projects on time and in accordance with agreed-upon terms.</li>
         <li>Freelancers are responsible for setting their own rates and communicating them clearly to clients.</li>
         </Text>
         <Text fontSize="30px"  fontWeight="bold" >
         5. Clients
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         <li>Clients are responsible for providing accurate and complete project information.</li>
         <li>Clients are responsible for communicating clearly with freelancers and providing them with all necessary information to complete the project.</li>
         <li>Clients are responsible for making timely payments to freelancers.</li>
         </Text>

         <Text fontSize="30px"  fontWeight="bold" >
         6. Fees and Payments
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         Canfree may charge fees for certain services, such as processing fees for payments. You are responsible for paying all applicable fees.
         </Text>

         
         <Text fontSize="30px"  fontWeight="bold" >
         7. Intellectual Property
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         The content and materials on the Platform, including the Canfree name and logo, are protected by copyright, trademark, and other intellectual property laws. You may not use any of this content or materials without our prior written permission.
         </Text>

         <Text fontSize="30px"  fontWeight="bold" >
         8. Termination
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         We may terminate your account or access to the Platform at any time, for any reason, without notice.
         </Text>

         <Text fontSize="30px"  fontWeight="bold" >
         9. Disclaimer
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         The Platform is provided "as is" and without warranties of any kind, express or implied. We disclaim all warranties, including but not limited to, warranties of merchantability, fitness for a particular purpose, and non-infringement.
         </Text>

         <Text fontSize="30px"  fontWeight="bold" >
         10. Limitation of Liability
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         We will not be liable for any damages arising out of your use of the Platform, including but not limited to, direct, indirect, incidental, consequential, or punitive damages.
         </Text>
         <Text fontSize="30px"  fontWeight="bold" >
         11. Governing Law
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         These Terms will be governed by and construed in accordance with the laws of Pakistan and other supporting countries, without regard to its conflict of law provisions.
         </Text>
         
         <Text fontSize="30px"  fontWeight="bold" >
         12. Dispute Resolution
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         Any dispute arising out of or relating to these Terms will be resolved by binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration will be held in [City, State], and the decision of the arbitrator will be final and binding on both parties.
         </Text>


         <Text fontSize="30px"  fontWeight="bold" >
         13. Entire Agreement
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         These Terms constitute the entire agreement between you and us regarding your use of the Platform.
         </Text>
         <Text fontSize="30px"  fontWeight="bold" >
         14. Severability
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         If any provision of these Terms is held to be invalid or unenforceable, such provision will be struck and the remaining provisions will remain in full force and effect.
          </Text>

          <Text fontSize="30px"  fontWeight="bold" >
          15. Amendment
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         We may amend these Terms at any time by posting the amended terms on the Platform. You are responsible for checking the Terms periodically for updates. Your continued use of the Platform after the amended terms are posted constitutes your acceptance of the amended terms.
          </Text>

          <Text fontSize="30px"  fontWeight="bold" >
          16. Contact Us
         </Text>
         <Text fontSize="20px" fontWeight="bold" >
         If you have any questions about these Terms, please contact us at:
Canfree[Email Address]
          </Text>
       </Stack>


    
          </Box>
        

        </Dabba>
    
    </Container>
  )
}

export default PrivacyPolicy


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
    height: 3200px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border:1px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    
    `
