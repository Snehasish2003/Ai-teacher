import notesImg from '../assets/notesimg.png';
import Book1 from '../assets/book1.png';
import NoteBook from '../assets/NoteBook.png';
import DictImg from '../assets/dictionaryimg.png';
import FileImg from '../assets/file.png';
const Page5 = () => {

  return (

    <section className="w-full h-[1024px] bg-custom-gradient flex flex-col items-center justify-center overflow-hidden">

        <div className=" w-full h-[600px] flex flex-col items-center justify-center gap-y-2">

            <p className="w-[977px] h-[72px] font-poppins text-[48px] leading-[72px] text-white font-bold">
            
                Access and Download Your Notes Easily

            </p>

            <p className=" w-[491px] h-[24px] font-inter font-semibold text-[20px] leading-[24.2px] text-center text-white">

                Download your notes quickly with just a few clicks.

            </p>

            <p className="w-[1200px] h-[108px] font-poppins text-[24px] font-normal leading-9 text-center text-white mt-16">

                Welcome to our Notes Download section! Here, you can effortlessly download your study materials in a 
                variety of formats. Keep your notes organized and within reach, ensuring you can study effectively anytime, <br /> 
                anywhere.

            </p>

            <p className="w-[1150px] h-[108px] font-poppins font-normal text-[24px] text-center text-white">

            Rest assured that all our notes are meticulously curated and verified for accuracy. We prioritize quality, 
            providing you with reliable and comprehensive study resources. Study confidently knowing you have access 
            to the best information.

            </p>

        </div>

        <div className="w-full h-[335px] relative">

            <img src={notesImg} alt='' className='w-[254px] h-[324px] absolute left-[40px] top-0'/>
            <img src={notesImg} alt='' className='rotate-[90deg] w-[254px] h-[324px] absolute left-[340px] top-0'/>
            <img src={notesImg} alt='' className='rotate-[180deg] w-[254px] h-[324px] absolute left-[660px] top-0'/>
            <img src={notesImg} alt='' className='rotate-[90deg] w-[254px] h-[324px] absolute left-[940px] top-4'/>
            <img src={notesImg} alt='' className='rotate-[-180deg] w-[254px] h-[324px] absolute left-[1200px] top-0'/>
            <img src={notesImg} alt='' className='rotate-[75deg] w-[254px] h-[324px] absolute left-[1440px] top-0'/>

            <img src={Book1}    alt='' className='w-[149px] h-[166px] absolute left-[200px] top-[100px] z-10' />
            <img src={NoteBook} alt='' className='w-[175px] h-[125px] absolute left-[880px]' />
            <img src={DictImg} alt='' className='w-[163px] h-[155.5px] rotate-4 left-[520px] absolute'/>
            <img src={DictImg} alt='' className='w-[163px] h-[155.5px] rotate-4 right-[-28px] -top-10 absolute'/>

            <img src={notesImg} alt='' className='rotate-[45deg] w-[254px] h-[324px] absolute left-[1440px] top-[200px]'/>
            <img src={notesImg} alt='' className='rotate-[-180deg] w-[254px] h-[324px] absolute left-[1200px] top-[180px]'/>
            <img src={notesImg} alt='' className='rotate-[45deg] w-[254px] h-[324px] absolute left-[940px] top-[200px]'/>
            <img src={notesImg} alt='' className='rotate-[180deg] w-[254px] h-[324px] absolute left-[700px] top-[200px]'/>
            <img src={notesImg} alt='' className='rotate-[30deg] w-[254px] h-[324px] absolute left-[400px] top-[200px]'/>
            <img src={notesImg} alt='' className='rotate-[45deg] w-[254px] h-[324px] absolute left-[140px] top-[200px]'/>
            <img src={notesImg} alt='' className='rotate-[60deg] w-[254px] h-[324px] absolute left-[-60px] top-[10px]'/>
            <img src={notesImg} alt='' className='rotate-[60deg] w-[254px] h-[324px] absolute left-[-60px] top-[160px]'/>
            <img src={notesImg} alt='' className='rotate-[60deg] w-[254px] h-[324px] absolute left-[440px] top-[160px]'/>

            <img src={FileImg} alt='' className='w-[155px] h-[162px] rotate-3 absolute left-[1090px]' />




        </div>

    </section>

  )

}

export default Page5;