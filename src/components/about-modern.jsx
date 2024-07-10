import React from 'react'

function About() {
  return (
    <div class="clutter">
        <div class="wrapper">
            <section class="hero">
                <div class="inner">
                    <div class="clipper">
                        {/* <p><div className='pl-4 pt-4 text-3xl'>Boyes Innovations Group</div></p> */}
                    </div>
                    
                    <div class="animPanel">
                        {/* <p><div className='p-4 pl-8'>Professional IT Consulting Services</div></p> */}
                        <div className='m-10 pb-12'>
                            <a href="/Contact" class="readBtn primary">Request a Consultation</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="sidebar">
                <div className='p-8'>
                    <div class="clipper">
                        <p className='text-xl pb-4 lg:py-4'>About Us</p>
                    </div>
                    <div class="animPanel">
                        <div class="filter">
                            <p className="font-semibold text-sm">
                            Founded in January 2021, Boyes Innovations Group specializes in supporting non-profits and small to medium-sized businesses
                            with a variety of IT-related projects. Whether you lack a dedicated IT team or your current team is occupied with other tasks,
                                we are here to bridge the gap and ensure your IT projects are completed on time.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="subscribe">
                <div className='p-8'>
                    <div class="clipper">
                        <p className='text-xl pb-4'>Our Mission</p>
                    </div>
                    <div class="animPanel">
                    <p className="text-sm overflow-visible">
                            Boyes Innovations Group is dedicated to leveraging agile principles to develop innovative solutions for the most complex technological challenges. Our expertise spans a wide range of services, whether you need to replace an outdated system or enhance your current infrastructure. We are committed to understanding your unique requirements and delivering custom solutions that are perfectly tailored to meet your needs. At Boyes Innovations Group, our goal is to transform your technological landscape, ensuring it is efficient, modern, and primed for future growth.
                            </p>
                    </div>
                </div>
                <div className='md:hidden min-h-full'><p></p></div>
            </section>
        </div>
    </div>
  )
}

export default About