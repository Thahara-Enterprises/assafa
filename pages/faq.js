import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import SectionTitle from '../components/sectionTitle'
import Faq from '../components/faq'
import Cta from '../components/cta'

export default function faq() {
  return (
    <div>
      <Navbar/>
      <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>
      <Faq />
      <Cta />
      <Footer/>
    </div>
  )
}
