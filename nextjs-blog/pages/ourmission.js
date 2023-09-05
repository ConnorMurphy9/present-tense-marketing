import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function ourmission() {
    return <>
      <Layout>
        <Head>
          <title>
            Our Mission
          </title>
        </Head>
        <h1>
          Our Mission
        </h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>;
  }