import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { pageInfo: PageInfo };

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="h-screen relative flex flex-col items-center justify-center gap-12">
      <h3 className="absolute top-20 text-gray-500 uppercase tracking-[20px]">
        Contact
      </h3>
      <h4 className="absolute top-32 text-3xl xl:text-4xl text-center">
        I have got what you need,{" "}
        <span className="underline decoration-[#F7AB0A]/50">
          {"Let's Talk"}
        </span>
      </h4>

      <div className="flex flex-col gap-3 mt-32 sm:mt-40">
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center mx-auto w-[90%] gap-2 max-w-2xl"
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
    </div>
  );
}
