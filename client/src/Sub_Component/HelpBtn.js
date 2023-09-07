import React from 'react'
import {BiHelpCircle} from 'react-icons/bi';
// import Button  from 'react-bootstrap/Button';

function HelpBtn() {
  return (
    <div className=''>
       <button class="group flex items-center fixed rounded-3xl bg-black text-white pt-2 pb-2 pl-3 pr-4 right-5 bottom-5 font-medium font-bold text-base shadow-sm cursor-pointer z-[10]">
       <BiHelpCircle className='text-3xl mr-1'/>
        Help
      </button>
    </div>
  )
}

export default HelpBtn
