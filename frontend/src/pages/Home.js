import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import images from '../utils/importImages'
// import mainLogo from '../assets/images/logo.svg';
import React, { useEffect, useRef } from 'react';
import MethodologiesSection from './MethodologiesSection';




const Home = () => {

  const myElementRef = useRef(null);
  const cv = `${process.env.PUBLIC_URL}/CV_Resume.pdf`;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/script.js`;
    script.async = true;
    document.body.appendChild(script);

    

    script.onload = () => {
      // Your script runs automatically, no need to call any function here
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

    return (  
        <div class="body-wrap">
        <header class="site-header">
            <div class="container">
                <div class="site-header-inner">
                    <div class="brand header-brand">
                        <h1 class="m-0">
							<a href="#">
                            <img class="header-logo-image" src={images['logo_rama.svg']} alt="Logo" style={{height: "70px"}}/>
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section class="hero mb-[200px]">
                <div class="container">
                    <div class="hero-inner">
						<div class="hero-copy">
	                        <h1 class="hero-title mt-0 mb-0">MOH. RAMADAN</h1>
                            <h4 class="mt-0 mb-32">Quality Assurance Analyst</h4>
	                        <p class="hero-paragraph mb-[30px]">I am a QA Analyst with over two years of experience in software quality. With strong verbal and written communication skills, i am capable of explaining complex software issues in easy-to-understand terms.</p>
	                        <div class="flex flex-col h-auto w-[440px] m-auto items-center xl:flex-row xl:m-0">
                                <a class="button button-primary justify-between w-[250px] mb-[15px] xl:mb-0 xl:mr-[10px]" href={cv} download="MOH. RAMADAN - CV.pdf">Download CV <FontAwesomeIcon className='ml-[15px] h-[15px] text-white' icon="fa-solid fa-download" /></a>
                                <div className='flex items-center justify-center w-[450px] h-[48px] bg-red-0'>
                                    <div className='group flex justify-center items-center w-[45px] h-[45px] mx-[7px] rounded-full bg-transparent border-2 border-[#5b43f4]'>
                                        <div className='flex justify-center items-center w-[0px] h-[0px] rounded-full bg-[#5b43f4] relative group-hover:w-[40px] group-hover:h-[40px] duration-500'>
                                            <a className='flex w-auto h-auto m-0 p-0 justify-center items-center' href="https://api.whatsapp.com/send?phone=6281945599109" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon className='mx-[10px] h-[25px] text-[#5b43f4] group-hover:text-white duration-300' icon="fa-brands fa-whatsapp" />
                                                {/* <img className='mx-[10px] h-[50px] text-[#5b43f4] group-hover:text-white duration-300' src={images['wa.svg']} alt="" /> */}
                                            </a>
                                        </div>
                                    </div>
                                    <div className='group flex justify-center items-center w-[45px] h-[45px] mx-[7px] rounded-full bg-transparent border-2 border-[#5b43f4]'>
                                        <div className='flex justify-center items-center w-[0px] h-[0px] rounded-full bg-[#5b43f4] relative group-hover:w-[40px] group-hover:h-[40px] duration-500'>
                                            <a className='flex w-auto h-auto m-0 p-0 justify-center items-center' href="#">
                                                <FontAwesomeIcon className='mx-[10px] h-[22px] text-[#5b43f4] group-hover:text-white duration-300' icon="fa-brands fa-facebook" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='group flex justify-center items-center w-[45px] h-[45px] mx-[7px] rounded-full bg-transparent border-2 border-[#5b43f4]'>
                                        <div className='flex justify-center items-center w-[0px] h-[0px] rounded-full bg-[#5b43f4] relative group-hover:w-[40px] group-hover:h-[40px] duration-500'>
                                            <a className='flex w-auto h-auto m-0 p-0 justify-center items-center' href="#">
                                                <FontAwesomeIcon className='mx-[10px] h-[22px] text-[#5b43f4] group-hover:text-white duration-500' icon="fa-brands fa-twitter" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='group flex justify-center items-center w-[45px] h-[45px] mx-[7px] rounded-full bg-transparent border-2 border-[#5b43f4]'>
                                        <div className='flex justify-center items-center w-[0px] h-[0px] rounded-full bg-[#5b43f4] relative group-hover:w-[40px] group-hover:h-[40px] duration-500'>
                                            <a className='flex w-auto h-auto m-0 p-0 justify-center items-center' href="https://www.linkedin.com/in/moh-ramadan-a26453264" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon className='mx-[10px] h-[22px] text-[#5b43f4] group-hover:text-white duration-500' icon="fa-brands fa-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='group flex justify-center items-center w-[45px] h-[45px] mx-[7px] rounded-full bg-transparent border-2 border-[#5b43f4]'>
                                        <div className='flex justify-center items-center w-[0px] h-[0px] rounded-full bg-[#5b43f4] relative group-hover:w-[40px] group-hover:h-[40px] duration-500'>
                                            <a className='flex w-auto h-auto m-0 p-0 justify-center items-center' href="https://github.com/MohRamadan24" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon className='mx-[10px] h-[22px] text-[#5b43f4] group-hover:text-white duration-500' icon="fa-brands fa-github" />
                                            </a>
                                        </div>
                                    </div>        
                                </div>
                            </div>
						</div>
						<div class="hero-figure anime-element" ref={myElementRef}>
							<svg class="placeholder" width="528" height="396" viewBox="0 0 528 396">
								<rect width="528" height="396" style={{fill:"transparent"}} />
							</svg>
							<div class="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                            {/* <div class="hero-figure-box hero-figure-box-11" data-rotation="45deg"></div> */}
							<div class="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
							<div class="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
							<div class="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
							{/* <div class="hero-figure-box hero-figure-box-05"></div> */}
							<div class="hero-figure-box hero-figure-box-06">
                            </div>
							<div class="hero-figure-box hero-figure-box-07"></div>
                            <div class="hero-figure-box hero-figure-box-17"></div>
							<div class="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
							<div class="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
							<div class="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
						</div>
                    </div>
                </div>
            </section>
            <section className='mb-[150px]'>
                <div className='flex flex-col w-auto h-auto bg-[#1E2025] mx-auto'>
                    <div className='h-auto w-auto w-max-[1200px] bg-transparent mx-auto px-[20px] xl:px-[40px]'>
                        <div className='h-auto w-fit xl:max-w-[1000px] xl:w-auto mx-auto mb-[100px] xl:mb-[50px]'>
                            <img className='w-auto h-[70px]' src={images['SERVICES.svg']} alt="" />
                            <p className='text-2xl leading-[70px] font-extrabold text-[#FBFCFF] mt-[-70px] ml-[5px] mb-0 text-center xl:text-left'>My Services</p>
                        </div>
                        <div className='flex flex-wrap h-auto max-w-[1200px] bg-transparent mx-auto justify-center'>
                            <div className='flex xl:block h-auto w-[350px] xl:w-[320px] px-[30px] py-[20px] xl:py-[30px] mx-[10px] mb-[20px] bg-[#25282F]'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon className='h-[45px] text-[#5b43f4] pr-[20px] xl:pr-0 group-hover:text-white duration-500 mb-[10px]' icon="fa-brands fa-twitter" />
                                </div>
                                <div>
                                    <p className='text-white font-extrabold text-xs xl:text-sm leading-4 mb-[10px]'>3D Assets Design</p>
                                    <p className='text-[#b1bed6] font-medium text-[0.6rem] xl:text-[0.72rem] mb-0 leading-relaxed'>Kuburan gang 1 shaf ke-5 dari pohon pertama, nisan corak granite putih</p>
                                </div>
                            </div>
                            <div className='flex xl:block h-auto w-[350px] xl:w-[320px] px-[30px] py-[20px] xl:py-[30px] mx-[10px] mb-[20px] bg-[#25282F]'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon className='h-[45px] text-[#5b43f4] pr-[20px] xl:pr-0 group-hover:text-white duration-500 mb-[10px]' icon="fa-brands fa-twitter" />
                                </div>
                                <div>
                                    <p className='text-white font-extrabold text-xs xl:text-sm leading-4 mb-[10px]'>3D Assets Design</p>
                                    <p className='text-[#b1bed6] font-medium text-[0.6rem] xl:text-[0.72rem] mb-0 leading-relaxed'>Kuburan gang 1 shaf ke-5 dari pohon pertama, nisan corak granite putih</p>
                                </div>
                            </div>
                            <div className='flex xl:block h-auto w-[350px] xl:w-[320px] px-[30px] py-[20px] xl:py-[30px] mx-[10px] mb-[20px] bg-[#25282F]'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon className='h-[45px] text-[#5b43f4] pr-[20px] xl:pr-0 group-hover:text-white duration-500 mb-[10px]' icon="fa-brands fa-twitter" />
                                </div>
                                <div>
                                    <p className='text-white font-extrabold text-xs xl:text-sm leading-4 mb-[10px]'>3D Assets Design</p>
                                    <p className='text-[#b1bed6] font-medium text-[0.6rem] xl:text-[0.72rem] mb-0 leading-relaxed'>Kuburan gang 1 shaf ke-5 dari pohon pertama, nisan corak granite putih</p>
                                </div>
                            </div>
                            <div className='flex xl:block h-auto w-[350px] xl:w-[320px] px-[30px] py-[20px] xl:py-[30px] mx-[10px] mb-[20px] bg-[#25282F]'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon className='h-[45px] text-[#5b43f4] pr-[20px] xl:pr-0 group-hover:text-white duration-500 mb-[10px]' icon="fa-brands fa-twitter" />
                                </div>
                                <div>
                                    <p className='text-white font-extrabold text-xs xl:text-sm leading-4 mb-[10px]'>3D Assets Design</p>
                                    <p className='text-[#b1bed6] font-medium text-[0.6rem] xl:text-[0.72rem] mb-0 leading-relaxed'>Kuburan gang 1 shaf ke-5 dari pohon pertama, nisan corak granite putih</p>
                                </div>
                            </div>
                            <div className='flex xl:block h-auto w-[350px] xl:w-[320px] px-[30px] py-[20px] xl:py-[30px] mx-[10px] mb-[20px] bg-[#25282F]'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon className='h-[45px] text-[#5b43f4] pr-[20px] xl:pr-0 group-hover:text-white duration-500 mb-[10px]' icon="fa-brands fa-twitter" />
                                </div>
                                <div>
                                    <p className='text-white font-extrabold text-xs xl:text-sm leading-4 mb-[10px]'>3D Assets Design</p>
                                    <p className='text-[#b1bed6] font-medium text-[0.6rem] xl:text-[0.72rem] mb-0 leading-relaxed'>Kuburan gang 1 shaf ke-5 dari pohon pertama, nisan corak granite putih</p>
                                </div>
                            </div>
                            <div className='flex xl:block h-auto w-[350px] xl:w-[320px] px-[30px] py-[20px] xl:py-[30px] mx-[10px] mb-[20px] bg-[#25282F]'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon className='h-[45px] text-[#5b43f4] pr-[20px] xl:pr-0 group-hover:text-white duration-500 mb-[10px]' icon="fa-brands fa-twitter" />
                                </div>
                                <div>
                                    <p className='text-white font-extrabold text-xs xl:text-sm leading-4 mb-[10px]'>3D Assets Design</p>
                                    <p className='text-[#b1bed6] font-medium text-[0.6rem] xl:text-[0.72rem] mb-0 leading-relaxed'>Kuburan gang 1 shaf ke-5 dari pohon pertama, nisan corak granite putih</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full justify-center h-auto'>
                <div className='h-auto w-fit mx-auto mb-[50px] px-[20px]'>
                    <img className='w-auto h-[70px]' src={images['EXPERIENCES.svg']} alt="" />
                    <p className='text-2xl leading-[70px] font-extrabold text-[#FBFCFF] mt-[-70px] ml-[5px] mb-0 text-center'>My Experiences</p>
                </div>
                <div className='
                flex flex-wrap
                justify-center
                w-full h-auto
                py-[30px]
                xl:flex-wrap
                '>
                    <div className='flex w-full flex-col h-auto bg-transparent px-[20px] xl:w-[550px] xl:px-[35px]'>
                        <div className='flex flex-col items-center w-full h-auto bg-transparent mb-[70px]'>
                            <div className='flex flex-col w-full h-auto'>
                                <p className='flex flex-col text-white w-fit font-extrabold text-2xl mx-auto'>Professional Experience</p>
                            </div>
                            <div className='flex flex-col w-full h-auto bg-transparent mb-[30px]'>
                                <div className='flex w-auto justify-center h-auto bg-transparent px-[15px] py-[10px] mb-[15px]'>
                                    <div className='w-[65px] h-auto bg-transparent'>
                                        <img className='w-full h-auto' src={images['logo_rama.svg']} alt="" />
                                    </div>
                                    <div className='flex flex-col w-auto h-auto bg-transparent pl-[15px]'>
                                        <p className='text-white font-extrabold m-0 text-sm leading-4'>PT. ALPHA TECH INDONESIANA</p>
                                        <p className='text-[#8a94a7] font-medium text-[0.74rem] mt-0 mb-0'>Full Time . 2 years 4 months</p>
                                        <p className='text-[#b1bed6] font-medium text-xs mt-[-3px] mb-0 leading-relaxed'>Kuburan gang 1 shaf ke-5 dari pohon pertama, nisan corak granite putih</p>
                                    </div>
                                </div>
                                <div className='flex w-auto justify-center h-auto bg-transparent px-[15px]'>
                                    <div className='w-[65px] h-auto bg-transparent'>
                                    </div>
                                    <div className='flex justify-center w-auto h-auto bg-transparent px-[20px]'>
                                        <div className='w-[1px] h-full bg-[#5742DC] relative left-2'></div>
                                        <div className='w-[19px] h-[19px] rounded-full bg-[#5742DC] mt-[30px]'></div>
                                    </div>
                                    <div className='w-[450px] h-auto bg-transparent px-[25px] py-[9px] my-[10px] rounded-md border-2 group border-[#b1bed6] hover:border-[#5742DC] hover:bg-[#25243B] duration-100 group'>
                                        <p className='group-hover:text-[#FBFCFF] font-semibold text-md mt-0 mb-0'>Generalist</p>
                                        <p className='text-[#8a94a7] group-hover:text-[#A4AEC3] font-medium text-[0.7rem] mt-[-3px] leading-relaxed mb-[10px]'>January 2004 - March 2024 . 20 years 2 months</p>
                                        <p className='text-[#b1bed6] max-h-0 overflow-hidden group-hover:text-[#FBFCFF] font-medium text-xs mt-[-3px] mb-[5px] leading-relaxed group-hover:max-h-[95px] duration-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                                    </div>
                                </div>
                                <div className='flex w-auto justify-center h-auto bg-transparent px-[15px]'>
                                    <div className='w-[65px] h-auto bg-transparent'>
                                    </div>
                                    <div className='flex justify-center w-auto h-auto bg-transparent px-[20px]'>
                                        <div className='w-[1px] h-full bg-[#5742DC] relative left-2'></div>
                                        <div className='w-[19px] h-[19px] rounded-full bg-[#5742DC] mt-[30px]'></div>
                                    </div>
                                    <div className='w-[450px] h-auto bg-transparent px-[25px] py-[9px] my-[10px] rounded-md border-2 group border-[#b1bed6] hover:border-[#5742DC] hover:bg-[#25243B] duration-100 group'>
                                        <p className='group-hover:text-[#FBFCFF] font-semibold text-md mt-0 mb-0'>Generalist</p>
                                        <p className='text-[#8a94a7] group-hover:text-[#A4AEC3] font-medium text-[0.7rem] mt-[-3px] leading-relaxed mb-[10px]'>January 2004 - March 2024 . 20 years 2 months</p>
                                        <p className='text-[#b1bed6] max-h-0 overflow-hidden group-hover:text-[#FBFCFF] font-medium text-xs mt-[-3px] mb-[5px] leading-relaxed group-hover:max-h-[95px] duration-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                                    </div>
                                </div>
                                <div className='flex w-auto justify-center h-auto bg-transparent px-[15px]'>
                                    <div className='w-[65px] h-auto bg-transparent'>
                                    </div>
                                    <div className='flex justify-center w-auto h-auto bg-transparent px-[20px]'>
                                        <div className='w-[1px] h-full bg-[#5742DC] relative left-2'></div>
                                        <div className='w-[19px] h-[19px] rounded-full bg-[#5742DC] mt-[30px]'></div>
                                    </div>
                                    <div className='w-[450px] h-auto bg-transparent px-[25px] py-[9px] my-[10px] rounded-md border-2 group border-[#b1bed6] hover:border-[#5742DC] hover:bg-[#25243B] duration-100 group'>
                                        <p className='group-hover:text-[#FBFCFF] font-semibold text-md mt-0 mb-0'>Generalist</p>
                                        <p className='text-[#8a94a7] group-hover:text-[#A4AEC3] font-medium text-[0.7rem] mt-[-3px] leading-relaxed mb-[10px]'>January 2004 - March 2024 . 20 years 2 months</p>
                                        <p className='text-[#b1bed6] max-h-0 overflow-hidden group-hover:text-[#FBFCFF] font-medium text-xs mt-[-3px] mb-[5px] leading-relaxed group-hover:max-h-[95px] duration-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full h-auto bg-transparent mb-[30px]'>
                                <div className='flex w-auto justify-center h-auto bg-transparent px-[15px] py-[10px] mb-[15px]'>
                                    <div className='w-[65px] h-auto bg-transparent'>
                                        <img className='w-full h-auto' src={images['logo_rama.svg']} alt="" />
                                    </div>
                                    <div className='flex flex-col w-auto h-auto bg-transparent pl-[15px]'>
                                        <p className='text-white font-extrabold m-0 text-base leading-4'>PT. ALPHA TECH INDONESIANA</p>
                                        <p className='text-[#8a94a7] font-medium text-[0.74rem] mt-0 mb-0'>Full Time . 2 years 4 months</p>
                                        <p className='text-[#b1bed6] font-medium text-xs mt-[-3px] mb-0 leading-relaxed'>Kuburan gang 1 shaf ke-5 dari pohon pertama, nisan corak granite putih</p>
                                    </div>
                                </div>
                                <div className='flex w-auto justify-center h-auto bg-transparent ml-[80px]'>
                                    <div className='flex justify-center w-auto h-auto bg-transparent px-[20px]'>
                                        <div className='w-[1px] h-full bg-[#5742DC] relative left-2'></div>
                                        <div className='w-[19px] h-[19px] rounded-full bg-[#5742DC] mt-[30px]'></div>
                                    </div>
                                    <div className='w-[450px] h-auto bg-transparent px-[25px] py-[9px] my-[10px] rounded-md border-2 group border-[#b1bed6] hover:border-[#5742DC] hover:bg-[#25243B] duration-100 group'>
                                        <p className='group-hover:text-[#FBFCFF] font-semibold text-md mt-0 mb-0'>Generalist</p>
                                        <p className='text-[#8a94a7] group-hover:text-[#A4AEC3] font-medium text-[0.7rem] mt-[-3px] leading-relaxed mb-[10px]'>January 2004 - March 2024 . 20 years 2 months</p>
                                        <p className='text-[#b1bed6] max-h-0 overflow-hidden group-hover:text-[#FBFCFF] font-medium text-xs mt-[-3px] mb-[5px] leading-relaxed group-hover:max-h-[95px] duration-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full flex-col h-auto bg-transparent px-[35px] xl:w-[550px]'>
                        <div className='flex flex-col items-center w-full h-auto bg-transparent mb-[70px]'>
                            <div className='flex flex-col w-full h-auto'>
                                <p className='flex flex-col text-white w-auto font-extrabold text-2xl'>Freelance and Part-Time Work</p>
                            </div>
                            <div className='flex flex-col w-full h-auto bg-transparent mb-[30px]'>
                                <div className='flex w-auto justify-center h-auto bg-transparent px-[15px] py-[10px] mb-[15px]'>
                                    <div className='w-[65px] h-auto bg-transparent'>
                                        <img className='w-full h-auto' src={images['logo_rama.svg']} alt="" />
                                    </div>
                                    <div className='flex flex-col w-auto h-auto bg-transparent pl-[15px]'>
                                        <p className='text-white font-extrabold m-0 text-base leading-4'>PT. ALPHA TECH INDONESIANA</p>
                                        <p className='text-[#8a94a7] font-medium text-[0.74rem] mt-0 mb-0'>Full Time . 2 years 4 months</p>
                                        <p className='text-[#b1bed6] font-medium text-xs mt-[-3px] mb-0 leading-relaxed'>Kuburan gang 1 shaf ke-5 dari pohon pertama, nisan corak granite putih</p>
                                    </div>
                                </div>
                                <div className='flex w-auto justify-center h-auto bg-transparent ml-[80px]'>
                                    <div className='flex justify-center w-auto h-auto bg-transparent px-[20px]'>
                                        <div className='w-[1px] h-full bg-[#5742DC] relative left-2'></div>
                                        <div className='w-[19px] h-[19px] rounded-full bg-[#5742DC] mt-[30px]'></div>
                                    </div>
                                    <div className='w-[450px] h-auto bg-transparent px-[25px] py-[9px] my-[10px] rounded-md border-2 group border-[#b1bed6] hover:border-[#5742DC] hover:bg-[#25243B] duration-100 group'>
                                        <p className='group-hover:text-[#FBFCFF] font-semibold text-md mt-0 mb-0'>Generalist</p>
                                        <p className='text-[#8a94a7] group-hover:text-[#A4AEC3] font-medium text-[0.7rem] mt-[-3px] leading-relaxed mb-[10px]'>January 2004 - March 2024 . 20 years 2 months</p>
                                        <p className='text-[#b1bed6] max-h-0 overflow-hidden group-hover:text-[#FBFCFF] font-medium text-xs mt-[-3px] mb-[5px] leading-relaxed group-hover:max-h-[95px] duration-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full h-auto bg-transparent mb-[30px]'>
                                <div className='flex w-auto justify-center h-auto bg-transparent px-[15px] py-[10px] mb-[15px]'>
                                    <div className='w-[65px] h-auto bg-transparent'>
                                        <img className='w-full h-auto' src={images['logo_rama.svg']} alt="" />
                                    </div>
                                    <div className='flex flex-col w-auto h-auto bg-transparent pl-[15px]'>
                                        <p className='text-white font-extrabold m-0 text-base leading-4'>PT. ALPHA TECH INDONESIANA</p>
                                        <p className='text-[#8a94a7] font-medium text-[0.74rem] mt-0 mb-0'>Full Time . 2 years 4 months</p>
                                        <p className='text-[#b1bed6] font-medium text-xs mt-[-3px] mb-0 leading-relaxed'>Kuburan gang 1 shaf ke-5 dari pohon pertama, nisan corak granite putih</p>
                                    </div>
                                </div>
                                <div className='flex w-auto justify-center h-auto bg-transparent ml-[80px]'>
                                    <div className='flex justify-center w-auto h-auto bg-transparent px-[20px]'>
                                        <div className='w-[1px] h-full bg-[#5742DC] relative left-2'></div>
                                        <div className='w-[19px] h-[19px] rounded-full bg-[#5742DC] mt-[30px]'></div>
                                    </div>
                                    <div className='w-[450px] h-auto bg-transparent px-[25px] py-[9px] my-[10px] rounded-md border-2 group border-[#b1bed6] hover:border-[#5742DC] hover:bg-[#25243B] duration-100 group'>
                                        <p className='group-hover:text-[#FBFCFF] font-semibold text-md mt-0 mb-0'>Generalist</p>
                                        <p className='text-[#8a94a7] group-hover:text-[#A4AEC3] font-medium text-[0.7rem] mt-[-3px] leading-relaxed mb-[10px]'>January 2004 - March 2024 . 20 years 2 months</p>
                                        <p className='text-[#b1bed6] max-h-0 overflow-hidden group-hover:text-[#FBFCFF] font-medium text-xs mt-[-3px] mb-[5px] leading-relaxed group-hover:max-h-[95px] duration-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                                    </div>
                                </div>
                                <div className='flex w-auto justify-center h-auto bg-transparent ml-[80px]'>
                                    <div className='flex justify-center w-auto h-auto bg-transparent px-[20px]'>
                                        <div className='w-[1px] h-full bg-[#5742DC] relative left-2'></div>
                                        <div className='w-[19px] h-[19px] rounded-full bg-[#5742DC] mt-[30px]'></div>
                                    </div>
                                    <div className='w-[450px] h-auto bg-transparent px-[25px] py-[9px] my-[10px] rounded-md border-2 group border-[#b1bed6] hover:border-[#5742DC] hover:bg-[#25243B] duration-100 group'>
                                        <p className='group-hover:text-[#FBFCFF] font-semibold text-md mt-0 mb-0'>Generalist</p>
                                        <p className='text-[#8a94a7] group-hover:text-[#A4AEC3] font-medium text-[0.7rem] mt-[-3px] leading-relaxed mb-[10px]'>January 2004 - March 2024 . 20 years 2 months</p>
                                        <p className='text-[#b1bed6] max-h-0 overflow-hidden group-hover:text-[#FBFCFF] font-medium text-xs mt-[-3px] mb-[5px] leading-relaxed group-hover:max-h-[95px] duration-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-full h-auto bg-transparent mb-[70px]'>
                            <div className='flex flex-col w-full h-auto'>
                                <p className='flex flex-col text-white w-auto font-extrabold text-2xl'>Entrepreneurial Experience</p>
                            </div>
                            <div className='flex flex-col w-full h-auto bg-transparent mb-[30px]'>
                                <div className='flex w-auto justify-center h-auto bg-transparent px-[15px] py-[10px] mb-[15px]'>
                                    <div className='w-[65px] h-auto bg-transparent'>
                                        <img className='w-full h-auto' src={images['logo_rama.svg']} alt="" />
                                    </div>
                                    <div className='flex flex-col w-auto h-auto bg-transparent pl-[15px]'>
                                        <p className='text-white font-extrabold m-0 text-base leading-4'>PT. ALPHA TECH INDONESIANA</p>
                                        <p className='text-[#8a94a7] font-medium text-[0.74rem] mt-0 mb-0'>Full Time . 2 years 4 months</p>
                                        <p className='text-[#b1bed6] font-medium text-xs mt-[-3px] mb-0 leading-relaxed'>Kuburan gang 1 shaf ke-5 dari pohon pertama, nisan corak granite putih</p>
                                    </div>
                                </div>
                                <div className='flex w-auto justify-center h-auto bg-transparent ml-[80px]'>
                                    <div className='flex justify-center w-auto h-auto bg-transparent px-[20px]'>
                                        <div className='w-[1px] h-full bg-[#5742DC] relative left-2'></div>
                                        <div className='w-[19px] h-[19px] rounded-full bg-[#5742DC] mt-[30px]'></div>
                                    </div>
                                    <div className='w-[450px] h-auto bg-transparent px-[25px] py-[9px] my-[10px] rounded-md border-2 group border-[#b1bed6] hover:border-[#5742DC] hover:bg-[#25243B] duration-100 group'>
                                        <p className='group-hover:text-[#FBFCFF] font-semibold text-md mt-0 mb-0'>Generalist</p>
                                        <p className='text-[#8a94a7] group-hover:text-[#A4AEC3] font-medium text-[0.7rem] mt-[-3px] leading-relaxed mb-[10px]'>January 2004 - March 2024 . 20 years 2 months</p>
                                        <p className='text-[#b1bed6] max-h-0 overflow-hidden group-hover:text-[#FBFCFF] font-medium text-xs mt-[-3px] mb-[5px] leading-relaxed group-hover:max-h-[95px] duration-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full justify-center h-auto mb-[150px]'>
                <div className='
                flex flex-wrap
                justify-center
                w-full h-auto
                py-[30px]
                xl:flex-wrap
                '>
                    <div className='flex w-full flex-col h-auto bg-transparent px-[35px] xl:w-[1400px]'>
                        <MethodologiesSection />
                    </div>
                </div>
            </section>
            <section class="cta section bg-[#15181D]">
				<div class="container">
					<div class="cta-inner section-inner">
						<h3 class="section-title mt-0">Still not convinced on buying?</h3>
						<div class="cta-cta">
							<a class="button button-primary button-wide-mobile" href="#">Get in touch</a>
						</div>
					</div>
				</div>
			</section>
            <section class="features section">
                <div class="container">
					<div class="features-inner section-inner has-bottom-divider">
                        <div class="features-wrap">
                            <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={images['feature-icon-01.svg']} alt="Feature 01"/>
                                    </div>
                                    <h4 class="feature-title mt-24">Be Productive</h4>
                                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
							<div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={images['feature-icon-02.svg']} alt="Feature 02"/>
                                    </div>
                                    <h4 class="feature-title mt-24">Be Productive</h4>
                                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={images['feature-icon-03.svg']} alt="Feature 03"/>
                                    </div>
                                    <h4 class="feature-title mt-24">Be Productive</h4>
                                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={images['feature-icon-04.svg']} alt="Feature 04"/>
                                    </div>
                                    <h4 class="feature-title mt-24">Be Productive</h4>
                                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
							<div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={images['feature-icon-05.svg']} alt="Feature 05"/>
                                    </div>
                                    <h4 class="feature-title mt-24">Be Productive</h4>
                                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={images['feature-icon-06.svg']} alt="Feature 06"/>
                                    </div>
                                    <h4 class="feature-title mt-24">Be Productive</h4>
                                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pricing section">
                <div class="container-sm">
                    <div class="pricing-inner section-inner">
                        <div class="pricing-header text-center">
                            <h2 class="section-title mt-0">Unlimited for all</h2>
                            <p class="section-paragraph mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                        </div>
						<div class="pricing-tables-wrap">
                            <div class="pricing-table">
                                <div class="pricing-table-inner is-revealing">
                                    <div class="pricing-table-main">
                                        <div class="pricing-table-header pb-24">
                                            <div class="pricing-table-price"><span class="pricing-table-price-currency h2">$</span><span class="pricing-table-price-amount h1">49</span><span class="text-xs">/month</span></div>
                                        </div>
										<div class="pricing-table-features-title text-xs pt-24 pb-24">What you will get</div>
                                        <ul class="pricing-table-features list-reset text-xs">
                                            <li>
                                                <span>Lorem ipsum dolor sit nisi</span>
                                            </li>
                                            <li>
                                                <span>Lorem ipsum dolor sit nisi</span>
                                            </li>
                                            <li>
                                                <span>Lorem ipsum dolor sit nisi</span>
                                            </li>
											<li>
												<span>Lorem ipsum dolor sit nisi</span>
											</li>
                                        </ul>
                                    </div>
                                    <div class="pricing-table-cta mb-8">
                                        <a class="button button-primary button-shadow button-block" href="#">Pre order now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="site-footer">
            <div class="container">
                <div class="site-footer-inner">
                    <div class="brand footer-brand">
						<a href="#">
							<img class="header-logo-image" src={images['logo.svg']} alt="Logo"/>
						</a>
                    </div>
                    <ul class="footer-links list-reset">
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">FAQ's</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                    <ul class="footer-social-links list-reset">
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Facebook</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#0270D7"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Twitter</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#0270D7"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Google</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#0270D7"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div class="footer-copyright">&copy; 2019 Solid, all rights reserved</div>
                </div>
            </div>
        </footer>
    </div>
    );
}
 
export default Home;