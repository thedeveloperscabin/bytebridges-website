export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-white dark:bg-black border-t border-gray-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} BinaryBase. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
        <a href="https://www.linkedin.com/in/sarveshkrishnaak" target="_blank" className="hover:text-indigo-600 transition">
            LinkedIn
        </a>
        <a href="https://github.com/SarveshKrishnaAK" target="_blank" className="hover:text-indigo-600 transition">
            GitHub
        </a>
        <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
        </a>
        </div>
      </div>
    </footer>
  );
}