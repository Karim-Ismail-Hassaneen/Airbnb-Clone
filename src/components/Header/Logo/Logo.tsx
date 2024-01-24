import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <>
        <Link href='/'>
          <Image src='/assets/images/airbnb.svg' alt="airbnb logo" width={150} height={150} objectFit="contain"/>
        </Link>
    </>
  )
}

export default Logo