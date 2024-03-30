// Icons
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Send } from "lucide-react";
// Functions Emil
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// Env Config

// testing toast
// import toast, { Toaster } from "react-hot-toast";
export default function Contact() {
  // const notify = () => toast("Here is your toast.");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_t5dtv24", "template_e05099n", form.current, {
          publicKey: "1054Y9g89yvnISoqM",
          // ,
        })
        .then(
          () => {
            // console.log("SUCCESS!");
            setSuccess("Message Sent Successfully");
            setTimeout(() => {
              setSuccess("");
            }, 3000);
          },
          (error) => {
            // console.log("FAILED...", error.text);
            setError("Message Sent Failed");
            setTimeout(() => {
              setError("");
            }, 3000);
          }
        );
      form.current.reset();
    }
  };

  const [message, setMessage] = useState(
    "hi there! I am interested in working together, feel free to reach out to me."
  );
  return (
    <>
      <div id="contact" className="mt-10">
        <h1 className="text-title mb-4">
          .Contact(“<span className="sub-title">me</span>”)
        </h1>
        <div className="bg-box w-full  rounded-lg">
          {/* <button onClick={notify}>Make me a toast</button>
          <Toaster /> */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative flex flex-col  gap-10 h-full py-10 mx-4 md:mx-10 md:py-[50px]"
            action=""
          >
            <div className="">
              <div className="relative bottom-7 left-3">
                <h1 className="absolute text-light">Full Name</h1>
              </div>

              <div className="relative w-full ">
                <User
                  className="absolute top-[10px] left-[6px] text-light"
                  size={20}
                />
                <input
                  required
                  type="text"
                  name="from_name"
                  className="input_style"
                  placeholder="Example: Mahdi Tij....."
                />
              </div>
            </div>
            <div className="">
              <div className="relative bottom-7 left-3">
                <h1 className="absolute text-light">Email</h1>
              </div>

              <div className="relative w-full ">
                <Mail
                  className="absolute top-[10px] left-[6px] text-light"
                  size={20}
                />
                <input
                  type="email"
                  required
                  name="from_email"
                  className="input_style"
                  placeholder="Example: example@email.com"
                />
              </div>
            </div>
            <div className="">
              <div className="relative bottom-7 left-3">
                <h1 className="absolute text-light">Message</h1>
              </div>

              <div className="relative w-full ">
                <MessageCircle
                  className="absolute top-[6px] left-[6px] text-light"
                  size={20}
                />
                <textarea
                  className="message_input_style"
                  required
                  placeholder={message}
                  name="message"
                  rows="10"
                ></textarea>

                <div className="relative flex flex-col items-center justify-center gap-4 mt-4">
                  <button
                    type="submit"
                    value="Send"
                    className="btn_main w-full flex items-center justify-center gap-2"
                  >
                    <Send />
                    <h1>SEND</h1>
                  </button>
                  {success && <p className="message-success">{success}</p>}
                  {error && <p className="message-error">{error}</p>}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
