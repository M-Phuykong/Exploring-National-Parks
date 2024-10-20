/**
 * Renders the home page of the application.
 * @component
 * @module HomePage
 * @returns {JSX.Element} The rendered home page component.
 */
import React from 'react'
import Welcome from './HomePage/Components/Welcome'
import Buttons from './HomePage/Components/Buttons'
import './Style/homepage.css'
import HighlightGallery from './HomePage/Components/HighlightGallery';
import styles from "./index.css"


import { Link } from 'react-router-dom'

const Section = (props) =>{
  return (
    <section className = "p-2 mx-36 bg-white rounded-md text-black bg-stone-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100">
      {props.children}
    </section>
  )
}

const LearnMoreSection = (props) => {
  return (
    <Section>
      <div className='flex flex-col m-10 text-center justify-center justify-items-center'>
        <h2
        className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
          Learn More About Parks
        </h2>
        <Link to='/ParkSearch'
        className="flex w-fit place-self-center items-center gap-2 bg-white rounded-full shadow-sm text-md text-indigo-600 font-semibold py-4 px-8 transition-all duration-500">
          Park Search
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
              stroke="#4F46E5"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
    </Section>
  )
}

const PlanTripSection = (props) => {
  return (
    <Section>
      <div className='flex flex-col  m-10 text-center justify-center gap-4 '>
        <h2
          className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
        >
          Ready for an Adventure?
        </h2>
        <Link to='/ParkPlan'
        className="flex w-fit place-self-center items-center gap-2 bg-white rounded-full shadow-sm text-md text-indigo-600 font-semibold py-4 px-8 transition-all duration-500">
          Plan a Trip
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
              stroke="#4F46E5"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>

      </div>
    </Section>
  )
}


const HomePage = () => {
  return (
    <div className = "home-page main-component flex flex-col gap-10 mb-10">
        <Welcome/>
        <HighlightGallery/>
        <LearnMoreSection />
        <PlanTripSection />
    </div>
  )
}

export default HomePage