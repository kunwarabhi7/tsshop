import React from 'react'
import {  GetServerSideProps } from 'next'


interface MyPageProps {
    product: string;
  }

const store = ({product}:MyPageProps) => {
    console.log(product)
  return (
    <div>store</div>
  )
}

export default store

export  const getServerSideProps : GetServerSideProps = async (contex)=> {
const res = await fetch('https://dummyjson.com/products')   
const products = await res.json()
const product = products.products
return{
    props:{
        product
    }
}
}