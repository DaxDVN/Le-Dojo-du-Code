import React, { useState } from 'react';
import logo from '../../assets/images/logoPage.jpg';
import picture from '../../assets/images/picture.jpg';
import mockAvatar from '../../assets/images/mockAvatar.jpeg';
import addNewStory from '../../assets/images/add.svg';

const AuthStory = () => {
    const itemsPerPage = 6; // Số lượng thẻ hiển thị mỗi lần
    const [startIndex, setStartIndex] = useState(0); // Quản lý chỉ số bắt đầu

    // Giả sử bạn có nhiều thẻ div, đây là một mảng mẫu chứa các phần tử
    const items = [
        {
            createStory: true, // Đây là thẻ Create Story
            logo: mockAvatar,
            picture: addNewStory
        },
        ...Array(19).fill({
            logo: logo,
            picture: picture
        })
    ];

    // Tính toán các thẻ sẽ được hiển thị dựa trên chỉ số bắt đầu
    const endIndex = startIndex + itemsPerPage;
    const visibleItems = items.slice(startIndex, endIndex);

    // Hàm điều hướng sang trang tiếp theo
    const nextPage = () => {
        if (endIndex < items.length) {
            setStartIndex(startIndex + 1); // Tăng chỉ số bắt đầu lên 1
        }
    };

    // Hàm điều hướng về trang trước đó
    const prevPage = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1); // Giảm chỉ số bắt đầu xuống 1
        }
    };

    return (
        <div className="flex items-center justify-between w-full relative">
            {/* Container chứa tất cả các thẻ hiển thị ngang hàng */}
            <div className="flex justify-center space-x-1 overflow-hidden items-center">
                {/* Nút Prev chỉ hiển thị khi không phải thẻ đầu tiên */}
                {startIndex > 0 && (
                    <button onClick={prevPage} type="button"
                            className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev>
                    <span
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                    </button>
                )}

                {/* Hiển thị các thẻ được chọn dựa trên visibleItems */}
                {visibleItems.map((item, index) => (
                    <div key={index} className="relative ">
                        {item.createStory ? (
                            // Thẻ Create Story
                            <div className="relative">
                                <img src={item.logo} alt={'Mock Avatar'} className={'rounded-xl h-52 w-32'}/>
                                <div className={'absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center flex-col'}>
                                    <img src={item.picture} alt={'Add new story'}
                                         className={'rounded-full h-10 w-10'}/>
                                    <span className={'text-xs'}>Create story</span>
                                </div>
                            </div>
                        ) : (
                            // Các thẻ thông thường
                            <div className="relative">
                                <img src={item.logo} alt={'Avatar User'}
                                     className={'absolute top-3 left-3 rounded-full h-10 w-10'}/>
                                <img src={item.picture} alt={'Mock Picture'} className={'rounded-xl h-52 w-32'}/>
                            </div>
                        )}
                    </div>
                ))}

                {/* Nút Next chỉ hiển thị khi không phải thẻ cuối cùng */}
                {endIndex < items.length && (
                    <button onClick={nextPage} type="button"
                            className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next>
                    <span
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default AuthStory;
