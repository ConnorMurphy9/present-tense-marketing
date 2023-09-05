import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function FollowUs() {
    return <>
          <Layout>
              <Head>
                <title>
                  Follow Us
                </title>
              </Head>
              <h1>
                Follow Us
              </h1>
              <h2>
                <Link href="/">Back to home</Link>
              </h2>
          </Layout>
           </> 
    ;
  }