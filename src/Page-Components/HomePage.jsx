// Grid version 2
import Grid from '@mui/material/Grid';
import jumboTronStyles from "./HomePage.module.css";

import { motion, useInView, useAnimation, useMotionValue, useTransform, animate } from "framer-motion"
import Typewriter from "typewriter-effect";
import { Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import myColors from '../assets/Util/myColors';
import whiteOrangeTruck from '../assets/images/truck-white-orange.jpg'

import truckVector from '../assets/images/truck-vector.jpeg'



const HomePage = () => {

    const truckImg = useRef(null);
    const truckImgIsInView = useInView(truckImg)

    const truckControls = useAnimation()

    const truckVariants = {
        //hidden: { x:-100, opacity: 0 },
        hidden: { x: 100 },
        visible: { x: 50 }

    }

    // useEffect(() => {
    //     if (truckImgIsInView) {
    //         truckControls.start("visible")
    //     }
    // }, [truckImgIsInView])

    const imageStyles = {
        borderRadius: '25%',
        height: '15rem',
        width: '30rem'

    }



    const typeOutString = `Bridge the gap between shippers and carriers with seamless connectivity.`

    // const strArr = typeOutString.split('');


    // const count = useMotionValue(0);

    // const newValue = useTransform(count, [0, 1], [0, 100])
    // // When `count` goes from `0` to `1`, I want `newValue` to go from `0` to `100`.

    // const rounded = useTransform(count, (latest) => Math.round(latest));
    // const displayText = useTransform(rounded, (latest) =>
    //     typeOutString.slice(0, latest)
    // );


    // useEffect(() => {
    //     const controls = animate(count, typeOutString.length, {
    //         type: "tween", // Not really needed because adding a duration will force "tween"
    //         duration: 1,
    //         ease: "easeInOut",
    //     });
    //     return controls.stop;
    // }, []);

    const laptopHeroSection = <>
        <Grid container pb={3} sx={{

            backgroundImage: `url(${whiteOrangeTruck})`
        }
        } className={jumboTronStyles.jumboTron} xs={12}>

            {/* <Grid container xs={12}>

    <Grid item ref={headingRef} xs={12}>


        <motion.div
            variants={hedingAnimationVariants}
            initial='hidden'
            animate={headingControls}
            transition={{
                duration: 0.5
            }}

        >
            <Typography mt={3} textAlign={'center'} variant='h4'>
                What is Open Logistics....?
            </Typography>


        </motion.div>
    </Grid>

</Grid> */}


         <Grid container p={{
                xs: 4,
                md: 9
            }} pl={{
                xs: 0,
                md: 13
            }} justifyContent={'start'} >

                <Grid item xs={11} md={5}>
                    <Typography id='autoType' sx={{

                        color: myColors.textBlue
                        
                    }} m={0} variant='h4'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay(50)
                                    .typeString(typeOutString)
                                    .start()
                                    .callFunction(() => {
                                        truckControls.start('visible')
                                    })
                            }}
                        />
                    </Typography>
                </Grid>
                {/* <Grid item xs={11} md={5}>

                    <motion.div
                        variants={truckVariants}
                        initial='hidden'
                        animate={truckControls}
                        transition={{
                            duration: 1
                        }}

                    >
                        


                        <img src={truckVector} style={imageStyles} />
                    </motion.div>


                </Grid> */}
            </Grid> 
        </Grid>

    </>

    return <>
        <Grid container>
            {/* 
            <Grid container  className={jumboTronStyles.jumboTron} xs={12}>
                <Typography p={2} sx={{
                    
                    color: myColors.textBlack
                }} m={0} variant='h6'>
                    {typeOutString}
                </Typography>

            </Grid> */}

            {laptopHeroSection}






        </Grid>
    </>
}

export default HomePage;