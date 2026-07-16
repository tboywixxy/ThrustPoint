import Image from "next/image";

type ThemeLogoProps = {
  alt?: string;
  className?: string;
  priority?: boolean;
  width: number;
  height: number;
};

export function ThemeLogo({
  alt = "",
  className,
  priority = false,
  width,
  height,
}: ThemeLogoProps) {
  return (
    <span
      className={["theme-logo", className].filter(Boolean).join(" ")}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
    >
      <Image
        className="theme-logo-light"
        src="/ThrustPoint_transparent.png"
        alt=""
        width={width}
        height={height}
        fetchPriority={priority ? "high" : undefined}
      />
      <Image
        className="theme-logo-dark"
        src="/Thrustpoint_white_transparent.png"
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        fetchPriority={priority ? "high" : undefined}
      />
    </span>
  );
}
