import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>This is the main page</h1>
    </div>
  )
}

export async function getServerSideProps(ctx){
  return {
    props: {
      title: "Dogs App - Main Page",
      description: "THis page will show all the dogs."
    }
  }
}