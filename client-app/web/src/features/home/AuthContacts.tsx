import React from 'react';
import logo from '../../assets/images/logoPage.jpg';
import create from '../../assets/images/create.svg'

function AuthContact() {
    const contacts = [
        {
            name: 'John Doe',
        },
    ];

    const repeatedContacts = Array.from({ length: 5 }, (_, index) => ({
        ...contacts[0],
        name: `${contacts[0].name} ${index + 1}`,
    }));

    return (
        <div className={'fixed top-0 right-0 mt-14'}>
            <div className={'bg-gray-600 w-80 max-h-screen overflow-y-auto bg-scroll'}>
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Contacts */}
                    <div className="flex items-center justify-between p-4 md:pl-5 md:pb-0 md:pr-5 md:pt-5 border-t-2 border-gray-600 rounded-t dark:border-gray-600"> {/* Thay border-b thành border-t */}
                        <span className="text-base font-semibold text-gray-900 dark:text-white">
                            Contacts
                        </span>
                    </div>

                    <div className="p-4 md:p-5 space-y-1  mb-4 ">
                        {repeatedContacts.map((contact, index) => (
                            <button key={index}
                                    className="flex w-full items-center space-x-4 hover:bg-gray-600 pt-4 pb-4">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src={logo}
                                    alt={`${contact.name}'s avatar`}
                                />
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {contact.name}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Community chats */}
                    <div className="flex items-center justify-between p-4 md:pl-5 md:pb-0 md:pr-5 md:pt-5 border-t-2 border-gray-600 dark:border-gray-600"> {/* Thay border-b thành border-t */}
                        <span className="text-base font-semibold text-gray-900 dark:text-white">
                            Community chats
                        </span>
                    </div>

                    <div className="p-4 md:p-5 space-y-1  mb-4 ">
                        {repeatedContacts.map((contact, index) => (
                            <button key={index}
                                    className="flex w-full items-center space-x-4 hover:bg-gray-600 pt-4 pb-4">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src={logo}
                                    alt={`${contact.name}'s avatar`}
                                />
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {contact.name}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Group chats */}
                    <div className="flex items-center justify-between p-4 md:pl-5 md:pb-0 md:pr-5 md:pt-5 border-t-2 border-gray-600 dark:border-gray-600"> {/* Thay border-b thành border-t */}
                        <span className="text-base font-semibold text-gray-900 dark:text-white">
                            Group chats
                        </span>
                    </div>

                    <div className="p-4 md:p-5 space-y-1  mb-4 ">
                        {repeatedContacts.map((contact, index) => (
                            <button key={index} className="flex w-full items-center space-x-4 hover:bg-gray-600 pt-4 pb-4">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src={logo}
                                    alt={`${contact.name}'s avatar`}
                                />
                                <span className="text-sm font-semibold text-gray-900 dark:text-white ">
                                    {contact.name}
                                </span>
                            </button>
                        ))}
                        <button className="w-full flex items-center space-x-4 pt-4 pb-4 hover:bg-gray-600">
                            <img
                                className="w-10 h-10 rounded-full"
                                src={create}
                                alt={'Create new group'}
                            />
                            <span className="text-sm font-semibold text-gray-900 dark:text-white ">
                                Create group chat
                            </span>
                        </button>

                        <div className="h-4"></div>

                        {/* Thêm khoảng trống */}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default AuthContact;
