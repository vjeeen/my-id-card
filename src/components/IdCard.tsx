"use client";
import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
});

interface UserInfo {
  surname: string; lastName: string; firstName: string;
  regNum: string; gender: string; dateOfBirth: string;
  dateOfIssue: string; dateOfExpiry: string; photo: string;
}

export default function IdCard() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    surname: "Боржигин", lastName: "Хашсансар", firstName: "Ану-Үжин",
    regNum: "596468675497", gender: "Эмэгтэй", dateOfBirth: "2005/01/15",
    dateOfIssue: "2021/01/10", dateOfExpiry: "2030/01/10",
    photo: ""
  });

  const [isDocumentsVisible, setIsDocumentsVisible] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempInfo, setTempInfo] = useState<UserInfo>(userInfo);

  useEffect(() => {
    const saved = localStorage.getItem('id-data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUserInfo(parsed);
        setTempInfo(parsed);
      } catch (e) {
        console.error("Error parsing saved data", e);
      }
    }
  }, []);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempInfo({ ...tempInfo, photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUserInfo(tempInfo);
    localStorage.setItem('id-data', JSON.stringify(tempInfo));
    setIsEditing(false);
  };

  return (
    <div className={`${inter.className} w-full min-h-screen bg-gradient-to-b from-[#E8EFFF] via-[#F3F6FF] to-[#F0F2F5] font-sans pb-10 overflow-x-hidden`}>
      <div className="px-3 pt-6 w-full mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-5 px-1">
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

        {/* SECTION: TOGGLE */}
        <div className="bg-white px-3 py-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
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

        {/* CARD PREVIEW */}
        {isDocumentsVisible && (
          <div className="bg-white py-3 px-0.5 rounded-2xl shadow mb-6 overflow-hidden">
            <div
              onClick={() => setIsOpen(true)}
              className="relative w-full aspect-[1.58/1] rounded-2xl overflow-hidden cursor-pointer transition-transform active:scale-[0.98]"
            >
              <img src="/card-front.svg" className="absolute inset-0 w-full h-full object-cover" alt="ID Preview" />
              <div className="relative z-10 p-4 h-full pointer-events-none text-black">
                <img src={userInfo.photo} className="absolute object-cover rounded-sm" style={{ top: "26%", left: "3%", width: "23%", height: "57%" }} alt="Profile" />
                <div className="absolute text-[8px]" style={{top: "27%", left: "30%"}}>{userInfo.surname}</div>
                <div className="absolute text-[8px]" style={{ top: "42%", left: "30%" }}>{userInfo.lastName}</div>
                <div className="absolute text-[8px]" style={{ top: "55%", left: "30%" }}>{userInfo.firstName}</div>
                <div className="absolute text-[8px]" style={{ top: "89%", left: "30%" }}>{userInfo.regNum}</div>
                <div className="absolute text-[8px]" style={{ top: "66%", left: "30%" }}>{userInfo.gender}</div>
                <div className="absolute text-[8px]" style={{ top: "79%", left: "30%" }}>{userInfo.dateOfBirth}</div>
              </div>
            </div>
          </div> 
        )}
      </div>

      {/* BOTTOM SHEET */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => { setIsOpen(false); setIsFlipped(false); setIsEditing(false); }}
        />

        <div className={`absolute bottom-0 left-0 right-0 w-full bg-white rounded-t-3xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} 
             style={{ height: isEditing ? '85vh' : '55vh' }}>
          
          <div className="w-12 h-1 bg-gray-200 rounded-xl mx-auto mb-1 mt-3" />

          <div className="px-4 flex flex-col items-center h-full">
            {isEditing ? (
              <div className="w-full px-2 pt-4 space-y-4 overflow-y-auto pb-10">
                <h3 className="text-lg font-bold text-gray-800 text-center mb-4">Мэдээлэл засах</h3>
                <div className="space-y-3">
                  <input className="w-full p-3 bg-gray-50 border rounded-xl text-sm" placeholder="Овог" value={tempInfo.surname} onChange={e => setTempInfo({...tempInfo, surname: e.target.value})} />
                  <input className="w-full p-3 bg-gray-50 border rounded-xl text-sm" placeholder="Эцэг/Эх" value={tempInfo.lastName} onChange={e => setTempInfo({...tempInfo, lastName: e.target.value})} />
                  <input className="w-full p-3 bg-gray-50 border rounded-xl text-sm" placeholder="Нэр" value={tempInfo.firstName} onChange={e => setTempInfo({...tempInfo, firstName: e.target.value})} />
                  <input className="w-full p-3 bg-gray-50 border rounded-xl text-sm" placeholder="Төрсөн он, сар, өдөр" value={tempInfo.dateOfBirth} onChange={e => setTempInfo({...tempInfo, dateOfBirth: e.target.value})} />
                  <input className="w-full p-3 bg-gray-50 border rounded-xl text-sm" placeholder="Регистр" value={tempInfo.regNum} onChange={e => setTempInfo({...tempInfo, regNum: e.target.value})} />
                  <input className="w-full p-3 bg-gray-50 border rounded-xl text-sm" placeholder="Зургийн URL" value={tempInfo.photo} onChange={e => setTempInfo({...tempInfo, photo: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500 ml-1 font-medium">Цээж зураг</label>
                  <input type="file" accept="image/*" onChange={handleFileChange} className="w-full text-sm" />
                </div>
                <div className="flex space-x-3 pt-6">
                  <button onClick={() => setIsEditing(false)} className="flex-1 py-4 bg-gray-100 font-bold rounded-2xl">Цуцлах</button>
                  <button onClick={handleSave} className="flex-1 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200">Хадгалах</button>
                </div>
              </div>
            ) : (
              <>
                <div className="px-6 flex justify-center items-center mb-2 mt-3 h-7">
                   <h3 className="text-xs text-gray-800 font-medium">Иргэний үнэмлэх</h3>
                </div>
                <div className="w-full aspect-[1.58/1] cursor-pointer [perspective:1200px] mb-6" onClick={() => setIsFlipped(!isFlipped)}>
                  <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                    
                    {/* FRONT */}
                    <div 
                      className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-white shadow-lg backface-hidden"
                      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                    >
                      <img src="/card-front.svg" className="absolute inset-0 w-full h-full object-cover" alt="ID Front" />
                      <div 
                        className="relative z-10 p-3 h-full text-black select-none pointer-events-none"
                        ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
                        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                      >
                        <img src={userInfo.photo} className="absolute object-cover" style={{ top: "26%", left: "3%", width: "23%", height: "57%" }} alt="Profile" />
                        <div className="absolute text-[8.5px]" style={{ top: "27%", left: "30%" }}>{userInfo.surname}</div>
                        <div className="absolute text-[8.5px]" style={{ top: "42%", left: "30%" }}>{userInfo.lastName}</div>
                        <div className="absolute text-[8.5px]" style={{ top: "55%", left: "30%" }}>{userInfo.firstName}</div>
                        <div className="absolute text-[8.5px]" style={{ top: "89%", left: "30%" }}>{userInfo.regNum}</div>
                        <div className="absolute text-[8.5px]" style={{ top: "66%", left: "30%" }}>{userInfo.gender}</div>
                        <div className="absolute text-[8.5px]" style={{ top: "79%", left: "30%" }}>{userInfo.dateOfBirth}</div>
                      </div>
                    </div>

                    {/* BACK */}
                    <div 
                      className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-white shadow-lg backface-hidden"
                      style={{ 
                        backfaceVisibility: 'hidden', 
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)' 
                      }}
                    >
                      <img src="/card-back.svg" className="absolute inset-0 w-full h-full object-cover" alt="ID Back" />
                      <div 
                        className="relative z-10 p-3 h-full text-black"
                        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                      >
                        <div className="absolute text-[8.5px]" style={{ top: "31%", left: "34%" }}>{userInfo.dateOfIssue}</div>
                        <div className="absolute text-[8.5px]" style={{ top: "42%", left: "34%" }}>{userInfo.dateOfExpiry}</div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="w-full max-w-[390px] space-y-2 px-2">
                  <button className="w-full py-4 text-[14px] text-white font-bold bg-blue-600 rounded-2xl active:scale-[0.96]">Лавлагаа авах</button> 
                  <button onClick={() => { setIsEditing(true); setTempInfo(userInfo); }} className="w-full py-4 text-[14px] text-blue-600 font-bold bg-blue-50 rounded-2xl active:scale-[0.96] border border-blue-100">Дахин захиалах</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
