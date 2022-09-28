import React, { useRef, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import emailjs from "@emailjs/browser";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { pageInfo: PageInfo };

export default function ContactMe({ pageInfo }: Props) {
  const [formShown, setFormShown] = useState(true);
  const { register, handleSubmit } = useForm<Inputs>();

  const formRef = useRef();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setFormShown(false);
  };
  const isKeyboardOpen = useDetectKeyboardOpen();

  return (
    <div className="h-screen relative flex flex-col items-center justify-center gap-12">
      <h3 className="absolute top-20 text-gray-500 uppercase tracking-[20px]">
        Contact
      </h3>
      <h4
        className={`${
          isKeyboardOpen && "hidden"
        } absolute top-32 text-3xl xl:text-4xl text-center`}
      >
        I have got what you need,{" "}
        <span className="underline decoration-[#F7AB0A]/50">
          {"Let's Talk"}
        </span>
      </h4>

      <div
        className={`${
          isKeyboardOpen && "hidden"
        } flex flex-col gap-3 mt-32 sm:mt-40`}
      >
        <div className="flex items-center justify-center gap-5">
          <PhoneIcon className="w-6 h-6 text-[#F7AB0A]/40 animate-pulse" />
          <p className="text-md">{pageInfo?.phoneNumber}</p>
        </div>
        <div className="flex items-center justify-center gap-5">
          <EnvelopeIcon className="w-6 h-6 text-[#F7AB0A]/40 animate-pulse" />
          <p className="text-md">{pageInfo?.email}</p>
        </div>
        <div className="flex items-center justify-center gap-5">
          <MapPinIcon className="w-6 h-6 text-[#F7AB0A]/40 animate-pulse" />
          <p className="text-md">{pageInfo?.address}</p>
        </div>
      </div>
      {formShown && (
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className={`${
            isKeyboardOpen && "mt-40"
          } flex flex-col justify-center mx-auto w-[90%] gap-2 max-w-2xl`}
        >
          <div className="flex gap-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
              name="name"
              id="name"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
            id="subject"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput h-32"
          />
          <button
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
      {!formShown && (
        <div className="text-lg px-4 min-h-[200px]  text-center flex items-center">
          Thank you for your message, you will hear from me shortly!
        </div>
      )}
    </div>
  );
}
