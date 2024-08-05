import Child from '../assets/child.png';
import Brain from '../assets/brain.png';
const Page4 = () => {

    return (

        <section className=" w-full h-[1024px] bg-custom-gradient flex flex-col items-center">

            <div className="w-full h-[200px] flex justify-center items-center mt-[100px]">

                <p className="w-[858px] h-[72px] text-white font-poppins font-extrabold text-5xl leading-[72px]">
                    Get Expert Answers to Your Doubts
                </p>
                <img src={Child} alt='' className='w-[114px] h-[150px]' />

            </div>

            <p className=' w-[1200px] h-[210px] font-poppins font-bold text-[28px] leading-[42px] text-[#fffcfc] text-center'>

                Welcome to our doubt-solving section! Here, you can ask any question or clarify any
                doubts related to your lessons. Our advanced AI is designed to provide you with accurate
                and detailed solutions instantly. Whether you're stuck on a complex problem or need
                further explanation on a topic, we've got you covered. Just post your question, and let our
                intelligent bot guide you to understanding and success.

            </p>

            <div className=' w-full h-[500px] flex justify-center items-center gap-x-[100px]'>

                <img src={Brain} alt='' className='w-[340px] h-[337px]' />

                <div className='w-[820px] h-[244px] border border-solid border-white flex items-center justify-center'>

                    <p className=' w-[710px] h-[180px] font-poppins font-normal leading-[36px] text-center text-white text-[24px]'>

                        Feel free to explore our growing repository of previously answered
                        questions for instant help, or submit your own and receive
                        personalized assistance. Our AI ensures you never have to <br />
                        struggle alone with your studies. Get started now and make your
                        learning journey smoother and more effective!

                    </p>

                </div>
            </div>

        </section>

    )
}

export default Page4;