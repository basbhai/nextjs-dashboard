import { Inter, Lora, Lusitana } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const lora = Lora({
  weight: ['400', '700'],
  style: ['italic', 'normal'],

  subsets: ['cyrillic'],
});

const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export { inter, lora, lusitana };
