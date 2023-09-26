import Head from "next/head";
import Image from "next/image";

async function fetchUser( id ) {
  const res = await fetch(`https://reqres.in/api/users/${ id }`);
  const data = await res.json();
  return data.data;
}


const UserPage = async ({ params: { id } }) => {

  const user =  await fetchUser( id );

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div>
        <h1 className="text-2xl pb-10 text-center">User Datails</h1>
        <div className="flex justify-around">
          <Image 
            alt={ user.email }
            className="rounded-full"
            height={ 250 }  
            src={ user.avatar }
            width={ 250 } 
          />
          <div>
            <h3 className="text-2xl">{ user.id } - { user.first_name } { user.last_name }</h3>
            <p>{ user.email }</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserPage;
