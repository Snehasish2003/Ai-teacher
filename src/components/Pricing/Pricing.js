import React from 'react';

function Pricing(props) {
    return (
        <div className='text-black text-center bg-gray-100 py-10'>
            <h1 className=' text-4xl md:text-6xl font-medium text-[#02015A]'>Your Perfect Plan</h1>
            <p className='text-lg mt-2 text-[#68708C] font-medium'>Affordable and scalable options for everyone.</p>
            <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-0 items-center md:items-start md:space-x-6 mt-10">
                <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden text-start p-8 w-72">
                    <span className="inline-block bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">STARTER</span>
                    <h1 className="text-3xl font-bold mt-5">$15/mo</h1>
                    <p className="text-gray-600 mt-3">What's included</p>
                    <div className="mt-4 text-blue-900 space-y-2">
                        {Array(6).fill(null).map((_, i) => (
                            <div key={i} className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"/>
                                    <path d="M10.97 5.97a.75.75 0 0 1 1.07 1.05L7.477 11.6l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.42 2.42 3.48-3.48z"/>
                                </svg>
                                <span className="text-base">{props.title || "Lorem ipsum"}</span>
                            </div>
                        ))}
                    </div>
                    <button className="mt-6 bg-white border border-blue-500 text-blue-500 hover:bg-blue-100 text-base font-bold py-3 px-6 rounded w-[100%]">
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline ml-2 bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg>
                    </button>
                </div>

                <div className="max-w-md bg-[#573CFF] text-white shadow-lg rounded-lg overflow-hidden text-start p-8 w-72">
                    <span className="inline-block bg-yellow-300 text-purple-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">STANDARD</span>
                    <h1 className="text-3xl font-bold mt-5">$25/mo</h1>
                    <p className="mt-3">What's included</p>
                    <div className="mt-4 text-purple-300 space-y-2">
                        {Array(6).fill(null).map((_, i) => (
                            <div key={i} className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"/>
                                    <path d="M10.97 5.97a.75.75 0 0 1 1.07 1.05L7.477 11.6l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.42 2.42 3.48-3.48z"/>
                                </svg>
                                <span className="text-base">{props.title || "Lorem ipsum"}</span>
                            </div>
                        ))}
                    </div>
                    <button className="mt-6 bg-white border border-blue-500 text-blue-500 hover:bg-blue-100 text-base font-bold py-3 px-6 rounded w-[100%]">
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline ml-2 bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg>
                    </button>
                </div>

                <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden text-start p-8 w-72">
                    <span className="inline-block bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">PREMIUM</span>
                    <h1 className="text-3xl font-bold mt-5">$30/mo</h1>
                    <p className="text-gray-600 mt-3">What's included</p>
                    <div className="mt-4 text-blue-900 space-y-2">
                        {Array(6).fill(null).map((_, i) => (
                            <div key={i} className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"/>
                                    <path d="M10.97 5.97a.75.75 0 0 1 1.07 1.05L7.477 11.6l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.42 2.42 3.48-3.48z"/>
                                </svg>
                                <span className="text-base">{props.title || "Lorem ipsum"}</span>
                            </div>
                        ))}
                    </div>
                    <button className="mt-6  bg-white border border-blue-500 text-blue-500 hover:bg-blue-100 text-base font-bold py-3 px-6 rounded w-[100%]">
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline ml-2 bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
