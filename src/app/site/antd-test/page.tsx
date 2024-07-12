import React from 'react'
import {Button, Input} from 'antd'

const TestPage = () => {
  return (
    <div className=' flex h-screen  items-center justify-center flex-col gap-5'>
      <Button type="primary">Button</Button>
      <Button type="default">Button</Button>
      <Input placeholder="Basic usage" />
    </div>
  )
}

export default TestPage
