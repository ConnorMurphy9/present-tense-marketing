import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function ExamplesOfWorkInProduction() {
    return <>
      <Layout>
        <Head>
          <title>
            Examples of Work in Production
          </title>
        </Head>
        <h1>
          Examples of Work in Production
        </h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
    ;
  }