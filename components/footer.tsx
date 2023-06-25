import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="flex flex-col sm:flex-row items-center">
          <h3 className="text font-light tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Learn from this, but do your own research and consider the tradeoffs
            for your own plane. ©2023
          </h3>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
