import Layout from "../src/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { home } from "../src/routes.config";
const Guestbook = () => {
 
  return (
    <>
      <Layout footer={false} bgPattern={true}>
        <div className="flex w-full justify-center">
          <div className="flex flex-col justify-center h-full">
            <p className="text-fs24 text-center">
              GuestBook
              <br />
              coming soon
              <br />
              <Link href={home.route} passHref>
                <Image
                  src="/system/vectors/home.svg"
                  layout="fixed"
                  height="24"
                  width="24"
                />
              </Link>
            </p>
            <div className="p-4 bg-accent text-secondary rounded-md"
            >
              Sign In with Github
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Guestbook;
