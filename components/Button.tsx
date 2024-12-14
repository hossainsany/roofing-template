import Link from 'next/link';

type buttonType = {
    href: string;
    size?: 'normal' | 'wide';
    variant: 'full' | 'outline';
    className?: string;
    children: React.ReactNode;
};

const Button = ({ href, size = 'normal', variant = 'full', className, children }: buttonType) => {
    return (
        <Link
            href={href}
            className={`text-base font-medium text-black rounded-md  border-accent inline-block ${
                size === 'normal'
                    ? 'px-6 py-[6px]'
                    : size === 'wide'
                    ? 'w-full text-center py-2'
                    : ''
            } ${
                variant === 'full'
                    ? 'bg-accent hover:bg-accent/85 hover:border-accent/85 py-[9px]'
                    : variant === 'outline'
                    ? 'bg-transparent border-accent border-[3px] hover:bg-accent text-primary hover:text-black'
                    : ''
            } transition-all duration-300 ${className}`}
        >
            {children}
        </Link>
    );
};

export default Button;
