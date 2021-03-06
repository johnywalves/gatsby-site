import React from "react"

import CertCard from "components/CertCard"
import CertList from "components/CertList"
import Layout from "components/Layout"
import Seo from "components/seo"
import Strings from "components/strings"

const Certs = () => (
  <Layout>
    <Seo title={Strings.certification.title} />
    <CertList>
      {Strings.certification.list
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((cert, index) => (
          <CertCard key={index} index={index} {...cert} />
        ))}
    </CertList>
  </Layout>
)

export default Certs
