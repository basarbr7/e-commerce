import React from 'react'

const Account = ({className}) => {

  let accountList = [
    {
      id: 1,
      name: "My Account",
    },
    {
      id: 2,
      name: "My Wish List (0)",
    },
    {
      id: 3,
      name: "Compare (0)",
    },
    {
      id: 4,
      name: "Create an Account",
    },
    {
      id: 5,
      name: "Sign In",
    }
  ]

  return (
    <div className={`w-[232px] bg-1 p-6 shadow-md z-50 ${className}`}>
      <div className='w-5 h-5 bg-1 absolute -top-1 right-[12px] rotate-45 rounded-sm'></div>
        {accountList.map((item)=>(<p key={item.id} className='mb-2 font-medium text-sm cursor-pointer '>{item.name}</p>)) }
    </div>
  )
}

export default Account