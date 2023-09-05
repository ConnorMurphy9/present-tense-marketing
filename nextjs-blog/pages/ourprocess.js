import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function ourprocess() {
    return <>
      <Layout>
        <Head>
          <title>
            Our Process
          </title>
        </Head>
        <h1>
          Our Process
        </h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>;
  }