import Button from './Button';

const Hero = () => {
    return (
        <section className="relative h-[100vh] bg-[url('/roofing-hero.png')] bg-cover bg-left">
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20 z-[0]'></div>
            <div className='container mx-auto px-4 xl:px-0 flex justify-center items-center min-h-[100vh] pt-[60px] relative z-10'>
                <div className='flex-1'>
                    <h1 className='text-[94px] leading-[96px] text-primary font-bold '>
                        Your Awesome Roofing Website
                    </h1>
                    <p className='text-lg text-primary pt-6'>
                        Affordable, easy-to-use, and ready-made roofing website for your business
                        powered by Webexis.
                    </p>
                    <div className='mt-6'>
                        <Button href='/' size='normal' variant='full'>
                            Book Us Now
                        </Button>
                        <Button
                            href='/'
                            size='normal'
                            variant='outline'
                            className='ml-6 text-white'
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className='flex-1'></div>
            </div>
        </section>
    );
};

export default Hero;
