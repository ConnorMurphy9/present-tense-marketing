import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';


export default function SignUpForNewsletter() {
    return <>
        <Layout>
          <Head>
            <title>
              Sign Up for Our Newsletter
            </title>
          </Head>
          <h1>
            Sign Up for Our Newsletter
          </h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </Layout>
      </>
    ;
  }