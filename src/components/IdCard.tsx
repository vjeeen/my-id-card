"use client";
import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
});

interface UserInfo {
  surname: string; lastName: string; firstName: string;
  regNum: string; gender: string; birthPlace: string;
  address: string; photo: string;
}

export default function IdCard() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    surname: "БОРЖИГИН", lastName: "БАТ-ЭРДЭНЭ", firstName: "ТЭМҮҮЛЭН",
    regNum: "АА99010112", gender: "ЭРЭГТЭЙ", birthPlace: "УЛААНБААТАР ХОТ",
    address: "БЗД, 16-Р ХОРОО, 45-Р БАЙР, 201 ТООТ",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  });

  const [isDocumentsVisible, setIsDocumentsVisible] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('id-data');
    if (saved) setUserInfo(JSON.parse(saved));
  }, []);

  return (
    <div className={`${inter.className} w-full min-h-screen bg-gradient-to-b from-[#E8EFFF] via-[#F3F6FF] to-[#F0F2F5] font-sans pb-10`}>
      
      {/* 1. ҮНДСЭН CONTAINER */}
      <div className="p-6 pt-12 max-w-md mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8 px">
          <div className="flex-shrink-0 bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 text-gray-800 active:scale-90 transition-all cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12.0001L15 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
            </svg>
          </div>
          <h2 className="text-sm font-bold text-black tracking-tight text-center flex-1">
            Миний бичиг баримт
          </h2>
          <div className="flex-shrink-0 bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 text-gray-500 active:scale-90 transition-all cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2716 2 18.1763 3.57111 20.0007 6V2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>

        {/* SECTION: ТОГГЛ (Бичиг баримтын мэдээлэл) */}
        <div className="bg-white px-2 py-2 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 ">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L5.35759 6.7718C5.35065 6.77731 5.34371 6.78282 5.33678 6.78834C3.52261 8.23329 2.1265 10.0699 1.32918 11.6646C1.22361 11.8757 1.22361 12.1243 1.32918 12.3354C2.1265 13.9301 3.52261 15.7667 5.33678 17.2117C7.15245 18.6578 9.43736 19.75 12 19.75C13.8138 19.75 15.4885 19.2029 16.9561 18.3703L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289ZM13.8156 15.2299L8.77015 10.1844C8.44009 10.736 8.25 11.3817 8.25 12.0711C8.25 14.1029 9.89711 15.75 11.9289 15.75C12.6183 15.75 13.264 15.5599 13.8156 15.2299ZM19.7703 16.2348C21.0483 14.9905 22.0444 13.5883 22.6708 12.3354C22.7764 12.1243 22.7764 11.8757 22.6708 11.6646C21.8735 10.0699 20.4774 8.23329 18.6632 6.78834C16.8476 5.3422 14.5626 4.25 12 4.25C10.7524 4.25 9.57069 4.50885 8.47686 4.94138L19.7703 16.2348Z" fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 text-xs">Бичиг баримтын мэдээлэл</span>
          </div>
          <button

            onClick={() => setIsDocumentsVisible(!isDocumentsVisible)}

            className={`relative inline-flex h-[22px] w-[52px] items-center rounded-xl transition-colors ${isDocumentsVisible ? 'bg-blue-600' : 'bg-gray-300'}`}

          >

            <span className={`inline-block h-[18px] w-[30px] transform rounded-xl bg-white transition-transform ${isDocumentsVisible ? 'translate-x-5' : 'translate-x-1'}`} />

          </button>
        </div>

        {/* КАРТ ХЭСЭГ (Тогглоос салгаж гаргаснаар томорно) */}
        {isDocumentsVisible && (
          <div className="bg-white py-3 px-1 rounded-2xl shadow border border-gray-100 mb-6 transition-all duration-500 overflow-hidden">
            <div
              onClick={() => setIsOpen(true)}
              className="relative w-full aspect-[1.58/1] rounded-2xl overflow-hidden  cursor-pointer transition-transform active:scale-[0.98] border border-gray-200"
            >
              <img src="/card-front.svg" className="absolute inset-0 w-full h-full object-cover" alt="ID Preview" />
              <div className="relative z-10 p-4 h-full pointer-events-none text-black font-bold">
                <img src={userInfo.photo} className="absolute object-cover rounded-sm" style={{ top: "25%", left: "5%", width: "23%", height: "46%" }} alt="Profile" />
                <div className="absolute text-[10px]" style={{ top: "28%", left: "31%" }}>{userInfo.surname}</div>
                <div className="absolute text-[10px]" style={{ top: "42%", left: "31%" }}>{userInfo.lastName}</div>
                <div className="absolute text-[10px] uppercase" style={{ top: "56%", left: "31%" }}>{userInfo.firstName}</div>
                <div className="absolute text-[11px] font-mono" style={{ bottom: "11%", left: "31%" }}>{userInfo.regNum}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2. BOTTOM SHEET - DETAIL VIEW */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => { setIsOpen(false); setIsFlipped(false); }}
        />

        <div className={`absolute bottom-0 left-0 right-0 w-full bg-white rounded-t-[2.5rem] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]  ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} 
             style={{ height: '52vh' }}>
          
          <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto my-4" />

          <div className="px-6 flex justify-between items-center mb-6">
             <div className="w-8" />
             <h3 className="text-xs text-gray-800">Иргэний үнэмлэх</h3>
             <button onClick={() => { setIsOpen(false); setIsFlipped(false); }} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
             </button>
          </div>

          <div className="px-4 flex flex-col items-center">
            <div className="w-full max-w-[340px] aspect-[1.58/1] cursor-pointer [perspective:1200px] mb-6" onClick={() => setIsFlipped(!isFlipped)}>
              <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                {/* FRONT */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden border border-gray-100">
                  <img src="/card-front.svg" className="absolute inset-0 w-full h-full object-cover" alt="ID Front" />
                  <div className="relative z-10 p-3 h-full text-black font-bold">
                     <img src={userInfo.photo} className="absolute object-cover rounded-sm" style={{ top: "25%", left: "5%", width: "23%", height: "46%" }} alt="Profile" />
                     <div className="absolute text-[8.5px]" style={{ top: "28%", left: "31%" }}>{userInfo.surname}</div>
                     <div className="absolute text-[8.5px]" style={{ top: "42%", left: "31%" }}>{userInfo.lastName}</div>
                     <div className="absolute text-[8.5px] uppercase" style={{ top: "56%", left: "31%" }}>{userInfo.firstName}</div>
                     <div className="absolute text-[10.5px] font-mono" style={{ bottom: "11%", left: "31%" }}>{userInfo.regNum}</div>
                  </div>
                </div>
                {/* BACK */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden bg-white">
                  <img src="/card-back.svg" className="absolute inset-0 w-full h-full object-cover" alt="ID Back" />
                </div>
              </div>
            </div>
            <div className="text-[12px] text-white font-medium bg-blue-600 px-1 py-2 rounded-sm ">
              Лавлагаа авах
            </div>
            <div className="text-[12px] text-blue-600 font-medium bg-blue-100 px-3 py-2 rounded-sm ">
              Дахин захиалах
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
