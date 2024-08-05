import Head from 'next/head'
import React from 'react'
import Navbar from '../components/navbar'
import Biriyani from '../components/biriyani'

export default function EidBiriyani() {
  return (
    <div>
      <Head>
        <title>
          Assafa Delicacy Cloud kitchen serving Delicious high quality Biriyani
          for Bulk Orders from Chennai
        </title>
        <meta
          name="description"
          content="Book bulk biriyani order for Eid online. The minimum orders starts from 1 & 1/2 kilo ranging till 100 kg be it Mutton biriyani or chicken biriyani or egg biriyani"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.assafadelicacy.com/eid-biriyani"
        />
      </Head>
      <Navbar />
      <h1 className={`flex w-full flex-col mt-4 max-w-2xl`}>
        Order biriyani online
      </h1>
      <Biriyani />
    </div>
  )
}
