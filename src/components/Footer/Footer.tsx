import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
        <div>
          © 2025 Javier Vallejo. All rights reserved.
        </div>
        <div className="flex items-center gap-8">
           <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
           <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
