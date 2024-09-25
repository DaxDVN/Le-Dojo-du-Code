import React, { useState } from 'react';
import global from '../../assets/images/publicIcon.svg';
import friends from '../../assets/images/friendsIcon.svg';
import onlyme from '../../assets/images/onlymeIcon.svg';
import logo from '../../assets/images/logoPage.jpg';
import photo from '../../assets/images/photo.svg';
import tagFriend from '../../assets/images/tagFriend.svg';
import location from '../../assets/images/location.svg';
import felling from '../../assets/images/felling.svg';



const CreateNewFeed: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false); // Thêm state để toggle option

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleOptions = () => {
        setIsOptionsVisible(!isOptionsVisible); // Toggle hiển thị các options
    };

    const name = 'Nguyen Duc';

    return (
        <>
            <input />
            <div className="relative p-4 w-full max-w-xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                            <div className="flex space-x-4">
                                <img src={logo} alt={'Logo'} className={'rounded-full h-10 w-10'} />
                                <input
                                    onClick={toggleModal}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full w-full focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder={`What's on your mind, ${name}?`}
                                />
                            </div>
                            <div className="flex items-center justify-between p-4 md:p-2 border-t rounded-t dark:border-gray-600">
                                <div className={'text-white flex space-x-14'}>
                                    <button className={'flex'}>
                                        <img src={photo} alt={'Photo'}/>
                                        <span >Photo/Video</span>
                                    </button>
                                    <button className={'flex'}>
                                        <img src={tagFriend} alt={'Tag Friend'}/>
                                        <span>Tag people</span>
                                    </button>
                                    <button className={'flex'}>
                                        <img src={felling} alt={'Felling'}/>
                                        <span>Felling/Activity</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div
                    id="authentication-modal"
                    tabIndex={-1}
                    aria-hidden={!isModalOpen}
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-50"
                    onClick={toggleModal} // Close modal when overlay is clicked
                >
                    <div className="relative p-4 w-full max-w-md max-h-full" onClick={(e) => e.stopPropagation()}>
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex-grow text-center">
                                    Create post
                                </h3>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent click from bubbling up to the overlay
                                        toggleModal();
                                    }}
                                    type="button"
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
                                            strokeWidth={2}
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form className="space-y-6" action="#">
                                    <div>
                                        <div className={'flex space-x-4 mb-2'}>
                                            <img src={logo} alt={'Logo'} className={'rounded-full h-12 w-12'}/>
                                            <div>
                                            <span className={'text-white'}>
                                                {name}
                                            </span>
                                                <section className={'text-white'} onClick={toggleOptions}>
                                                    <div className="flex items-center cursor-pointer">
                                                        <img src={global} alt={'Public icon'} className="h-5 w-5 mr-2"/>
                                                        <span>Public</span>
                                                    </div>

                                                    {/* Hiển thị 3 option khi click */}
                                                    {isOptionsVisible && (
                                                        <div className="mt-2">
                                                            <div className="flex items-center cursor-pointer">
                                                                <img src={friends} alt={'Friends icon'}
                                                                     className="h-5 w-5 mr-2"/>
                                                                <span>Friends</span>
                                                            </div>
                                                            <div className="flex items-center cursor-pointer">
                                                                <img src={onlyme} alt={'Only me icon'}
                                                                     className="h-5 w-5 mr-2"/>
                                                                <span>Only me</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </section>
                                            </div>
                                        </div>
                                        <textarea
                                            className="bg-gray-700 text-gray-900 text-sm rounded-lg block h-52 w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder={`What's on your mind, ${name}?`}
                                        />
                                    </div>
                                    <div className={'flex justify-between m-4'}>
                                        <span className={'text-white'}>
                                            Add to your post
                                        </span>
                                        <div className={'flex space-x-4'}>
                                            <button>
                                                <img src={photo} alt={'Photo'}/>
                                            </button>
                                            <button>
                                                <img src={tagFriend} alt={'Tag Friend'}/>
                                            </button>
                                            <button>
                                                <img src={felling} alt={'Felling'}/>
                                            </button>
                                            <button>
                                                <img src={location} alt={'Location'}/>
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Post
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default CreateNewFeed;
