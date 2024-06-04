import React, { useEffect } from "react";
import { motion as m } from "framer-motion";

const TermsAndCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const useOfWebsitePoints = [
    {
      title: "LICENSE TO USE",
      description:
        "Upon accessing and using the One Ozo website, you are provided with a restricted, non-exclusive, and non-transferable license for employing the platform in compliance with the Terms of Use. This license is exclusively for personal or internal business purposes and does not bestow any rights for commercial exploitation.",
    },
    {
      title: "RESTRICTIONS",
      description:
        "You are prohibited from participating in any activities that might obstruct or disrupt the proper functioning of the website. This encompasses, but is not restricted to, efforts to obtain unauthorized access, use of automated tools or scripts, or involvement in any illegal or unethical behaviors.",
    },
    {
      title: "LINKING",
      description:
        "The website may encompass links to third-party websites for your convenience. However, One Ozo does not endorse these linked websites, and you navigate them at your own risk. These sites are employed for presenting informational data and industrial updates.",
    },
    {
      title: "REGISTRATION TERMS",
      points: [
        {
          title: "Eligibility",
          description:
            "By registering with One Ozo, you certify that you are of legal age and possess the legal capacity to enter into binding agreements. In the event of registering on behalf of a company, you must be duly authorized to act on its behalf.",
        },
        {
          title: "Accurate Information",
          description:
            "You consent to supplying accurate and comprehensive information during the registration process. It is your responsibility to promptly update your information in the event of any changes.",
        },
        {
          title: "Account Security",
          description:
            "The confidentiality of your account credentials, comprising the username and password, is solely your responsibility. Any activities conducted under your account are your liability.",
        },
        {
          title: "Prohibited Activities",
          description:
            "You pledge not to engage in any unauthorized or illegal activities while utilizing the One Ozo platform. This encompasses, but is not confined to, fraudulent activities, money laundering, or any actions that may contravene relevant laws or regulations.",
        },
        {
          title: "Verification Process",
          description:
            "As an element of the registration process, you might be called upon to undergo a verification procedure for confirming your identity. You concur to providing any requisite documentation or information for this purpose.",
        },
        {
          title: "Acceptance of Risks",
          description:
            "By registering with One Ozo, you acknowledge and accept the inherent risks associated with cryptocurrency and forex trading. You understand that trading entails the potential for financial losses and gains, and that previous performance is not indicative of future outcomes.",
        },
        {
          title: "Termination of Account",
          description:
            "One Ozo retains the prerogative to terminate or suspend your account at any time and for any reason, encompassing but not limited to the breach of these Terms of Use or engagement in suspicious activities.",
        },
      ],
    },
    {
      title: "CHARGES",
      points: [
        {
          title: "Fees Overview",
          description:
            "By utilizing One Ozo's platform and services, you acknowledge that specific charges and fees may apply to certain transactions and services rendered. These charges are subject to change and will be delineated in the most recent fee schedule accessible on the website. All charges and fees are expressed in the currency specified on the website.",
        },
        {
          title: "Third-Party Payment Processors",
          description:
            "For particular payment services, you may be directed to third-party payment processors. One Ozo is not accountable for the policies or practices of these third-party processors, and it is advisable to review their terms and conditions prior to proceeding with any payment.",
        },
      ],
    },
    {
      title: "INDEMNITY",
      description:
        "You consent to protect and indemnify One Ozo against any claims, losses, or liabilities that may arise from your infringement of these terms or any activity on the website conducted under your account.",
    },
    {
      title: "DATA ENTRY",
      description:
        "Any data you provide on the website may be retained by One Ozo in accordance with their Privacy Policy. This data is exclusively used for verification and operational purposes.",
    },
    {
      title: "LIMITATION OF LIABILITY",
      description:
        "One Ozo, or its associates, do not make any representations or warranties regarding the utilization or outcomes of using the website or any linked websites. We shall not be held liable for any errors or misrepresentations on the website, nor shall we be responsible for any losses or damages incurred through the utilization of the platform, including direct, indirect, consequential, or special losses, or loss of profits.",
    },
    {
      title: "AMENDMENTS",
      description:
        "One Ozo retains the right to alter these terms at any time without prior notice. Your continued usage of the website implies your acquiescence to the revised terms. Any modifications will be publicly disclosed solely if the amended terms affect any user or their associates in a specified manner pertaining to the operation of their accounts. All internal modifications will be made directly by the organization, and users can acknowledge the same from our policies.",
    },
    {
      title: "GOVERNING LAW",
      description:
        "These terms are subject to the jurisdiction's laws specified. Any disputes will be under the exclusive jurisdiction of the courts situated in that jurisdiction. In the event of multiple jurisdictions and arising disputes, users are recommended to contact the nearest office in their region for prompt resolution of their issues.",
    },
    {
      title: "CONTACT",
      description:
        "One Ozo actively engages in user interaction to establish comprehensive awareness and provide measures to protect yourself from adverse impacts that may affect your accounts, funds, user data, or device integrity. In any circumstance, users are advised to promptly reach out at support@oneozo.com to report the issue and obtain a swift solution.",
    },
  ];
  return (
    <m.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 1, easings: "easeInOut" },
      }}
      className="tnc-container my-20 px-6 mx-auto"
    >
      <m.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.75, easings: "easeInOut" },
        }}
        className="text-5xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
      >
        TERMS AND CONDITIONS
      </m.h1>
      <m.div
        className="bg-gradient-to-r from from-blue-600  via-purple-600 to-pink-300 w-1/2 h-[6px] mt-2  hidden md:block mx-auto"
        initial={{ x: -600, width: 0 }}
        animate={{ x: 0, width: "71%" }}
        transition={{ duration: 2, delay: 1.8 }}
      ></m.div>
      <m.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.75, easings: "easeInOut" },
        }}
        className="text-3xl font-semibold mb-6 mt-12"
      >
        TERMS OF USE
      </m.h2>
      <m.p
        initial={{ x: -50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, easings: "easeInOut" },
        }}
      >
        The One Ozo Terms of Use delineate the regulations and guidelines
        governing your usage of their website, www.oneozo.com. By accessing the
        website, you implicitly agree to adhere to these stipulations and
        conditions, alongside the Privacy Policy and other pertinent policies
        and notifications. If you dissent with any aspect of these terms, it is
        recommended that you abstain from visiting or utilizing the website.
      </m.p>
      <m.h2
        className="text-3xl font-semibold mb-6 mt-8"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.75, easings: "easeInOut" },
        }}
      >
        INTELLECTUAL PROPERTY RIGHTS
      </m.h2>
      <m.p
        initial={{ x: -50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, easings: "easeInOut" },
        }}
      >
        One Ozo's intellectual property rights encompass the lawful ownership
        and safeguarding of its non-material assets, encompassing but not
        limited to trademarks, logos, copyrights, patents, trade secrets, and
        proprietary software. As the exclusive proprietor and operator of One
        Ozo, the organization holds absolute rights to its intellectual
        property, preventing any unauthorized utilization, reproduction,
        distribution, or exploitation without express consent.
      </m.p>
      <m.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, easings: "easeInOut" },
        }}
        className="text-3xl font-semibold my-6"
      >
        USE OF WEBSITE
      </m.h2>
      {useOfWebsitePoints.map((section, index) => (
        <m.div
          key={index}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, easings: "easeInOut" },
          }}
        >
          <h2 className="text-3xl font-bold mb-4">{section.title}</h2>

          {section.description && <p className="mb-4">{section.description}</p>}

          {section.points &&
            section.points.map((point, pointIndex) => (
              <div key={pointIndex} className="mb-6">
                <h3 className="text-2xl font-medium mb-2">{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
        </m.div>
      ))}

      <p className="mt-8">
        The Terms of Use endeavor to preserve the integrity of the One Ozo
        website and safeguard the interests of both users and the organization.
        They ensure that users comprehend their rights and responsibilities when
        accessing the website, promoting a secure and equitable online
        environment.
      </p>
    </m.div>
  );
};

export default TermsAndCondition;
