import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  let sameAs = [];
  socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .forEach((media) => {
      sameAs.push(media.link);
    });

  let mail = socialMediaLinks
    .find((media) => media.link.startsWith("mailto"))
    .link.substring("mailto:".length);
  let job = experience.sections
    ?.find((section) => section.work)
    ?.experiences?.at(0);

  let credentials = [];
  certifications.certifications.forEach((certification) => {
    credentials.push({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      url: certification.certificate_link,
      name: certification.title,
      description: certification.subtitle,
    });
  });
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    alternateName: [
      "Sandeep Kumar IITB",
      "Sandeep IITB",
      "Sandeep Choudhary",
      "Sandeep Choudhary IITB",
      "Sandeep Kumar Choudhary",
      "Sandeep Kumar Choudhary IITB",
      "Sandeep Kumar IIT Bombay",
      "Sandeep Choudhary IIT Bombay",
      "Sandeep Kumar Choudhary IIT Bombay",
    ],
    url: seo?.og?.url,
    image: `${seo?.og?.url}images/sandeep_profile_512.png`,
    email: mail,
    telephone: contactPageData.phoneSection?.subtitle,
    sameAs: sameAs,
    jobTitle: job.title,
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: job.company,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality,
      addressRegion: contactPageData.addressSection?.region,
      addressCountry: contactPageData.addressSection?.country,
      postalCode: contactPageData.addressSection?.postalCode,
      streetAddress: contactPageData.addressSection?.streetAddress,
    },
    knowsAbout: [
      "Computer Vision",
      "Medical Image Analysis",
      "Vision-Language Models",
      "Deep Learning",
      "Machine Learning",
      "CT MRI AI",
      "U-Net",
      "nnU-Net",
      "IIT Bombay",
    ],
    hasCredential: credentials,
  };
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta
        name="keywords"
        content="Sandeep Kumar, Sandeep Kumar IITB, Sandeep IITB, Sandeep Kumar IIT Bombay, Sandeep Choudhary, Sandeep Choudhary IITB, Sandeep Choudhary IIT Bombay, Sandeep Kumar Choudhary IITB, Sandeep Kumar Choudhary IIT Bombay, IIT Bombay, CMInDS, Medical Image Analysis, Computer Vision, Vision-Language Models, Deep Learning, CT MRI AI, U-Net, nnU-Net"
      />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={`${seo?.og?.url}icons/profile-og.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Sandeep47093149" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={`${seo?.og?.url}icons/profile-og.png`} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
