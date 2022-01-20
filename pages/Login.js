import Head from "next/head";
import Header from "../components/Header";
import {getProviders, signIn} from 'next-auth/react'

function Login({providers}) {
    console.log(providers)
    return (
        <div>
          <Head>
            <title>Disney | Login </title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Header />
          {/* {Object.values(providers.map((provider) => (
                <div key={provider.name}>
                    <div>
                        <button className="select-none uppercase ml-auto border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
                        onClick={() => signIn(provider.id, {callbackUrl: '/'})}
                        >
                            login
                        </button>
                    </div>
                </div>
            )))} */}


{Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  className="
              
                  select-none uppercase ml-auto border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200
                  "
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
                </button>
              </div>
            </div>
          ))}
<h1>sdfsdfsdf</h1>

{Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }

    export default Login
    
    export async function getServerSideProps(context) {
      const providers = await getProviders();
    
      return {
        props: {
          providers,
        },
      };
    }

