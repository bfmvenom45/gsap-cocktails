import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
const Hero = () => {

    const videoRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    // register GSAP plugins once for this module/component
    gsap.registerPlugin(SplitText, ScrollTrigger);

    useGSAP(() => {

        // GSAP animations for Hero can be added here
        const heroSplit =  new SplitText('.title', {type: 'chars, words'});
            const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});
            heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

            gsap.from(heroSplit.chars, {
                yPercent: 100,
                duration: 1.8,
                ease: 'expo.out',
                stagger: 0.06,
            });
            gsap.from(paragraphSplit.lines, {
                yPercent: 100,
                opacity: 0,
                ease: 'expo.out',
                stagger: 0.026,
                duration: 1.8,  
                delay: 1,
            });
            gsap.timeline({
                scrollTrigger: {
                    trigger: '#hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            }).to('.right-leaf', {
                y: 200
            }, 0).to('.left-leaf', {
                y: -200
            }, 0);

            const startValue  = isMobile ? 'top 50%' : 'center 60%';
            const endValue =  isMobile ? '120% top'  : 'bottom top';

            let tl = gsap.timeline({
                scrollTrigger: {
                    // use the actual video element as trigger (videoRef)
                    trigger: videoRef.current || "video",
                    start: startValue,
                    end: endValue,
                    scrub: true,
                    pin: true,
                },
            });

            // guard videoRef and wait for metadata before animating currentTime
            if (videoRef.current) {
                const onLoaded = () => {
                    tl.to(videoRef.current, {
                        currentTime: videoRef.current.duration,
                    });
                };
                // add listener and also try immediate call if metadata already available
                videoRef.current.addEventListener('loadedmetadata', onLoaded);
                if (videoRef.current.readyState >= 1) {
                    onLoaded();
                }
            }
    }, []);  

  return (
    <>
        <section id='hero' className='noisy'>
            <h1 className='title' > MOJITO</h1>
            <img 
                src='/images/hero-left-leaf.png'
                alt='left-leaf'
                className='left-leaf'
             />
              <img 
                src='/images/hero-right-leaf.png'
                alt='right-leaf'
                className='right-leaf'
             />
             <div className='body'>
                <div className='content'>
                    <div className="space-y-5  hidden md:block">
                        <p>Coll. Crisp. Classic.</p>
                        <p className='subtitle'>
                            Sip the Spirit <br/> of Summer
                        </p>
                    </div>
                    <div className='view-cocktails'>
                        <p className='subtitle'>
                            Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
                        </p>
                        <a href='#coctails' className='btn-primary mt-5 inline-block'>
                            View cocktails
                        </a>
                    </div>
                </div>
             </div>
            
        </section>
        <div className='video absolute inset-0'>
            <video 
                ref={videoRef}
                src='/videos/output.mp4'
                playsInline
                preload='auto'
                muted 
                className='w-full h-full object-cover'
            />

        </div>
    </>
  )
}

export default Hero