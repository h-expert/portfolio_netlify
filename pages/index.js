import Head from 'next/head'
WiSolarEclipse
import {WiSolarEclipse} from 'react-icons/wi'
// import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image'
import deved from '../public/dev-ed-wave.png'
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Freelancer Portfolio</title>
        <meta name="description" content="Développé par Hexpert" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className=' bg-white px-10 dark:bg-gray-900 md:px20 lg:px40' >
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-lg font-burtons flex items-center'>
              LE FREELANCER
            </h1>
            <ul className='flex items-center'>
              <li>
               <WiSolarEclipse onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-4xl md:text-5xl'/>
              </li>
              <li>
                <a className='font-burtons bg-gradient-to-r from-purple-900 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">CV</a>              
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 font-burtons'>
            <h2 className='text-3xl py-2 text-teal-600 dark:text-teal-400 md:text-6xl'>John Doe</h2>
            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>Web Designer & Developper.</h3>
            <p className='text-medium py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto'>
            Création et développement de site internet, d&apos;identité visuelle et de supports de communication.
            </p>
          </div>
          <div className=' text-5xl flex justify-center gap-16 py-3 text-teal-600 dark:text-gray-400'>
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillTwitterCircle />
            <AiFillYoutube />
          </div>
          <div className='relative bg-gradient-to-b mx-auto from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image  src={deved} className='relative mx-auto mt-10 w-36 h-45 md:h-90 md:w-72' alt=''/>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Mes Services</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Depuis le début de mon parcours en tant que designer indépendant et
              développeur, j&apos;ai travaillé à distance pour des
              <span className="text-teal-500"> entreprises </span>
              été conssultant pour des <span className="text-teal-500">startups </span>
              et collaboré avec des personnes talentueuses pour créer des produits numériques
              pour un usage professionnel et grand public.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            J&apos;offre une large gamme de <span className="text-teal-500">services</span>, y compris la <span className="text-teal-500">conception de marque</span>,
              la <span className="text-teal-500">programmation</span> et <span className="text-teal-500">l&apos;enseignement</span>.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 text-white dark:text-black bg-gray-900 dark:bg-white flex-1'>
              <Image src={design} width={100} height={100} className='mx-auto' alt=''/>
              <h3 className="text-lg font-medium pt-8 pb-2" >Superbe Design</h3>
              <p className="py-2">Créer des designs élégants adaptés à vos besoins.</p>
              <h4 className="py-4 text-teal-600">Outils de Design que j&aposutilise</h4>
              <p className="text-white dark:text-gray-800 py-1">Photoshop</p>
              <p className="text-white dark:text-gray-800 py-1">Illustrator</p>
              <p className="text-white dark:text-gray-800 py-1">Figma</p>
              <p className="text-white dark:text-gray-800 py-1">Indesign</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 text-white dark:text-black bg-gray-900 dark:bg-white flex-1'>
              <Image src={code} width={100} height={100} className='mx-auto' alt=''/>
              <h3 className="text-lg font-medium pt-8 pb-2" >Superbe Design</h3>
              <p className="py-2">Créer des designs élégants adaptés à vos besoins.</p>
              <h4 className="py-4 text-teal-600">Outils de Design que j&aposutilise</h4>
              <p className="text-white dark:text-gray-800 py-1">Photoshop</p>
              <p className="text-white dark:text-gray-800 py-1">Illustrator</p>
              <p className="text-white dark:text-gray-800 py-1">Figma</p>
              <p className="text-white dark:text-gray-800 py-1">Indesign</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 text-white dark:text-black bg-gray-900 dark:bg-white flex-1'>
              <Image src={consulting} width={100} height={100} className='mx-auto' alt=''/>
              <h3 className="text-lg font-medium pt-8 pb-2" >Superbe Design</h3>
              <p className="py-2">Créer des designs élégants adaptés à vos besoins.</p>
              <h4 className="py-4 text-teal-600">Outils de Design que j&aposutilise</h4>
              <p className="text-white dark:text-gray-800 py-1">Photoshop</p>
              <p className="text-white dark:text-gray-800 py-1">Illustrator</p>
              <p className="text-white dark:text-gray-800 py-1">Figma</p>
              <p className="text-white dark:text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Depuis le début de mon parcours en tant que designer indépendant et
              développeur, j&aposai travaillé à distance pour des
              <span className="text-teal-500"> entreprises </span>
              été conssultant pour des <span className="text-teal-500">startups </span>
              et collaboré avec des personnes talentueuses pour créer des produits numériques
              pour un usage professionnel et grand public.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            J&aposoffre une large gamme de <span className="text-teal-500">services</span>, y compris la <span className="text-teal-500">conception de marque</span>,
              la <span className="text-teal-500">programmation</span> et <span className="text-teal-500">l&aposenseignement</span>.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="shadow-lg p-10 rounded-xl object-cover bg-black dark:bg-white flex-1"
                width={"100%"}
                height={"100%"}
                responsive
                src={web1}
                alt=''
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="shadow-lg p-10 rounded-xl object-cover bg-black dark:bg-white flex-1"
                width={"100%"}
                height={"100%"}
                responsive
                src={web2}
                alt=''
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="shadow-lg p-10 rounded-xl object-cover bg-black dark:bg-white flex-1"
                width={"100%"}
                height={"100%"}
                responsive
                src={web3}
                alt=''
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="shadow-lg p-10 rounded-xl object-cover bg-black dark:bg-white flex-1"
                width={"100%"}
                height={"100%"}
                responsive
                src={web4}
                alt=''
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="shadow-lg p-10 rounded-xl object-cover bg-black dark:bg-white flex-1"
                width={"100%"}
                height={"100%"}
                responsive
                src={web5}
                alt=''
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="shadow-lg p-10 rounded-xl object-cover bg-black dark:bg-white flex-1"
                width={"100%"}
                height={"100%"}
                responsive
                src={web6}
                alt=''
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
