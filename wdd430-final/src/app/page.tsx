// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
//import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { Card } from '@/app/ui/cards';
import {CardsSkeleton} from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/cards';
import Search from '@/app/ui/search';

export default async function Page(props: { searchParams?: Promise<{ query?: string; page?: string }> }) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  //const totalPages = await fetchInvoicesPages(query);
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex flex-col justify-center gap-6 bg-lime-800 px-6 py-10 w-full min-h-[30px]">
        <p className="text-left pl-20 text-2xl font-medium text-white">
          HandCrafted Haven
        </p>
                <Link
          href="/create"
          className="rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Create Product
        </Link>
      </div>
<div className="mt-4 md:mt-8 flex flex-col gap-6">
  <div className="pl-6 w-full">
    <Search placeholder="Search invoices..." />
  </div>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    <Suspense fallback={<CardsSkeleton />}>
      <CardWrapper />
    </Suspense>
  </div>
</div>


    
      
    </main>
  );
}
