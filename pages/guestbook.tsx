import Layout from "../src/components/Layout"

const Guestbook = ()=>{
    return <>
    <Layout footer={false} bgPattern={true}>
        <div className="flex w-full justify-center">
            <div className="flex flex-col justify-center h-full">
                <p className="text-fs24 text-center">
                    GuestBook<br/>
                    coming soon</p>
            </div>
        </div>
    </Layout>
    </>
}
export default Guestbook;