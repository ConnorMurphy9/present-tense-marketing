import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function clienttestimonials() {
    return <>
      <Layout>
        <Head>
          <title>
            Client Testimonials
          </title>
        </Head>
        <h1>
          Client Testimonials
        </h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
    ;
  }