import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const collections = [
    {
      id: 1,
      name: 'Play golf',
      href: '#',
      infos: 'You can book your tee-time at the reception, for a preferential green fee tarif.Course services: If you would like “Nearest to Pin” or “Longest Drive” markers, please let us know before 17:00 the day before. More golf: If you would like to book an extra round of golf during your stay, please contact the Reception.',
      imageSrc: '/img/Play-golf.png',
      imageAlt: 'Play-golf.',
    },
    {
      id: 2,
      name: 'Golf bag Locker',
      href: '#',
      infos: 'A locker for your golf bag and trolley is at your disposal free of charge. The storage room is located at the end of the hotel building, accessible via the courtyard. For further information ask at the Reception.',
      imageSrc: '/img/Golf-bag-Locker.png',
      imageAlt: 'Golf-bag-Locker.',
    },
    {
      id: 3,
      name: 'Driving Range',
      href: '#',
      infos: 'The ball machine at the driving range accepts 1€ coins.',
      imageSrc: '/img/Driving-Range.png',
      imageAlt: 'Driving-Range.',
    },
    {
      id: 4,
      name: 'Rentals',
      href: '#',
      infos: 'Buggy rental: Golf buggies can be reserved at the office.If you have a tee-off before 8:00, please reserve and pick up your keys before 17:30 the day before.The prices are available at the reception. This can be paid separately or put on the room bill. Trolley rental: Trolley handles can be collected at the Reception and you will find the trolleys in the courtyard. There is a charge of 6€ per trolley, per round.',
      imageSrc: '/img/Rentals.png',
      imageAlt: 'Rentals.',
    },
    // More products...
]
  
export default function Golf() {

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
          <h2 className="sr-only">Golf</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-10">
            {collections.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
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
