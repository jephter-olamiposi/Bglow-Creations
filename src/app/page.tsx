

import Hero  from '../component/Hero';


const page = () => {
  return (
    <>

      <Hero/>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Welcome to Fashionista</h1>
        <p className="mt-4 text-lg">Discover the latest trends in fashion.</p>
      </div>
    </>
  );
};

export default page;
