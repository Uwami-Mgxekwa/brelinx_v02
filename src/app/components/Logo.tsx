interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "h-8" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
        brelin<span className="text-green-600 font-black">x</span>
      </span>
    </div>
  );
};

export default Logo;