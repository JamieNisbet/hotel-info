import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const collections = [
    {
      id: 1,
      name: 'Golf Château de la Tournette',
      href: '#',
      infos: 'Stay at Pierpont & Play at La Tournette!\nReduced Green Fee for Pierpont Play & Stay Packs! \n+32 (0)67 894 266 \ninfo@tournette.com \nwww.tournette.com \nChemin de Baudemont 21 B-1400 Nivelles, Belgium.',
      imageSrc: '/img/Stay-at-Pierpont-and-Play-at-La-Tournette.png',
      imageAlt: 'Stay-at-Pierpont-and-Play-at-La-Tournette.',
    },
    {
      id: 2,
      name: 'Golf Club Enghien',
      href: '#',
      infos: 'Stay at Pierpont & Play at Enghien! \nReduced Green Fee for Pierpont Play & Stay Packs!  \n+32 (0)2 397 03 10 \ninfo@golfclubenghien.com \nwww.golfclubenghien.com \nChaussee Brunehault - Parc Chateau 4 B-7850 Petit-Enghien, Belgium.',
      imageSrc: '/img/Golf-Club-Enghien.png',
      imageAlt: 'Golf-Club-Enghien.',
    },
    {
      id: 3,
      name: 'Golf & Country Club Hoenshuis',
      href: '#',
      infos: 'Also visit G&CC Hoenshuis, near Maastricht! \n+31 (0) 45 575 330 \ninfo@hoenshuis.nl \nwww.hoenshuis.nl \nHoensweg 176367 GN Voerendaal, The Netherlands. \nContact the Club for Hotel accomodation!',
      imageSrc:'/img/Golf-and-Country-Club-Hoenshuis.png',
      imageAlt: 'Golf-and-Country-Club-Hoenshuis.',
    },
   
    // More products...
]
  
export default function Activities() {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00612e] to-[#00612e] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Activities</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-10">
            {collections.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-48 w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900" style={{whiteSpace: "pre-wrap"}}>{product.infos}</p>
              </a>
            ))}
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00612e] to-[#00612e] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
