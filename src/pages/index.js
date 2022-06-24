import DolphinCorner from '@components/DolphinCorner';
import DropletsCarousel from '@components/DropletsCarousel';
import IconButton from '@components/common/IconButton';
import Facebook from '@components/common/icons/Facebook';
import Google from '@components/common/icons/Google';
import Twitter from '@components/common/icons/Twitter';
import TextField from '@components/common/TextField';

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center text-carbon-700">
      <div className="relative z-10 flex h-[65rem] w-[100rem] items-center justify-center overflow-hidden rounded-2xl bg-jade-100">
        <div className="absolute -top-44 -right-36 -z-10 h-[40rem] w-[40rem] -rotate-45 rounded-[20rem/20rem] bg-jade-700"></div>
        <div className="absolute -bottom-44 -left-36 -z-10 h-[40rem] w-[40rem] -rotate-45 rounded-[20rem/20rem] bg-jade-700"></div>
        <div className="flex h-[50rem] w-[80rem] items-center justify-center rounded-xl bg-white p-8">
          <div className="relative flex h-full w-1/2 flex-col items-center justify-end overflow-hidden rounded-2xl bg-jade-100">
            <DolphinCorner />
            <img
              src="./hurlbox.png"
              alt="hurlbox"
              className="absolute top-5 left-5"
            />
            <h1 className="my-3 text-[2.5rem] font-[600] z-10">
              Welcome to Hurlbox!
            </h1>
            <span className="my-1 w-2/3 pb-10 text-center text-sm leading-8 text-carbon-500 z-10">
              We are a community, together helping thousands of people out there
              who are struggling
            </span>
            <DropletsCarousel />
          </div>
          <div className="flex w-1/2 flex-col items-center justify-center px-12">
            <span className="py-4 text-[2.5rem] font-[600]">Get Started</span>
            <span className="my-1 pb-10 text-carbon-500">
              Already have an account?{' '}
              <a
                href="#"
                className="font-[500] text-jade-700 no-underline outline-none hover:text-jade-800 hover:underline focus:text-jade-800 focus:underline"
              >
                Sign In
              </a>
            </span>
            <TextField name={'Name'} type={'text'} placeholder={'Name'} />
            <TextField name={'Email'} type={'text'} placeholder={'Email'} />
            <TextField
              name={'Password'}
              type={'password'}
              placeholder={'Password'}
            />
            <button className="m-5 w-[60%] rounded-lg bg-jade-600 py-4 text-lg font-[500] text-white outline-none hover:bg-jade-800 focus:bg-jade-800">
              Sign Up
            </button>
            <span className="my-4 text-center text-carbon-500 before:relative before:right-3 before:ml-[-100%] before:inline-block before:h-[1px] before:w-full before:bg-carbon-100 before:align-middle after:relative after:left-3 after:mr-[-100%] after:inline-block after:h-[1px] after:w-full after:bg-carbon-100 after:align-middle">
              Or sign up with
            </span>
            <div className="flex">
              <IconButton>
                <Google />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Facebook />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="text-carbon-700 p-3">
        Made as a challenge to replicate{' '}
        <a
          className="font-bold text-jade-700"
          target="_blank"
          href="https://dribbble.com/shots/15247887-Daily-UI-001-Hilfbox-Sign-Up-Page"
        >
          this
        </a>{' '}
        design - more or less :)
      </div>
    </div>
  );
}
