import Image from "next/image";

const WorkstyleSection = () => {
    return (
        <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">My Work Style</h2>
        
        <div className="mt-8 text-center md:text-left px-4">
            <h3 className="text-2xl text-center font-semibold text-white mb-4">Using VSCode & GitHub Copilot</h3>
            <p className="text-base text-[#ADB7BE] mb-4">
            I leverage the power of modern tools like <span className="text-primary-400">VSCode</span> and <span className="text-primary-400">GitHub Copilot</span> to enhance my productivity and streamline the development process. These tools help me write clean, efficient, and maintainable code while reducing repetitive tasks.
            </p>
            <p className="text-base text-[#ADB7BE]">
            With <span className="text-primary-400">GitHub Copilot</span>, I can quickly generate code snippets, debug issues, and explore new ideas, making programming faster and more enjoyable. Combined with the flexibility of <span className="text-primary-400">VSCode</span>, I can focus on solving complex problems and delivering high-quality solutions.
            </p>
        </div>

        <Image
          src="/images/work-style.png"
          alt="VS Code and Copilot in action"
          width={1920}
          height={1080}
          className="rounded-lg mx-auto mt-16"
        />
      </div>
    );
}

export default WorkstyleSection;