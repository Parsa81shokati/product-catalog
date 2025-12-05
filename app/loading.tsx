import React from 'react'

function loading() {
  return (
  <div className="w-full flex justify-center items-center py-20">
      <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full"></div>
    </div>
  )
}

export default loading