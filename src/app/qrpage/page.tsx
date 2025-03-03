import Image from 'next/image';
import Link from 'next/link';
import MoreButton from '@/components/ui/common/MoreButton';
import carrousel1 from "/public/carrousel1.png";
import wompi from "/public/main/logos/wompi-logo.png";

const Qrpage: React.FC = () => {
  return (
    <main className="flex flex-col text-center justify-center items-center">
      <div className="w-full flex-grow bg-white dark:bg-foundationcolorwhite py-8 px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src={carrousel1}
              alt="Image 1"
              width={600}
              height={500}
              className="rounded-lg w-full h-full"
            />
            <p className="mt-10 mb-10 text-lg text-foundationcolorblack dark:text-foundationcolorblack">
              Número de cuenta: 1234567890
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={carrousel1}
              alt="Image 2"
              width={600}
              height={500}
              className="rounded-lg w-full h-full"
            />
            <p className="mt-10 mb-10 text-lg text-foundationcolorblack dark:text-foundationcolorblack">
              Número de cuenta: 0987654321
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={wompi}
              alt="Image 2"
              width={500}
              height={400}
              className="rounded-lg w-full h-full"
            />
            <div className="bg-foundationcolorwhite dark:bg-foundationcolorwhite p-6 rounded-lg">
              <Link href="https://www.wompi.co/">
                <MoreButton text="Ir a Wompi" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Qrpage;