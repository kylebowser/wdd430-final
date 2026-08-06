// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
//import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Search from '@/app/ui/search';

export default async function Page(props: { searchParams?: Promise<{ query?: string; page?: string }> }) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  //const totalPages = await fetchInvoicesPages(query);
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex flex-col justify-center gap-6 bg-lime-800 px-6 py-10 w-full min-h-30">
        <p className="flex text-left pl-20 text-2xl font-medium text-white">
          HandCrafted Haven
        </p>
      </div>
      {/* <div className="mt-4 flex items-center justify-between gap-2 md:mt-8"> */}
      {/* <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 px-6">
        <Search placeholder="Search invoices..." />
        { <CreateInvoice />}
      </div> */}
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
  <div className="pl-6 w-full">
    <Search placeholder="Search invoices..." />
  </div>
</div>

    
      
    </main>
  );
}
