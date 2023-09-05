import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function WhatWeDo() {
    return <>
        <Layout>
        <Head>
          <title>
            What We DO
          </title>
        </Head>
        <h1>
          What We Do
        </h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
    ;
  }