import React from 'react'

const Register = () => {

  return (
  <div className='w-full min-h-screen flex justify-center items-center'>
      <div className='w-[400px] h-auto bg-slate-100 border-[1px] border-slate-300 rounded-[8px] box-border p-[30px]'>

        <div className='pb-[24px] flex flex-col gap-[3px]'>
          <div className='font-bold text-[20px]'>Register</div>
          <div className='font-normal text-[15px]'>Fill your details to continue</div>
        </div>
      
      <div className='flex flex-col gap-[24px]'>

      {/* fields */}
      <div className='flex flex-col gap-[8px]'>
        <div><div className='text-[16px] font-medium'>Name</div></div>
        <div><input type="text" className='w-full h-[40px] rounded-[8px] px-[12px] text-[15px] border-[1px] border-slate-300' placeholder='eg: Alex cray'/></div>
      </div>

      <div className='flex flex-col gap-[8px]'>
        <div><div className='text-[16px] font-medium'>Username</div></div>
        <div><input type="text" className='w-full h-[40px] rounded-[8px] px-[12px] text-[15px] border-[1px] border-slate-300' placeholder='@example'/></div>
      </div>

      <div className='flex flex-col gap-[8px]'>
        <div><div className='text-[16px] font-medium'>Email</div></div>
        <div><input type="text" className='w-full h-[40px] rounded-[8px] px-[12px] text-[15px] border-[1px] border-slate-300' placeholder='example@domain.com'/></div>
      </div>

      <div className='flex flex-col gap-[8px]'>
        <div><div className='text-[16px] font-medium'>Password</div></div>
        <div><input type="password" className='w-full h-[40px] rounded-[8px] px-[12px] text-[15px] border-[1px] border-slate-300' placeholder='xxx xxx xxx'/></div>
      </div>

      <div className='flex flex-col gap-[8px]'>
        <div><div className='text-[16px] font-medium'>Re-enter Password</div></div>
        <div><input type="password" className='w-full h-[40px] rounded-[8px] px-[12px] text-[15px] border-[1px] border-slate-300' placeholder='xxx xxx xxx'/></div>
      </div>


      <div className='flex flex-col pt-[12px]'>
        <button className='w-full bg-black text-white font-semibold text-[18px] py-[12px] rounded-[8px]'>Register</button>
      </div>

      </div>

      </div>
  </div>
  )
}

export default Register