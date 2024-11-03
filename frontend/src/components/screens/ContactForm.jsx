import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    if (data) {
      toast.success("Message sent successfully!");
      reset();
    }
  };

  return (
    <div className=" py-16 lg:py-30 -mt-6 bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Name Field */}
          <div>
            <Input
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="w-full placeholder:text-gray-400/80"
            />
            {errors.name && (
              <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
              className="w-full placeholder:text-gray-400/80"
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <Textarea
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
              className="w-full resize-none placeholder:text-gray-400/80"
              rows={5}
            />
            {errors.message && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary_main before:bg-secondary_main text-white py-3 rounded-lg font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
