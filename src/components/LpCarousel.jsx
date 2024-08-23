import React from 'react'
import "../index.css"
import googleLogo from '../icons/google logo.png'
import Reviewers from '../reviewer'
import { IoIosStar } from "react-icons/io";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const LpCarousel = () => {
  return (
<Carousel>
{Reviewers.map((reviewer)=>(
    <CarouselItem  reviewer={reviewer}/>
))}
</Carousel>

);
}
function CarouselItem({reviewer}){
    return(
        
        <div className='parent p-4 w-4/5 mx-auto'>
        <div className="slider-con">
            <h2 className='text-4xl'>Reviews</h2>
            <p className='text-lg'>What people says about Golobe facilites.</p>
        </div>
        <Paper className="slider-card-row flex justify-evenly  mt-8">
        

            <div className="slider-card max-w-md p-8 shadow  rounded-3xl">
                <h2 className='text-3xl mb-8'>{reviewer.revHead}</h2>
                <p className='text-xl text-gray-500'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..</p>
                <div className="view-more-btn flex justify-end">
                <Button className='font-semibold'>View more</Button>
                </div>

                <div className="stars text-2xl mb-4 text-yellow-300 flex"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                <h3 className='text-3xl'>{reviewer.name}</h3>
                <p className='text-gray-500 font-semibold mb-2'>Weave Studios - Kai Tak</p>
                <img className='mb-8' src={googleLogo} alt="google logo" />
                <img className='w-full' src={reviewer.img} alt="places" />
            </div>
        

        </Paper>
        </div>
  )
}

export default LpCarousel