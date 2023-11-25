import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contact" className="max-w-[1240px] w-full mx-auto py-24 px-4">
      {/* Headings */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-[#CD5C5C]">Contact Us</h1>
        <p className="mt-4 text-lg text-[#CD5C5C]">Feel free to get in touch</p>
      </motion.div>

      {/* Form and Image */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 mt-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/assets/images/contact-illustration.png" // Replace with the correct path to your image
            alt="Contact"
            height={500}
            width={500}
            layout="intrinsic"
          />
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/15f383efedbc50880395591502a66928"
            method="POST"
            className="flex flex-col space-y-4"
          >
            <input
              className="w-full bg-red-400 font-semibold placeholder-black p-3 rounded-md"
              type="text"
              placeholder="NAME"
              {...register("name", { required: true, maxLength: 100 })}
            />
            {errors.name && (
              <p className="text-red-700">{errors.name.message}</p>
            )}

            <input
              className="w-full bg-red-400 font-semibold placeholder-black p-3 rounded-md"
              type="email"
              placeholder="EMAIL"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-700">{errors.email.message}</p>
            )}

            <input
              className="w-full bg-red-400 font-semibold placeholder-black p-3 rounded-md"
              type="text"
              placeholder="SUBJECT"
              {...register("subject", { required: true })}
            />
            {errors.subject && (
              <p className="text-red-700">{errors.subject.message}</p>
            )}

            <textarea
              className="w-full bg-red-400 font-semibold placeholder-black p-3 rounded-md"
              placeholder="MESSAGE"
              rows="4"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <p className="text-red-700">{errors.message.message}</p>
            )}

            <button
              type="submit"
              className="bg-yellow-300 font-semibold text-black p-3 rounded-md hover:bg-yellow-500 transition duration-300"
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
