"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import SectionTitle from "../components/sectionTitle"

const shortsData = [
  {
    src: "/img/frozenfood.mp4",
    title:
      "Frozen Chicken shami kabab, Chicken Nuggets, Chicken Samosa, Chicken cheese balls",
    user: "@assafadelicacy",
  },
  {
    src: "/img/iftarkit.jpeg",
    title: "Mini Iftar Kit",
    user: "@assafadelicacy",
  },
  {
    src: "/img/iftarkitvid.mp4",
    title: "Kanji, Juice, Water, Dates",
    user: "@assafadelicacy",
  },
]

export default function ShortsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [videoKey, setVideoKey] = useState(0)

  const nextShort = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shortsData.length)
    setVideoKey((prevKey) => prevKey + 1) // Change key to force re-render
  }

  const prevShort = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shortsData.length - 1 : prevIndex - 1
    )
    setVideoKey((prevKey) => prevKey + 1) // Change key to force re-render
  }

  const isVideo = shortsData[currentIndex].src.endsWith(".mp4")

  useEffect(() => {
    if (isVideo) {
      const video = document.getElementById("shorts-video")
      if (video) {
        video.load() // Reload video to ensure smooth playback
        video.play()
      }
    }
  }, [currentIndex]) // Re-run when the index changes

  return (
    <div className='relative min-h-screen flex flex-col items-center'>
      <Head>
        <title>Homemade Ramadan Meal | Frozen Food | Get 20% Offer</title>
        <meta
          name='description'
          content='Best home cooked Ramadan meals delivery on curated Healthy diet at your Doorsteps'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <SectionTitle
        pretitle='call 9600052742'
        title='Readymade Frozen Foods & Mini iftar kits available at Chennai'
      />
      <div className='relative flex items-center justify-center w-full h-screen px-4'>
        {/* Left Arrow */}
        <button
          onClick={prevShort}
          className='absolute left-2 sm:left-4 inset-y-1/2 transform -translate-y-1/2 text-xl p-4 sm:p-2 rounded-full text-white z-50'
        >
          ◀
        </button>

        {/* Media Container */}
        <div className='relative w-[90%] max-w-[350px] h-[500px] flex flex-col items-center overflow-hidden rounded-xl border border-gray-700 shadow-lg'>
          {isVideo ? (
            <video
              key={videoKey} // Unique key forces re-render
              id='shorts-video'
              className='w-full h-full object-cover'
              controls
              autoPlay
              loop
            >
              <source src={shortsData[currentIndex].src} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              key={videoKey} // Force re-render on image change
              src={shortsData[currentIndex].src}
              alt={shortsData[currentIndex].title}
              layout='fill'
              objectFit='cover'
            />
          )}
          {/* Title & User Info */}
          <div className='absolute bottom-4 left-4 text-black bg-white px-3 py-1 rounded-md'>
            <p className='text-sm font-semibold'>
              {shortsData[currentIndex].user}
            </p>
            <p className='text-lg font-bold'>
              {shortsData[currentIndex].title}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextShort}
          className='absolute right-2 text-xl sm:right-4 inset-y-1/2 transform -translate-y-1/2  p-2 sm:p-2 rounded-full text-white z-50'
        >
          ▶
        </button>
      </div>
      <SectionTitle title='Areas we serve'>
        Mylapore, Triplicane, Royapettah, R A Puram, Thousand lights,
        Pattinambakkam, Mirsahibpet, Nandanam, Adyar, Santhome, Balagi nagar,
        Pattinapakkam, DR Mgr Janaki college, Alwarpet, Valleeswaran thottam,
        Chepauk, Gopalapuram, Anna salai, City center, Kailasapuram mylapore,
        Abhiramapuram, Teynapet, Ice house, Krishnampet, Vadapalani, T nagar,
        chepauk, velachery, sholinganalur, nungambakkam, villivakkam,
        ayanavaram, anna nagar, gopalapuram, thoraipakkam, tambaram, pallavaram,
        pammal,chrompet, perungalathur.
      </SectionTitle>
      <Footer />
    </div>
  )
}
