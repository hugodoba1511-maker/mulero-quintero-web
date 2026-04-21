import Link from "next/link";

interface CTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTA({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: CTAProps) {
  return (
    <div className="bg-gradient-to-r from-red-50 to-red-25 rounded-lg p-8 border-l-4 border-red-600">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href={primaryButtonHref}>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-colors duration-200">
            {primaryButtonText}
          </button>
        </Link>
        {secondaryButtonText && secondaryButtonHref && (
          <Link href={secondaryButtonHref}>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-3 px-6 rounded transition-colors duration-200">
              {secondaryButtonText}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
