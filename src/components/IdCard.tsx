<div
  className="w-full aspect-[1.58/1] cursor-pointer [perspective:1200px] mb-6"
  onClick={() => setIsFlipped(!isFlipped)}
>
  <div
    className="relative w-full h-full duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)]"
    style={{
      transformStyle: 'preserve-3d',
      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    }}
  >
    {/* FRONT */}
    <div
      className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-white shadow-lg"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <img
        src="/card-front.svg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="ID Front"
      />

      <div className="relative z-10 p-3 h-full text-black select-none pointer-events-none">
        <img
          src={userInfo.photo}
          className="absolute object-cover"
          style={{ top: '26%', left: '3%', width: '23%', height: '57%' }}
          alt="Profile"
        />
        <div className="absolute text-[8.5px]" style={{ top: '27%', left: '30%' }}>
          {userInfo.surname}
        </div>
        <div className="absolute text-[8.5px]" style={{ top: '42%', left: '30%' }}>
          {userInfo.lastName}
        </div>
        <div className="absolute text-[8.5px]" style={{ top: '55%', left: '30%' }}>
          {userInfo.firstName}
        </div>
        <div className="absolute text-[8.5px]" style={{ top: '66%', left: '30%' }}>
          {userInfo.gender}
        </div>
        <div className="absolute text-[8.5px]" style={{ top: '79%', left: '30%' }}>
          {userInfo.dateOfBirth}
        </div>
        <div className="absolute text-[8.5px]" style={{ top: '89%', left: '30%' }}>
          {userInfo.regNum}
        </div>
      </div>
    </div>

    {/* BACK */}
    <div
      className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-white shadow-lg"
      style={{
        transform: 'rotateY(180deg)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <img
        src="/card-back.svg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="ID Back"
      />

      <div className="relative z-10 p-3 h-full text-black select-none pointer-events-none">
        <div className="absolute text-[8.5px]" style={{ top: '31%', left: '34%' }}>
          {userInfo.dateOfIssue}
        </div>
        <div className="absolute text-[8.5px]" style={{ top: '42%', left: '34%' }}>
          {userInfo.dateOfExpiry}
        </div>
      </div>
    </div>
  </div>
</div>

