import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function WhoWeAre() {
    return <>
      <Layout>
        <Head>
          <title>
            Who We Are
          </title>
        </Head>
        <h1>
          Who We Are
        </h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
    ;
  }