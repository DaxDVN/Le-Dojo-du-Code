import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logoPage.jpg'
import { Popover } from "flowbite-react";

function AuthNavigate() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };
    console.log(2)
    const name = 'Nguyen Hong Duc'

    return (
        <>
            <nav
                className="fixed top-0 left-0 z-50 w-full h-14 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full grid-cols-3 mx-auto font-medium">
                    {/*LEFT*/}
                    <div className="flex items-center">
                        {/* Icon Google */}
                        <img src={logo} alt={'Logo Page'} className={'w-14 ml-2 mr-4 rounded-full'}/>

                        {/* Search box */}
                        <form className="w-full">
                            <label htmlFor="default-search"
                                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                       className="block w-2/3 p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Search Le Dojo" required/>
                            </div>
                        </form>
                    </div>

                    {/*MID*/}
                    <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
                        <button type="button"
                                className="inline-flex flex-col items-center justify-center px-20 hover:bg-gray-50 dark:hover:bg-gray-600 group dark:hover:border-b-2 border-blue-500 ">
                            <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                            </svg>

                        </button>
                        <button type="button"
                                className="inline-flex flex-col items-center justify-center px-20 hover:bg-gray-50 dark:hover:bg-gray-600 group dark:hover:border-b-2 border-blue-500">
                            <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                      d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                            </svg>

                        </button>
                        <button type="button"
                                className="inline-flex flex-col items-center justify-center px-20 hover:bg-gray-50 dark:hover:bg-gray-600 group dark:hover:border-b-2 border-blue-500">
                            <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                            </svg>

                        </button>
                    </div>

                    {/*RIGHT*/}
                    <div className={'flex items-center justify-end mr-2'}>
                        <button type="button"
                                className="mx-2 px-3 rounded-full h-full hover:bg-gray-50 dark:hover:bg-gray-600 group">
                            <svg className="w-8 h-8 text-gray-800 dark:text-white 0"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
                            </svg>
                        </button>
                        <Popover
                            trigger="click"
                            content={
                                <div
                                    className="w-96 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 rounded-full">
                                    <div className="col-span-3 p-3 ">
                                        <div className="space-y-2 ">
                                            <div
                                                className="pr-2 pl-2 pt-4 pb-4 w-full flex items-center space-x-4 hover:bg-gray-600 hover:rounded-xl">
                                                <svg
                                                    className="w-12 h-12 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                                </svg>
                                                <span
                                                    className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
                                                         {name}
                                                     </span>
                                            </div>
                                            <div>
                                                <div className={'hover:bg-gray-600 hover:rounded-xl'}>
                                                    <Link to="/setiing">
                                                        <button
                                                            className="pr-2 pl-2 pt-4 pb-4 w-full flex items-center space-x-4 ">
                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white"
                                                                 aria-hidden="true"
                                                                 xmlns="http://www.w3.org/2000/svg" width="24"
                                                                 height="24"
                                                                 fill="currentColor" viewBox="0 0 24 24">
                                                                <path fill-rule="evenodd"
                                                                      d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
                                                                      clip-rule="evenodd"/>
                                                            </svg>
                                                            <span
                                                                className="text-base font-semibold text-gray-900 dark:text-white">
                                            Setting
                                        </span>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div  className={'hover:bg-gray-600 hover:rounded-xl'}>
                                                    <Link to="/setiing">
                                                        <button
                                                            className="pr-2 pl-2 pt-4 pb-4 w-full flex items-center space-x-4"> {/* Sử dụng flexbox và space-x-2 để tạo khoảng cách giữa icon và chữ */}
                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white"
                                                                 aria-hidden="true"
                                                                 xmlns="http://www.w3.org/2000/svg" width="24"
                                                                 height="24"
                                                                 fill="currentColor" viewBox="0 0 24 24">
                                                                <path fill-rule="evenodd"
                                                                      d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                                                                      clip-rule="evenodd"/>
                                                            </svg>

                                                            <span
                                                                className="text-base font-semibold text-gray-900 dark:text-white">
                                            Display & Accessibility
                                        </span>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className={'hover:bg-gray-600'}>
                                                    <Link to="/setiing">
                                                        <button
                                                            className="pr-2 pl-2 pt-4 pb-4 w-full flex items-center space-x-4"> {/* Sử dụng flexbox và space-x-2 để tạo khoảng cách giữa icon và chữ */}
                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white"
                                                                 aria-hidden="true"
                                                                 xmlns="http://www.w3.org/2000/svg" width="24"
                                                                 height="24"
                                                                 fill="none"
                                                                 viewBox="0 0 24 24">
                                                                <path stroke="currentColor" stroke-linecap="round"
                                                                      stroke-linejoin="round" stroke-width="2"
                                                                      d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
                                                            </svg>

                                                            <span
                                                                className="text-base font-semibold text-gray-900 dark:text-white">
                                                        Log out
                                                    </span>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        >
                            <button
                                className="inline-flex flex-col items-center justify-center px-5 group"
                                type="button"
                            >
                                <svg
                                    className="w-12 h-12 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                            </button>
                        </Popover>

                        {/* Modal toggle */}


                    </div>
                    {/*Modal*/}
                    {isModalOpen && (
                        <div
                            id="default-modal"
                            tabIndex={-1}
                            aria-hidden="true"
                            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
                        >
                            <div className="relative p-4 w-full max-w-2xl max-h-full">
                                {/* Modal content */}
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    {/* Modal header */}
                                    <div
                                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-b dark:border-gray-600">
                                        <svg
                                            className="w-12 h-12 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                        </svg>
                                        <span className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
                                            {name}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={toggleModal}
                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 14"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    {/* Modal body */}
                                    <div className="p-4 md:p-5 space-y-6">
                                        <div>
                                            <Link to="/setiing">
                                                <div
                                                    className="flex items-center space-x-4"> {/* Sử dụng flexbox và space-x-2 để tạo khoảng cách giữa icon và chữ */}
                                                    <svg className="w-6 h-6 text-gray-800 dark:text-white"
                                                         aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="currentColor" viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd"
                                                              d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <span
                                                        className="text-base font-semibold text-gray-900 dark:text-white">
                                            Setting
                                        </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="/setiing">
                                                <div
                                                    className="flex items-center space-x-4"> {/* Sử dụng flexbox và space-x-2 để tạo khoảng cách giữa icon và chữ */}
                                                    <svg className="w-6 h-6 text-gray-800 dark:text-white"
                                                         aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="currentColor" viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd"
                                                              d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                                                              clip-rule="evenodd"/>
                                                    </svg>

                                                    <span
                                                        className="text-base font-semibold text-gray-900 dark:text-white">
                                            Display & Accessibility
                                        </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="/setiing">
                                                <div
                                                    className="flex items-center space-x-4"> {/* Sử dụng flexbox và space-x-2 để tạo khoảng cách giữa icon và chữ */}
                                                    <svg className="w-6 h-6 text-gray-800 dark:text-white"
                                                         aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none"
                                                         viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
                                                    </svg>

                                                    <span
                                                        className="text-base font-semibold text-gray-900 dark:text-white">
                                                        Log out
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

        </>
    );
}

export default AuthNavigate;