import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import { SocialMediaProfile } from '../constants/SocialMediaProfile'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I am Brian Wachira</title>
        <meta name="description" content="I build for the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container bg-[url('/images/landing-bg.svg')] -mt-28 bg-cover bg-no-repeat">
          <NavBar/>
        <div className="grid h-[calc(100vh)] mt-28">
          <div className="grid self-start"></div>
          <div className="grid-self-center mt-36 lg:px-20 container">
            <h3 className=' font-spartanExtraBold text-4xl stroke-text'>Brian Wachira</h3>
            <h5 className='font-spartanSemiBold text-2xl text-white my-4'>Software Engineer</h5>
            <div className="inline-flex">
              {SocialMediaProfile.map(profile => 
                <Link key={profile.name} href={profile.href} target="_blank" className='transition delay-150 duration-300 ease-in-out hover:scale-125'>
                  <img src={profile.icon} alt={profile.name} className=" mr-4"/>
                </Link>
                )}
            </div>
          </div>
          <div className="grid self-end lg:px-20 container">
            <div className="flex items-center my-8">
              <img src='/icons/arrow-down-icon.svg' alt='arrow-icon-down' className='animate-pulse mr-2'/>
              <span className=' text-xs font-spartanMedium text-pw-grey'>Scroll</span>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
