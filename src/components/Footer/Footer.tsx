import { FC, memo } from "react";

const Footer: FC = () => {
  return (
    <footer className="relative py-8 md:py-12 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 md:pt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-6 text-sm text-gray-500">
        <div className="text-center md:text-left">
          © 2025 Javier Vallejo. All rights reserved.
        </div>
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-center md:gap-8">
          <a
            href="#"
            className="py-2 px-3 text-center md:p-0 hover:text-white transition-colors cursor-pointer rounded md:rounded-none min-h-[44px] md:min-h-auto flex items-center justify-center md:justify-start"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="py-2 px-3 text-center md:p-0 hover:text-white transition-colors cursor-pointer rounded md:rounded-none min-h-[44px] md:min-h-auto flex items-center justify-center md:justify-start"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
