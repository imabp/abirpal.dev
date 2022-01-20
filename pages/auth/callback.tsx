import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Callback = () => {
  const router = useRouter();
  const [id, setID] = useState("");
  useEffect(() => {
    const { code } = router.query;
    setID(code as string);
  }, [router.isReady]);

  useEffect(() => {
    if (id !== undefined && id.length > 2) apicall();
  }, [id]);

  const apicall = () =>
    window
      .fetch("/api/auth/callback/github", {
        method: "POST",
        body: JSON.stringify({ code: id }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        return res.json();
      })
      .then((data: any) => {
        console.log(data);
        if (data.auth) {
          window.location.replace("/guestbook");
        }
      });

  return (
    <div className="h-screen w-full bg-primary flex justify-center">
      <div className="flex flex-col h-full w-full justify-center">
        <p className="text-fs24 text-center text-secondary">
          {" "}
          Thank you for signing up.
          <br /> Redirecting you to Guestbook <br />
        </p>
      </div>
    </div>
  );
};
export default Callback;
