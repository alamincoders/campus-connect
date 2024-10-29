import { Button } from "../ui/button";
import { Input } from "../ui/input";

const NewsLetter = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-[#125875] text-white ">
      <div className="container_fluid">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="flex items-center gap-4 lg:col-span-3">
            <img
              src="/send-mail.png"
              alt="send-mail"
            />
            <div>
              <h3 className="text-[40px] leading-none font-bold mb-0">
                Subscribe for Newsletter
              </h3>
              <p className="text-[15px] font-roboto">
                To get our latest news and updates.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 relative">
            <Input
              type="email"
              placeholder="Email Address"
              className="py-5 pl-6 pr-9 h-[calc_(2em_+_.75rem_+_20px)] bg-white text-secondary_main  text-sm font-roboto"
            />
            <Button
              className="absolute  rounded-md py-3.5 px-6 top-[5px] right-1 bg-secondary_main before:bg-primary_main "
              type="submit"
            >
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
