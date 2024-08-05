import homeImg from '../assets/laphomeimg.png';


// bg-[url(./assets/home1.png)] bg-no-repeat bg-cover
const HeroSection = () => {

  return (

    <section className='bg-custom-gradient w-full h-full flex relative'>

        <div className='w-[17px] h-[17px] border-[4.08px] border-white rounded-full absolute top-[110px] left-[112px]'/>
        <div className='w-[44px] h-[44px] border-[4.08px] border-white rounded-full absolute top-[73px] left-[68px]'/>

        <svg width="60" height="91" viewBox="0 0 60 91" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[56.51px] h-[86.95px] top-[100px] left-[432px] absolute'>
            <path d="M20.8792 2.00073L2 11.1289L39.6294 88.9552L58.5086 79.827L20.8792 2.00073Z" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.384 11.3398L15.9489 15.8999" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M34.104 29.3691L24.6624 33.9358" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M42.824 47.4004L33.3823 51.967" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M51.5374 65.4375L42.1022 69.9976" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.2711 17.3105L23.5535 19.5873" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M31.1842 23.3398L26.4667 25.6232" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M37.0042 35.373L32.2866 37.6498" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M39.9173 41.4023L35.1998 43.6857" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M45.7373 53.4355L41.0197 55.7123" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M48.657 59.4668L43.9329 61.7501" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[76px] h-[77.75px] top-[100px] right-[550px] absolute'>
            <path d="M38.3142 67.7419L18.559 61.0324C16.4714 60.3252 15.357 58.0567 16.0641 55.9691C16.7713 53.8816 19.0399 52.7671 21.1217 53.4743L40.877 60.1838C42.9645 60.891 44.079 63.1595 43.3718 65.2414C42.6647 67.3346 40.4018 68.4547 38.3142 67.7419Z" stroke="white" stroke-width="2.54294" stroke-miterlimit="10"/>
            <path d="M35.7175 75.3906L15.9623 68.6811C13.8748 67.9739 12.7603 65.7053 13.4674 63.6235C14.1746 61.5359 16.4432 60.4214 18.5307 61.1286L38.286 67.8325C40.3735 68.5396 41.488 70.8082 40.7808 72.8957C40.068 74.9833 37.8051 76.0978 35.7175 75.3906Z" stroke="white" stroke-width="2.54294" stroke-miterlimit="10"/>
            <path d="M18.1572 32.8415C18.1799 32.9094 18.1968 32.9716 18.2194 33.0395C18.6607 34.4482 21.2631 43.3754 20.1769 53.2813L41.369 60.2737C46.3927 51.669 53.7981 46.0512 54.9918 45.18C55.0484 45.1404 55.105 45.1008 55.1559 45.0612C55.7329 44.6483 56.293 44.207 56.8361 43.7374C60.0268 40.9823 62.5386 37.356 63.9529 33.0678C68.1223 20.4407 61.2657 6.82365 48.6387 2.65423C36.0116 -1.51518 22.3945 5.34145 18.2251 17.9685C16.8051 22.2624 16.6637 26.6694 17.5915 30.7823C17.7499 31.4725 17.9366 32.1626 18.1572 32.8415Z" stroke="white" stroke-width="2.54294" stroke-miterlimit="10"/>
            <path d="M17.0428 69.1445C16.8052 73.3309 19.385 77.3193 23.56 78.6997C27.6785 80.0574 32.0629 78.4451 34.3937 75.0337L17.0428 69.1445Z" stroke="white" stroke-width="2.54294" stroke-miterlimit="10"/>
            <path d="M26.813 55.3584L33.1096 36.2764C33.7319 34.3981 32.7079 32.3728 30.8297 31.7505C28.9515 31.1282 26.9262 32.1522 26.3039 34.0304C25.6816 35.9087 26.7056 37.934 28.5838 38.5563L36.1419 41.0511" stroke="white" stroke-width="2.54294" stroke-miterlimit="10"/>
            <path d="M35.1177 58.1005L41.4142 39.0185C42.0365 37.1403 44.0618 36.122 45.9401 36.7386C47.8183 37.3609 48.8366 39.3862 48.22 41.2644C47.5977 43.1426 45.5724 44.161 43.6941 43.5443L36.136 41.0495" stroke="white" stroke-width="2.54294" stroke-miterlimit="10"/>
            <path d="M68.4282 39.6426L74.8097 41.7527" stroke="white" stroke-width="2.54294" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M71.3529 31.6029L78.0002 30.6016" stroke="white" stroke-width="2.54294" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M63.9646 46.5371L68.7054 51.3005" stroke="white" stroke-width="2.54294" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M9.1563 20.0772L2.7749 17.9727" stroke="white" stroke-width="2.54294" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M11.5948 11.8748L6.854 7.11133" stroke="white" stroke-width="2.54294" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M8.64164 28.2754L2 29.2767" stroke="white" stroke-width="2.54294" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>

        <svg width="68" height="71" viewBox="0 0 68 71" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[64px] h-[70.44px] absolute top-[60px] right-[160px]'>
            <path d="M34 50.3758C51.6731 50.3758 66 43.5847 66 35.2074C66 26.8302 51.6731 20.0391 34 20.0391C16.3269 20.0391 2 26.8302 2 35.2074C2 43.5847 16.3269 50.3758 34 50.3758Z" stroke="white" stroke-width="2.44399" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M46.9411 43.1138C56.1311 28.0192 57.7808 12.2512 50.6258 7.89507C43.4708 3.5389 30.2205 12.2441 21.0305 27.3387C11.8405 42.4333 10.1908 58.2013 17.3458 62.5575C24.5008 66.9136 37.7511 58.2084 46.9411 43.1138Z" stroke="white" stroke-width="2.44399" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M50.6194 62.5502C57.7745 58.1941 56.1248 42.4261 46.9348 27.3315C37.7448 12.2369 24.4945 3.53167 17.3394 7.88785C10.1844 12.244 11.8341 28.012 21.0242 43.1066C30.2142 58.2012 43.4644 66.9064 50.6194 62.5502Z" stroke="white" stroke-width="2.44399" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M34 39.222C36.2176 39.222 38.0153 37.4243 38.0153 35.2067C38.0153 32.9891 36.2176 31.1914 34 31.1914C31.7825 31.1914 29.9847 32.9891 29.9847 35.2067C29.9847 37.4243 31.7825 39.222 34 39.222Z" stroke="white" stroke-width="2.44399" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg width="70" height="88" viewBox="0 0 70 88" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[69.93px] h-[86.34px] absolute top-[860px] right-[200px]'>
            <path d="M58.5435 79.744L34.2898 85.343L33.1992 80.6154C32.9487 79.5196 33.6271 78.4291 34.7229 78.1734L55.0109 73.4875C56.1067 73.2371 57.1972 73.9154 57.4529 75.0112L58.5435 79.744Z" stroke="white" stroke-width="2.24333" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M50.5713 54.3212C61.2618 45.7015 62.9406 30.0476 54.3209 19.3571C45.7012 8.66665 30.0472 6.98792 19.3568 15.6076C8.6663 24.2273 6.98763 39.8812 15.6073 50.5717C24.227 61.2621 39.8809 62.9409 50.5713 54.3212Z" stroke="white" stroke-width="2.24333" stroke-miterlimit="10"/>
            <path d="M46.5364 56.9614L23.3471 12.9729L20.4511 7.63477C5.33429 15.6028 -0.457827 34.3149 7.51021 49.4317C15.4782 64.5486 34.1903 70.3406 49.3072 62.3726L46.4738 56.998" stroke="white" stroke-width="2.24333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.4579 22.6115C36.0498 18.6087 41.0634 13.2001 39.6561 10.531C38.2488 7.86187 30.9536 8.94298 23.3617 12.9457C15.7699 16.9485 10.7563 22.3571 12.1636 25.0263C13.5709 27.6954 20.8661 26.6142 28.4579 22.6115Z" stroke="white" stroke-width="2.24333" stroke-miterlimit="10"/>
            <path d="M30.2405 59.3786C35.5995 60.4118 41.3342 59.7074 46.5367 56.9627C51.7391 54.2179 55.5639 49.8869 57.7399 44.8828C52.3809 43.8496 46.6462 44.554 41.4438 47.2988C36.2361 50.0435 32.4164 54.3745 30.2405 59.3786Z" stroke="white" stroke-width="2.24333" stroke-miterlimit="10"/>
            <path d="M46.5554 56.9349C52.6279 53.7332 52.3586 41.2903 45.9539 29.1429C39.5493 16.9954 29.4345 9.74341 23.3621 12.9451C17.2896 16.1467 17.559 28.5897 23.9636 40.7371C30.3683 52.8846 40.483 60.1366 46.5554 56.9349Z" stroke="white" stroke-width="2.24333" stroke-miterlimit="10"/>
            <path d="M12.9476 46.5623L56.9362 23.373" stroke="white" stroke-width="2.24333" stroke-miterlimit="10"/>
            <path d="M42.1639 65.082L44.7312 75.7896" stroke="white" stroke-width="2.24333" stroke-miterlimit="10"/>
            <path d="M31.3782 86.3407L62.2954 78.9258" stroke="white" stroke-width="2.24333" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>

        <svg width="79" height="86" viewBox="0 0 79 86" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[100px] h-[40px] absolute top-[700px] left-[350px] rotate-3'>
            <path d="M25.6069 30.3183L23.5171 35.0816" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M40.7753 36.9707L38.6854 41.734" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M55.9476 43.621L53.8577 48.3844" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.4549 25.8654L14.4096 28.2509" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.5307 28.0955L19.486 30.4733" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30.6532 32.5295L29.6079 34.9149" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M35.7254 34.7556L34.6843 37.1376" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M45.8515 39.1935L44.8062 41.579" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M61.2692 45.9549L60.2281 48.3368" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M50.9236 41.4197L49.8825 43.8017" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M52.6658 84.0433L2.5784 20.222L68.0608 48.9316L52.6658 84.0433Z" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M50.1132 63.8995L36.4111 46.44L54.3225 54.2905L50.1132 63.8995Z" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg width="61" height="80" viewBox="0 0 61 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[57.06px] h-[76.5px] absolute top-[890px] left-[55px]'>
            <path d="M26.9333 8.97517L6.44249 18.6006C5.34676 19.1189 4.0411 18.6465 3.52276 17.5508L2.2105 14.7557C1.69216 13.6599 2.16455 12.3542 3.26029 11.8359L23.7511 2.2105C24.8469 1.69216 26.1526 2.16457 26.671 3.2603L27.9832 6.05541C28.5016 7.1577 28.0291 8.46339 26.9333 8.97517Z" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M34.8922 30.837L24.8667 9.95898L8.64713 17.7472L18.6728 38.6252L24.9979 73.5574C27.0778 77.8944 32.2808 79.7185 36.6113 77.6386L54.1234 69.227C58.4604 67.1471 60.2844 61.944 58.2045 57.6135L34.8922 30.837Z" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M21.5203 54.3787C21.5203 54.3787 24.8665 48.9591 33.7636 49.2674C42.6607 49.5758 44.1567 41.4727 44.1567 41.4727" stroke="white" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>

        <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[56.84px] h-[56.18px] absolute top-[700px] right-[440px]'>
            <path d="M8.24374 16.4696C8.24374 18.4682 6.62042 20.0915 4.62182 20.0915C2.62322 20.0915 0.999878 18.4682 0.999878 16.4696C0.999878 14.471 2.62322 12.8477 4.62182 12.8477C6.62042 12.8477 8.24374 14.4668 8.24374 16.4696Z" stroke="white" stroke-width="1.49555" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M43.3837 47.8825C45.384 47.8825 47.0056 46.261 47.0056 44.2606C47.0056 42.2603 45.384 40.6387 43.3837 40.6387C41.3833 40.6387 39.7617 42.2603 39.7617 44.2606C39.7617 46.261 41.3833 47.8825 43.3837 47.8825Z" stroke="white" stroke-width="1.49555" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29.7476 36.8143C34.0137 36.8143 37.4721 33.3559 37.4721 29.0898C37.4721 24.8236 34.0137 21.3652 29.7476 21.3652C25.4814 21.3652 22.0231 24.8236 22.0231 29.0898C22.0231 33.3559 25.4814 36.8143 29.7476 36.8143Z" stroke="white" stroke-width="1.49555" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M43.2066 29.0901L40.6303 33.5933L39.2642 38.6066L34.2551 39.9685L29.7477 42.549L25.2403 39.9685L20.2269 38.6066L18.865 33.5933L16.2845 29.0901L18.865 24.5827L20.2269 19.5694L25.2403 18.2074L29.7477 15.627L34.2551 18.2074L39.2642 19.5694L40.6303 24.5827L43.2066 29.0901Z" stroke="white" stroke-width="1.49555" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M39.7617 44.2608C39.7617 42.2622 41.3851 40.6388 43.3837 40.6388C44.4631 40.6388 45.4329 41.1153 46.0948 41.8658C48.8524 38.3408 50.501 33.9093 50.501 29.0857C50.501 17.6212 41.208 8.32812 29.7435 8.32812C18.2789 8.32812 8.98584 17.6212 8.98584 29.0857C8.98584 40.5503 18.2789 49.8433 29.7435 49.8433C33.7744 49.8433 37.5312 48.6922 40.7146 46.7063C40.1286 46.0612 39.7617 45.2052 39.7617 44.2608Z" stroke="white" stroke-width="1.49555" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29.7475 1C20.0623 1 11.5198 5.90374 6.47273 13.3626C7.53106 13.9951 8.24362 15.1504 8.24362 16.4744C8.24362 18.473 6.6203 20.0963 4.6217 20.0963C4.12838 20.0963 3.66036 19.9951 3.2345 19.818C2.21833 22.7232 1.66174 25.8391 1.66174 29.09C1.66174 44.6023 14.2394 57.18 29.7518 57.18C45.2641 57.18 57.8418 44.6023 57.8418 29.09C57.8418 13.5777 45.2599 1 29.7475 1Z" stroke="white" stroke-width="1.49555" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg width="71" height="63" viewBox="0 0 71 63" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[66.96px] h-[58.79px] absolute top-[250px] right-[700px]'>
            <path d="M51.861 58.1504L6.45406 44.5864C3.1516 43.601 1.27711 40.1254 2.26247 36.8229L11.3308 6.45406C12.3161 3.15159 15.7918 1.27712 19.0943 2.26247L64.5013 15.8264C67.8037 16.8118 69.6782 20.2875 68.6929 23.5899L59.6245 53.9588C58.6353 57.2574 55.1597 59.1357 51.861 58.1504Z" fill="white" stroke="black" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M3.33246 33.2324L60.6945 50.3683" stroke="black" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M31.8397 46.6829C31.6452 47.3331 30.9581 47.704 30.3081 47.5096C29.6579 47.3151 29.2871 46.628 29.4815 45.978C29.6759 45.3278 30.363 44.9569 31.0131 45.1513C31.6632 45.3458 32.0341 46.0329 31.8397 46.6829Z" fill="white" stroke="black" stroke-width="0.656128"/>
            <path d="M35.5928 53.2944L22.7323 49.4531L20.9995 55.2546L33.86 59.0958L35.5928 53.2944Z" fill="white" stroke="black" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M16.2306 54.1621L38.4318 60.794" stroke="black" stroke-width="2.62451" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>

        <svg width="269" height="268" viewBox="0 0 269 268" fill="none" xmlns="http://www.w3.org/2000/svg" 
                className='w-[267.7px] h-[267.7px] absolute top-[200px] right-[180px]'>
                    <circle cx="134.445" cy="133.85" r="117.447" stroke="url(#paint0_linear_38_327)" stroke-width="32.8064"/>
                    <defs>
                        <linearGradient id="paint0_linear_38_327" x1="134.445" y1="0" x2="134.445" y2="267.7" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4C60A5"/>
                            <stop offset="1" stop-color="#A01EFE"/>
                        </linearGradient>
                    </defs>
        </svg>



        <div className='w-[50%] h-full flex flex-col ml-10 justify-center'>

            <div className='text-white font-jost font-bold '>

                <p className='text-[32px] leading-[46px] tracking-[0.06em]'>WELCOME TO</p>
                <p className='text-[96px] leading-[140px] tracking-[-0.045em]'>AI TEACHER</p>

            </div>

            <div className='text-white font-poppins font-semibold text-xl leading-[30px] tracking-[0.01em] w-[400px] capitalize'>

                <p>
                    Lorem ipsum dolor sit amet, consectetur 
                    Adipiscing elit. A rhoncus nisi, diam 
                    Elementum amet felis nibh. Pulvinar elementum ornare pharetra leo tellus id. 
                    Elementum tempus, cursus ac imperdiet 
                    Tellus ornare duis vel. Lacus, Lacus 
                    Volutpat vulputate egestas in.
                </p>
                <a href="#GetStarted"><button className='font-jost font-medium leading-6 text-base tracking-[0.02em] mt-5 w-[260px] h-[53px] rounded-lg bg-[#002aff] hover:shadow-md hover:shadow-white'>
                   Get Started
                </button></a>

            </div>

        </div>

        <div className='bg-rad-grad w-[900px] h-[900px] flex justify-center items-center'>
            <div className='bg-rad-grad-new w-[900px] h-[900px] flex justify-center items-center'>

                <img alt='' src={homeImg} className='w-[584px] h-[356px] z-10' />
                

            </div>
        </div>

    </section>
  )
}

export default HeroSection;