import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import { FiDivideSquare } from "react-icons/fi";

const sections = [
  {
    title: "INFORMATION COLLECTION",
    description:
      "We collect various types of personal data to provide and enhance our services, encompassing contact information (e.g., name, email address, phone number, and address), login details (such as usernames and passwords), financial particulars (e.g., payment information), and more. We ensure the security of this data through robust encryption and comprehensive protective measures.",
    points: [
      {
        title: "Contact Information",
        description:
          "When users register accounts or interact with our services, we collect contact information like names, email addresses, phone numbers, and postal addresses. This information is vital for communication and account management.",
      },
      {
        title: "Login Information",
        description:
          "To ensure secure access to user accounts, we collect login information, including usernames, Connect IDs, and encrypted passwords. This assists in verifying user identity and thwarting unauthorized access.",
      },
      {
        title: "Financial Details",
        description:
          "Some services necessitate users to provide their date of birth for verification, particularly in compliance with legal and regulatory requisites.",
      },
      {
        title: "Date of Birth",
        description:
          "When users register accounts or interact with our services, we collect contact information like names, email addresses, phone numbers, and postal addresses. This information is essential for communication and account management.",
      },
      {
        title: "KYC Verification",
        description:
          "In accordance with Know Your Customer (KYC) protocols, we may gather supplementary information, like passports, personal IDs, and utility bills, to validate our users' identities.",
      },
      {
        title: "Website Usage Data",
        description:
          "Through the utilization of cookies and similar technologies, we may collect non-personal information, such as IP addresses, browser types, operating systems, and device information. This data helps us enhance website functionality and elevate user experience.",
      },
      {
        title: "Communication Preferences",
        description:
          "Users have the option to specify communication preferences, such as opting in or out of marketing communications. This allows us to tailor our communications to user preferences.",
      },
      {
        title: "Performance and Transaction Data",
        description:
          "We collect data related to user transactions, account activity, and portfolio performance. This aids users in tracking their investment progress and making well-informed decisions.",
      },
      {
        title: "Feedback and Support Data",
        description:
          "When users contact our support team or provide feedback, we may collect pertinent information to address inquiries and enhance our services.",
      },
    ],
  },
  {
    title: "USE OF PERSONAL DATA",
    description:
      "At One Ozo, we employ the personal data provided by our users for distinct purposes to deliver a seamless and secure trading experience.",
    points: [
      {
        title: "Account Management",
        description:
          "Personal data is employed to create and manage user accounts. This includes contact information like names, email addresses, and phone numbers, which enables us to convey vital account-related updates and provide personalized support.",
      },
      {
        title: "Identity Verification",
        description:
          "To meet regulatory requirements and assure platform security, personal data, such as passports, IDs, and utility bills, may be utilized to verify users' identities during the Know Your Customer (KYC) process.",
      },
      {
        title: "Transaction Processing",
        description:
          "Financial particulars, such as bank account or credit card numbers, are utilized to facilitate transactions and securely process payments when users make deposits or withdrawals on our platform.",
      },
      {
        title: "Performance and Portfolio Tracking",
        description:
          "User data connected to transactions, account activity, and portfolio performance is utilized to monitor investment progress and offer valuable insights for informed decision-making.",
      },
      {
        title: "Service Improvement",
        description:
          "Anonymous and aggregated data, such as website usage data and analytical information, is harnessed to enhance our services, improve user experience, and identify areas for optimization.",
      },
      {
        title: "Legal Compliance",
        description:
          "Personal data may be used to comply with legal obligations and regulations, including anti-money laundering (AML) and counter-terrorism financing (CTF) laws, ensuring a safe and compliant trading environment.",
      },
      {
        title: "Security Measures",
        description:
          "Personal data plays a crucial role in implementing security measures, such as two-factor authentication (2FA) and advanced encryption techniques, to protect user accounts and prevent unauthorized access.",
      },
      {
        title: "DATA MANAGEMENT",
        description:
          "Understanding the sensitivity of user data and the importance of maintaining its confidentiality, we have a stringent data sharing policy in place to ensure responsible and secure handling of user information.",
        points: [
          {
            title: "Limited Data Sharing",
            description:
              "We do not sell, rent, or trade user data to third parties for marketing purposes. Data sharing is strictly limited to necessary business operations and compliance with legal requirements.",
          },
          {
            title: "Trusted Entities",
            description:
              "In some cases, we may share user data with trusted entities within the One Ozo group for legitimate business purposes. This includes subsidiaries, affiliated companies, or partners working on behalf of One Ozo to deliver services.",
          },
          {
            title: "Service Providers and Legal Entities",
            description:
              "We may engage reputable third-party service providers to support our operations. These service providers are carefully vetted and bound by strict confidentiality agreements. In accordance with applicable laws and regulations, we may share user data with government authorities or regulatory bodies when required.",
          },
        ],
      },
      {
        title: "DATA SECURITY POLICY BY ONE OZO",
        description:
          "The security of user data is of paramount importance at One Ozo. We employ a multi-layered approach to data security, incorporating robust measures to safeguard user information from unauthorized access, disclosure, or alteration.",
        points: [
          {
            title: "Encryption",
            description:
              "All sensitive user data, including personal and financial information, is encrypted using industry-standard encryption protocols during transmission and storage.",
          },
          {
            title: "Secure Access Controls",
            description:
              "Access to user data is limited to authorized personnel who require it for specific legitimate purposes. Strong access controls, including role-based access, are implemented to prevent unauthorized access.",
          },
          {
            title: "Firewalls and Intrusion Detection Systems (IDS)",
            description:
              "Our network is protected by firewalls and IDS to monitor and prevent unauthorized access attempts and cyber threats.",
          },
        ],
      },
      {
        title: "DATA RETENTION POLICY BY ONE OZO",
        description:
          "We retain user data only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal requirements.",
        points: [
          {
            title: "Data Minimization",
            description:
              "We collect and retain only the minimum amount of data required to provide our services and fulfill our legal obligations.",
          },
          {
            title: "Deletion of Outdated Data",
            description:
              "We regularly review and delete outdated or no longer needed user data to ensure data accuracy and compliance with data protection principles.",
          },
          {
            title: "Legal Obligations",
            description:
              "In some cases, we may be required by law to retain certain user data for a specified period.",
          },
        ],
      },
    ],
  },
  {
    title: "DATA MANAGEMENT",
    description:
      "Understanding the sensitivity of user data and the importance of maintaining its confidentiality, we have a stringent data sharing policy in place to ensure responsible and secure handling of user information.",
    points: [
      {
        title: "Limited Data Sharing",
        description:
          "We do not sell, rent, or trade user data to third parties for marketing purposes. Data sharing is strictly limited to necessary business operations and compliance with legal requirements.",
      },
      {
        title: "Trusted Entities",
        description:
          "In some cases, we may share user data with trusted entities within the One Ozo group for legitimate business purposes. This includes subsidiaries, affiliated companies, or partners working on behalf of One Ozo to deliver services.",
      },
      {
        title: "Service Providers and Legal Entities",
        description:
          "We may engage reputable third-party service providers to support our operations. These service providers are carefully vetted and bound by strict confidentiality agreements. In accordance with applicable laws and regulations, we may share user data with government authorities or regulatory bodies when required.",
      },
    ],
  },
  {
    title: "DATA SECURITY POLICY BY ONE OZO",
    description:
      "The security of user data is of paramount importance at One Ozo. We employ a multi-layered approach to data security, incorporating robust measures to safeguard user information from unauthorized access, disclosure, or alteration.",
    points: [
      {
        title: "Encryption",
        description:
          "All sensitive user data, including personal and financial information, is encrypted using industry-standard encryption protocols during transmission and storage.",
      },
      {
        title: "Secure Access Controls",
        description:
          "Access to user data is limited to authorized personnel who require it for specific legitimate purposes. Strong access controls, including role-based access, are implemented to prevent unauthorized access.",
      },
      {
        title: "Firewalls and Intrusion Detection Systems (IDS)",
        description:
          "Our network is protected by firewalls and IDS to monitor and prevent unauthorized access attempts and cyber threats.",
      },
    ],
  },
  {
    title: "DATA RETENTION POLICY BY ONE OZO",
    description:
      "We retain user data only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal requirements.",
    points: [
      {
        title: "Data Minimization",
        description:
          "We collect and retain only the minimum amount of data required to provide our services and fulfill our legal obligations.",
      },
      {
        title: "Deletion of Outdated Data",
        description:
          "We regularly review and delete outdated or no longer needed user data to ensure data accuracy and compliance with data protection principles.",
      },
      {
        title: "Legal Obligations",
        description:
          "In some cases, we may be required by law to retain certain user data for a specified period.",
      },
    ],
  },
  // ... Complete for all sections like DATA MANAGEMENT, DATA SECURITY POLICY BY ONE OZO, etc. ...
  {
    title: "EXTERNAL LINKS",
    description:
      "At One Ozo, we endeavor to provide our users with valuable and pertinent information. In line with our dedication to transparency and user experience, we have an external link policy in place to ensure users understand the implications of clicking on external links present on our platform.",
    points: [
      {
        title: "Third-Party Websites",
        description:
          "Our website may contain links to third-party websites, including educational resources, news articles, or other relevant content. These links are provided for informational purposes and to enhance user knowledge about the financial and investment landscape.",
      },
      {
        title: "No Endorsement",
        description:
          "The presence of external links on our platform does not imply any endorsement or affiliation with the linked websites. One Ozo is not responsible for the content, practices, or policies of these third-party websites.",
      },
      {
        title: "User Discretion",
        description:
          "Users are advised to exercise caution and use their discretion when clicking on external links. Each linked website may have its own privacy policy, terms of service, and information collection practices, which may differ from those of One Ozo.",
      },
      {
        title: "Limited Liability",
        description:
          "While we strive to provide only reputable and relevant links, we cannot guarantee the accuracy, safety, or authenticity of the content on external websites. Users visit external links at their own risk.",
      },
    ],
  },
  {
    title: "CHANGES TO PRIVACY POLICY",
    description:
      "We reserve the right to update this Privacy Policy as needed. Any changes will be effective upon posting, and we encourage you to review this policy regularly. Changes made will be effective retrospectively and will apply uniformly to all parties associated with One Ozo.",
    points: [
      {
        title: "Notification Process for Changes",
        description:
          "Whenever we make updates or changes to our Privacy Policy, we will provide a clear notice on our website. This notice may appear as a pop-up notification, a banner, or a dedicated section informing users about the revised Privacy Policy.",
      },
      {
        title: "Effective Date",
        description:
          "The notice will include the effective date of the revised Privacy Policy, indicating when the changes will take effect. This allows users to be aware of the timeline for implementation.",
      },
      {
        title: "Review Opportunity",
        description:
          "Users will have the opportunity to review the updated Privacy Policy and understand the modifications made. We encourage users to carefully read the revised policy to comprehend how their data will be collected, used, managed, and protected.",
      },
      {
        title: "Consent and Acceptance",
        description:
          "By continuing to use our services after the updated Privacy Policy becomes effective, users are acknowledging and accepting the changes made to the policy. If users do not agree with the updated policy, they have the option to discontinue their use of our services.",
      },
    ],
  },
  {
    title: "YOUR RIGHTS",
    description:
      "You have the right to access, correct, or delete your personal data. If you wish to exercise these rights or seek further assistance, please contact us at support@oneozo.com. Thank you for entrusting us with your personal data. At One Ozo, we are committed to maintaining the confidentiality and security of your information while delivering exceptional services.",
  },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacy-policy-container mt-20 mb-20 px-6 text-justify">
      <m.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.75, easings: "easeInOut" },
        }}
        className="text-4xl font-bold mb-6 text-center text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
      >
        PRIVACY POLICY
      </m.h1>
      <m.div
        className="flex bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-5/6 md:w-1/4 h-[6px] mb-3 mx-auto" // Added mx-auto to center the line
        initial={{ x: -100, opacity: 1 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            // ease: "anticipate",
            delay: 0.5,
          },
        }}
      ></m.div>
      <p className="my-6 px-3">
        At One Ozo, we recognize the utmost importance of transparency and the
        protection of user data. We highly value your privacy and treat the
        safeguarding of your personal information with the utmost seriousness.
        This Privacy Policy delineates how we gather, utilize, manage, and
        safeguard your data in accordance with data protection regulations. By
        using our services, you express your agreement with the terms detailed
        in this policy.
      </p>

      <p className="mb-6 px-3">
        This privacy policy conforms to the rules and regulations under the
        auspices of One Ozo Limited, registered in the USA under License No.
        15858435 with The Registrar of Companies for England and Wales. The
        company's address is 639 HELENA AVE HELENA, MT 59601, Helena, MT, United
        States, Montana
      </p>

      <m.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.75, easings: "easeInOut" },
        }}
        className="text-xl mb-6 max-w-screen-xl mx-auto text-justify"
      >
        {sections.map((section, index) => (
          <m.div
            key={index}
            className="mb-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.75, easings: "easeInOut" },
            }}
          >
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>

            {section.description && (
              <p className="mb-4">{section.description}</p>
            )}

            {section.points &&
              section.points.map((point, pointIndex) => (
                <div key={pointIndex} className="mb-6">
                  <h3 className="text-2xl font-medium mb-2">{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              ))}
          </m.div>
        ))}
      </m.div>

      <p className="mb-6">
        Thank you for entrusting us with your personal data. At One Ozo, we are
        committed to maintaining the confidentiality and security of your
        information while delivering exceptional services.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
