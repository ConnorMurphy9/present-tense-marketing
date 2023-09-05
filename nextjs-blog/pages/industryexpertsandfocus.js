import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function IndustryExpertsAndFocus() {
    return <>
        <Layout>
          <Head>
            <title>
              Industry Experts and Focus
            </title>
          </Head>
          <h1>
            Industry Experts and Focus
          </h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </Layout>
    </>
        ;

  }