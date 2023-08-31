import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import '../globals.css'
import { cx } from 'class-variance-authority';
import Accessibilty from './accessibility';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/Footer';
import Whatsapp from '@/components/Whatsapp';
 
export function generateStaticParams() {
  return [{locale: 'he'}, {locale: 'en'}, {locale: 'ru'}];
}
 
export default async function LocaleLayout({children, params: {locale}}) {
  let messages;
  try {
    messages = (await import(`../../translations/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html 
      lang={locale} 
      dir={locale === "he" ? "rtl" : "ltr"} 
      className={cx(locale === "he" ? "font-Assistant" : "", "overflow-y-auto overflow-x-hidden w-screen")}
      style={{
        fontSize: "100%"
      }}
    >
      <head>
        <link rel="icon" href="/images/LogoOnly.jpg" />
          <title>Dr. Ougortsin</title>
      </head>
      <body className="bg-secondary">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Accessibilty />
          <Whatsapp />
          <Navbar locale={locale}/>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}