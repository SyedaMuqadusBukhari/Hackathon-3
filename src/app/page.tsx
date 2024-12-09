'use client';

import Image from 'next/image';
import React, { FC } from 'react';


// import React from 'react'
import Hero from './componenets/Hero'
import AbountUs from './componenets/AbountUs'
import FoodCategory from './componenets/FoodCategory'
import Items from './componenets/Items'
import MeetShef from './componenets/MeetShef'
import MenuItem from './componenets/MenuItem'
import RestaurantActive from './componenets/RestaurantActive'
import Blog from './componenets/Blog'
import Testimonials from './componenets/Testimonials';

// import ExtraTaste from './components/ExtraTaste'





function page() {
  return (
<>    
    
    

    <Hero />
    <AbountUs />
    <FoodCategory />
    {/* <ExtraTaste /> */}
    <Items />

    <MenuItem />
    <MeetShef />
    
    <Testimonials />
    <RestaurantActive />
    <Blog />
    
  </>
  )
}

export default page