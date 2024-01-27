import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <>
        <Link href='/' className='relative flex items-center h-10 my-auto'>
        <Image
            src='https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg'
            alt='logo-img'
            fill
            className='object-contain object-left'
          />
        </Link>
    </>
  )
}

export default Logo