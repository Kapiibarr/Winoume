import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import ChooseCategory from '../components/ChooseCategory/ChooseCategory'


export const Main = () => {
  return (
    <div>
      <ChooseCategory/>
      <Hero/>
      <Popular/>
    </div>
  )
}
export default Main