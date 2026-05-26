import AnimatedHeader from '@/components/common/AnimatedHeader'
import Container from '@/components/common/Container'
import CTAButton from '@/components/common/CTAButton'
import React from 'react'

const ReadyToStart = () => {
  return (
    <section className='border-0 border-b border-gray-200'>
      <Container className='bg-black/10 py-10 font-sans overflow-hidden'>
        {/* CTA SECTION */}
        <div className="text-center">
            {/* <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6">
              Ready to Start Investing?
            </h2>
            <p className="text-lg md:text-[22px] font-light text-gray-300 max-w-2xl mx-auto">
              Join thousands of investors who trust us with their wealth creation journey
            </p> */}

             <AnimatedHeader 
                      title="Ready to Start Investing?"
                      highlight='Start Investing'
                      highlightColor="#8B0000"
                      subheading=" Join thousands of investors who trust us with their wealth creation journey"
                      variant="light"
                      className='mb-7  text-h3 text-black'
                      subheadingClassName='text-body-lg tracking-wide text-black'
                    />
          <div className="flex justify-center">
            <CTAButton
              href="/invest"
              text="Invest With Us"
              variant="light"
              iconClassName="invert"
            />
          </div>

        </div>
        
      </Container>
    </section>
  )
}

export default ReadyToStart